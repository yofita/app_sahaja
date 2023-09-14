import os
import json
import psycopg2
import psycopg2.extras
import requests
import rasterio
import numpy as np
import random
import string
import shutil
from rasterio.mask import mask
from area import area
from fastapi.responses import JSONResponse
from fastapi import FastAPI
from settings import db_parameter, cors_origins, api_conf, spatial_data_path
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import FileResponse
from pydantic import BaseModel


app = FastAPI(
    title=api_conf["title"],
    description=api_conf["description"],
    version=api_conf["version"],
    docs_url=api_conf["docs_url"],
    redoc_url=api_conf["redoc_url"],
    openapi_url=api_conf["openapi_url"],
)

origins = cors_origins

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

conn = psycopg2.connect(
    host=db_parameter["host"],
    database=db_parameter["database"],
    user=db_parameter["user"],
    password=db_parameter["password"]
)

cur_dir = os.path.dirname(os.path.abspath(__file__))

@app.get(api_conf["api_url"] + "/getwplkabkot")
async def getWplKabkot():
    cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    sql = '''
        SELECT kabupaten_
        FROM public.wpl_kabkota_4nm
        WHERE provinsi='Jawa Tengah'
    '''
    cur.execute(sql)
    all_data = cur.fetchall()
    cur.close()
    return JSONResponse(content=all_data)

@app.get(api_conf["api_url"] + "/getkabkot")
async def getKabkot():
    cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    sql = '''
        SELECT wadmkk
        FROM public.kabkot_admin;
    '''
    cur.execute(sql)
    all_data = cur.fetchall()
    cur.close()
    return JSONResponse(content=all_data)


@app.get(api_conf["api_url"] + "/getkecamatan")
async def getKecamatan(wadmkk: str = None):
    cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    if wadmkk==None:
        sql = '''
            SELECT wadmkc
            FROM public.kecamatan_admin
            WHERE wadmkc IS NOT NULL
            ORDER BY wadmkc;
        '''
        cur.execute(sql)
    else:
        sql = '''
            SELECT wadmkc, wadmkk
            FROM public.kecamatan_admin
            WHERE wadmkk=%s AND wadmkc IS NOT NULL
            ORDER BY wadmkc;
        '''
        cur.execute(sql, (wadmkk,))
    all_data = cur.fetchall()
    cur.close()
    return JSONResponse(content=all_data)


# class FeatureInfo(BaseModel):
#     featureinfo_url: str

# @app.post(api_conf["api_url"] + "/requestfeatureinfo")
# async def requestFeatureInfo(featureinfo: FeatureInfo):
#     resp = requests.get(url=featureinfo.featureinfo_url)
#     data = resp.json()
#     return JSONResponse(content=data)


class LandSuitProcess(BaseModel):
    mask_polygon: str
    start_year: int
    end_year: int
    data_type: str


@app.post(api_conf["api_url"] + "/landsuit_process")
async def landSuitProcess(landsuit_process: LandSuitProcess):
    raster_path = spatial_data_path["raster_path"]
    mask_polygon = landsuit_process.mask_polygon
    start_year = landsuit_process.start_year
    end_year = landsuit_process.end_year
    data_type = landsuit_process.data_type
    value_json = {}
    mask_polygon_geojson = json.loads(mask_polygon)['features']
    geoms = []
    for geom in mask_polygon_geojson:
        geoms.append(geom['geometry'])
    masker_area = 0
    for geom in geoms:
        masker_area += area(geom)
    for year in range(start_year, end_year+1):
        with rasterio.open(os.path.join(raster_path, spatial_data_path[data_type] % year)) as src:
            out_image, out_transform = mask(src, geoms, crop=True)
            unique, counts = np.unique(out_image, return_counts=True)
            gt = src.transform
            print(os.path.join(raster_path, spatial_data_path[data_type] % year))
            try:
                zipped_value = dict(zip(unique, counts))
                print(zipped_value)
                zipped_value.pop(0, None)
                print(zipped_value)
                accum = sum(zipped_value.values())
                print(accum)
                def formula(value):
                    return int(value)/accum*100
                value_json[year] = {
                    'tidak_sesuai': formula(zipped_value[1]) if 1 in zipped_value else 0,
                    'cukup_sesuai': formula(zipped_value[2]) if 2 in zipped_value else 0,
                    'sesuai': formula(zipped_value[3]) if 3 in zipped_value else 0,
                    'sangat_sesuai': formula(zipped_value[4]) if 4 in zipped_value else 0
                }
            except Exception as err:
                print(err)
    print(value_json)
    return JSONResponse(content=value_json)


