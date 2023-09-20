import 'ol/ol.css';
import TileWMS from 'ol/source/TileWMS';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import Geolocation from 'ol/Geolocation';
import Feature from 'ol/Feature';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
import {Vector as VectorSource} from 'ol/source';
import Point from 'ol/geom/Point';
import GeoJSON from 'ol/format/GeoJSON';
import Chart from 'chart.js/auto';
import {ScaleLine, defaults as defaultControls} from 'ol/control';

/* All WMS */
const wmsLandSuitTeh = new TileWMS ({
  url: 'http://103.178.153.209/geoserver/sahaja/wms',
  params: {
    'FORMAT': 'image/png',
    'VERSION': '1.1.1',
    'LAYERS': 'sahaja:teh_2022',
    'TILED': true
  },
  hidpi: 'true',
  serverType: 'geoserver',
});
const wmsLandSuitTeh2021 = new TileWMS ({
  url: 'http://103.178.153.209/geoserver/sahaja/wms',
  params: {
    'FORMAT': 'image/png',
    'VERSION': '1.1.1',
    'LAYERS': 'sahaja:teh_2021',
    'TILED': true
  },
  hidpi: 'true',
  serverType: 'geoserver',
});
const wmsLandSuitTeh2020 = new TileWMS ({
  url: 'http://103.178.153.209/geoserver/sahaja/wms',
  params: {
    'FORMAT': 'image/png',
    'VERSION': '1.1.1',
    'LAYERS': 'sahaja:teh_2020',
    'TILED': true
  },
  hidpi: 'true',
  serverType: 'geoserver',
});

const wmsLandSuitTebu = new TileWMS ({
  url: 'http://103.178.153.209/geoserver/sahaja/wms',
  params: {
    'FORMAT': 'image/png',
    'VERSION': '1.1.1',
    'LAYERS': 'sahaja:tebu_2022',
    'TILED': true
  },
  hidpi: 'true',
  serverType: 'geoserver',
});
const wmsLandSuitTebu2021 = new TileWMS ({
  url: 'http://103.178.153.209/geoserver/sahaja/wms',
  params: {
    'FORMAT': 'image/png',
    'VERSION': '1.1.1',
    'LAYERS': 'sahaja:tebu_2021',
    'TILED': true
  },
  hidpi: 'true',
  serverType: 'geoserver',
});
const wmsLandSuitTebu2020 = new TileWMS ({
  url: 'http://103.178.153.209/geoserver/sahaja/wms',
  params: {
    'FORMAT': 'image/png',
    'VERSION': '1.1.1',
    'LAYERS': 'sahaja:tebu_2020',
    'TILED': true
  },
  hidpi: 'true',
  serverType: 'geoserver',
});

const wmsLandSuitPerikanan = new TileWMS ({
  url: 'http://103.178.153.209/geoserver/sahaja/wms',
  params: {
    'FORMAT': 'image/png',
    'VERSION': '1.1.1',
    'LAYERS': 'sahaja:perikanan_2022',
    'TILED': true
  },
  hidpi: 'true',
  serverType: 'geoserver',
});
const wmsLandSuitPerikanan2021 = new TileWMS ({
  url: 'http://103.178.153.209/geoserver/sahaja/wms',
  params: {
    'FORMAT': 'image/png',
    'VERSION': '1.1.1',
    'LAYERS': 'sahaja:perikanan_2021',
    'TILED': true
  },
  hidpi: 'true',
  serverType: 'geoserver',
});
const wmsLandSuitPerikanan2020 = new TileWMS ({
  url: 'http://103.178.153.209/geoserver/sahaja/wms',
  params: {
    'FORMAT': 'image/png',
    'VERSION': '1.1.1',
    'LAYERS': 'sahaja:perikanan_2020',
    'TILED': true
  },
  hidpi: 'true',
  serverType: 'geoserver',
});

const wmsAdmKabkot = new TileWMS ({
  url: 'http://103.178.153.209/geoserver/sahaja/wms',
  params: {
    'FORMAT': 'image/png',
    'VERSION': '1.1.1',
    'LAYERS': 'sahaja:kabkot_admin',
    'TILED': true
  },
  hidpi: 'true',
  serverType: 'geoserver',
});

const wmsAdmKecamatan = new TileWMS ({
  url: 'http://103.178.153.209/geoserver/sahaja/wms',
  params: {
    'FORMAT': 'image/png',
    'VERSION': '1.1.1',
    'LAYERS': 'sahaja:kecamatan_admin',
    'TILED': true
  },
  hidpi: 'true',
  serverType: 'geoserver',
});

const wmsWplKabkot = new TileWMS ({
  url: "http://103.178.153.209/geoserver/sahaja/wms",
  params: {
    'FORMAT': 'image/png',
    'VERSION': '1.1.1',
    'LAYERS': 'sahaja:wpl_kabkota_4nm',
    'CQL_FILTER': "provinsi='Jawa Tengah'",
    'TILED': true
  },
  hidpi: 'true',
  serverType: 'geoserver',
});

const wmsPersilJateng = new TileWMS ({
  url: "http://103.178.153.209/geosv2/pemda/wms?authkey=8a3e974b-b527-49ef-b107-455094962abe",
  params: {
    'FORMAT': 'image/png',
    'VERSION': '1.1.1',
    'LAYERS': 'pemda:persiljateng',
    'TILED': true
  },
  hidpi: 'true',
  serverType: 'geoserver',
});


/* Layers Defined */
const layers = [
  new TileLayer({
    source: new OSM(),
  }),
  new TileLayer({
    source: wmsLandSuitTeh2020,
  }),
  new TileLayer({
    source: wmsLandSuitTeh2021,
  }),
  new TileLayer({
    source: wmsLandSuitTeh,
  }),
  new TileLayer({
    source: wmsLandSuitTebu2020,
  }),
  new TileLayer({
    source: wmsLandSuitTebu2021,
  }),
  new TileLayer({
    source: wmsLandSuitTebu,
  }),
  new TileLayer({
    source: wmsLandSuitPerikanan2020,
  }),
  new TileLayer({
    source: wmsLandSuitPerikanan2021,
  }),
  new TileLayer({
    source: wmsLandSuitPerikanan,
  }),
  new TileLayer({
    source: wmsPersilJateng,
  }),
  new TileLayer({
    source: wmsAdmKabkot,
  }),
  new TileLayer({
    source: wmsAdmKecamatan,
  }),
  new TileLayer({
    source: wmsWplKabkot,
  }),
];

const view = new View({
  center: [110.5, -7.271],
  zoom: 8,
  projection: 'EPSG:4326'
});
const map = new Map({
  layers: layers,
  target: 'map',
  controls: defaultControls().extend([scaleControl()]),
  view: view
});

map.getLayers().getArray()[10].setVisible(false)

// Map Event
// map.on('singleclick', function (evt) {
//   const clicked_coordinate = evt.coordinate;
//   const pixel_coordinate = map.getPixelFromCoordinate(clicked_coordinate);
//   const map_width = document.getElementById("map").offsetWidth;
//   const map_height = document.getElementById("map").offsetHeight;
//   const extent = map.getView().calculateExtent(map.getSize());


//   var params = {
//     service: 'WMS',
//     info_format: 'application/json',
//     request: 'GetFeatureInfo',
//     exceptions: 'application/vnd.ogc.se_xml',
//     version: '1.1.1',
//     layers: '',
//     query_layers: '',
//     typename: '',
//     x: Math.ceil(pixel_coordinate[0]),
//     y: Math.ceil(pixel_coordinate[1]),
//     bbox: extent.toString(),
//     width: map_width,
//     height: map_height,
//   };

//   let paramurl = new URLSearchParams(params).toString();
//   const url = wmsurl+paramurl;

//   fetch(url)
//     .then(res => res.json())
//     .then((data) => {
//       console.log(data['features'][0]['properties']);
//       const recordAttr = data['features'][0]['properties'];
//       alert("Tipe Hak: "+recordAttr['TIPEHAK']+"\nNIB: "+recordAttr['NIB']);
//     })
//     .catch(err => { throw err });

// });

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// SideBar Controller
document.querySelector('#hideSideBar').onclick = function () {
  if (this.classList.contains('open') ){
    closeNav();
    this.classList.remove('open');
    this.classList.add('close');
  } else {
    openNav();
    this.classList.remove('close');
    this.classList.add('open');
  }
}
function openNav() {
  document.getElementById("sideBar").style.width = "360px";
  document.getElementById("sideBar").style.paddingLeft = "5px";
  document.getElementById("sideBar").style.paddingRight = "5px";
  document.getElementById("hideSideBar").style.left = "-40px";
  document.getElementById("hideSideBar").innerHTML = "<i class='bi bi-arrow-bar-right'></i>";

}
function closeNav() {
  document.getElementById("sideBar").style.width = "0";
  document.getElementById("sideBar").style.paddingLeft = "0";
  document.getElementById("sideBar").style.paddingRight = "0";
  document.getElementById("hideSideBar").style.left = "-98px";
  let new_button = "<i class='bi bi-arrow-bar-left'></i><span style='font-size:13px;top: -2px;position: relative;'>Tampilkan</span>";
  document.getElementById("hideSideBar").innerHTML = new_button;
}

// Zoom Controller
document.querySelector('#zoomInBtn').onclick = function () {
  let newZoomLevel = map.getView().getZoom() + 0.2;
  map.getView().animate({
    zoom: newZoomLevel,
    duration: 200
  })
}
document.querySelector('#zoomOutBtn').onclick = function () {
  let newZoomLevel =  map.getView().getZoom() - 0.2;
  map.getView().animate({
    zoom: newZoomLevel,
    duration: 200
  })
}

// Fullscreen Controller
function setMapToFullScreen(){
  var elem = document.getElementsByTagName("BODY")[0];
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11  */
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Mozila  */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari  */
    elem.webkitRequestFullscreen();
  }
}
function setMapToExitFullScreen(){
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11  */
      document.msExitFullscreen();
    } else if (document.mozExitFullScreen) { /* Mozila */
      document.mozExitFullScreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    }
}
document.querySelector('#fullScreenBtn').onclick = function () {
  map.getView().animate({
    zoom: map.getView().getZoom() - 0.2,
    duration: 200
  })
  if((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
    setMapToExitFullScreen();
    document.getElementById("fullScreenBtn").innerHTML = '<i class="bi bi-fullscreen"></i>';
  } else {
    setMapToFullScreen();
    document.getElementById("fullScreenBtn").innerHTML = '<i class="bi bi-fullscreen-exit"></i>';
  }
  
}

// Geo Location
const geolocation = new Geolocation({
  trackingOptions: {
    enableHighAccuracy: true,
  },
  projection: view.getProjection(),
});
document.querySelector('#geoLocationBtn').onclick = function () {
  geolocation.setTracking(true);
};

// Get Position Accuracy
geolocation.on('change', function () {
  let accuracy = " : " + geolocation.getAccuracy().toFixed(3) + 'm';
  // let altitude = geolocation.getAltitude() + ' [m]';
  // let altitudeAccurary = geolocation.getAltitudeAccuracy() + ' [m]';
  document.getElementById("accuracyInfo").innerHTML = accuracy;
});

geolocation.on('error', function (error) {
  alert(error.message);
});

const accuracyFeature = new Feature();
geolocation.on('change:accuracyGeometry', function () {
  accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
});

const positionFeature = new Feature();
positionFeature.setStyle(
  new Style({
    image: new CircleStyle({
      radius: 6,
      fill: new Fill({
        color: '#0f4069',
      }),
      stroke: new Stroke({
        color: '#0f4069',
        width: 2,
      }),
    }),
  })
);

geolocation.on('change:position', function () {
  const coordinates = geolocation.getPosition();
  positionFeature.setGeometry(coordinates ? new Point(coordinates) : null);
  console.log(coordinates);
  view.animate({
    center: coordinates,
    duration: 1000,
    zoom: 16
  });
});

new VectorLayer({
  map: map,
  source: new VectorSource({
    features: [accuracyFeature, positionFeature],
  }),
});

// Mouseover Coordinate
map.on('pointermove', (evt) => {
  const mouseCoordinate = evt.coordinate;
  let lonCoord = mouseCoordinate[0];
  let latCoord = mouseCoordinate[1];
  document.getElementById("lonInfo").innerHTML = " : " + lonCoord.toFixed(5);
  document.getElementById("latInfo").innerHTML = " : " + latCoord.toFixed(5);
});


// Scale Line
function scaleControl() {
  let control = new ScaleLine({
    units: 'metric',
    bar: false,
    steps: '4',
    text: true,
    minWidth: 140,
    className: 'scale-line'
  });
  return control;
}
map.addControl(scaleControl());

// Wilayah Pengelolaan Laut Controller
// Kabkot options
fetch('http://103.178.153.209/api/getwplkabkot')
  .then(response => response.json())
  .then(data => {
      let kabkotlaut_opt = document.querySelector(".kabkotlaut-opt");
      data.forEach(element => {
        let kabkotname = element['kabupaten_'];
        let newoption = new Option(kabkotname, kabkotname);
        kabkotlaut_opt.add(newoption, undefined);
      });
  });

document.querySelector('#searchKabkotLaut').onchange = function () {

    let kabkotlaut_value = document.querySelector(".kabkotlaut-opt").value;
    let wfs_geojson = 'http://103.178.153.209/geoserver/sahaja/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=sahaja:wpl_kabkota_4nm&outputFormat=application/json';
    fetch(wfs_geojson + "&CQL_FILTER=kabupaten_='"+kabkotlaut_value+"'")
      .then(response => response.json())
      .then(data => {  
          // Filter Kabkot Params
          console.log(kabkotlaut_value)
          var params = wmsWplKabkot.getParams();
          params.CQL_FILTER = "kabupaten_='"+kabkotlaut_value+"'";
          wmsWplKabkot.updateParams(params);
  
          // Get Extent
          var extent = new VectorSource({
            features: new GeoJSON().readFeatures(data)
          }).getExtent();
          map.getView().fit(extent, map.getSize());

          document.querySelector('#landSuitProcessBtn').onclick = function () {
            postLandSuitProcess(data, kabkotlaut_value);
          }
    
  
      });
      
  }

// Batas Administrasi Controller
// Kabkot options
fetch('http://103.178.153.209/api/getkabkot')
  .then(response => response.json())
  .then(data => {
      let kabkot_opt = document.querySelector(".kabkot-opt");
      data.forEach(element => {
        let kabkotname = element['wadmkk'];
        let newoption = new Option(kabkotname, kabkotname);
        kabkot_opt.add(newoption, undefined);
      });
  });

document.querySelector('#searchKabkot').onchange = function () {

  document.querySelector(".kecamatan-opt").innerHTML = "";
  let kabkot_value = document.querySelector(".kabkot-opt").value;
  let wfs_geojson = 'http://103.178.153.209/geoserver/sahaja/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=sahaja:kabkot_admin&outputFormat=application/json';
  fetch(wfs_geojson + "&CQL_FILTER=wadmkk='"+kabkot_value+"'")
    .then(response => response.json())
    .then(data => {
        // Kecamatan options
        fetch('http://103.178.153.209/api/getkecamatan?wadmkk='+kabkot_value)
          .then(response => response.json())
          .then(data => {
              let kecamatan_opt = document.querySelector(".kecamatan-opt");
              data.forEach(element => {
                let kecamatanname = element['wadmkc'];
                let newoption = new Option(kecamatanname, kecamatanname);
                kecamatan_opt.add(newoption, undefined);
              });
          });

        // Filter Kabkot Params
        var params = wmsAdmKabkot.getParams();
        params.CQL_FILTER = "wadmkk='"+kabkot_value+"'";
        wmsAdmKabkot.updateParams(params);

        // Filter Kecamatan Params
        var params = wmsAdmKecamatan.getParams();
        params.CQL_FILTER = "wadmkk='"+kabkot_value+"'";
        wmsAdmKecamatan.updateParams(params);

        // Get Extent
        var extent = new VectorSource({
          features: new GeoJSON().readFeatures(data)
        }).getExtent();
        map.getView().fit(extent, map.getSize());

        document.querySelector('#searchKec').onchange = function () {
          
          let kecamatan_value = document.querySelector(".kecamatan-opt").value;
          let wfs_geojson = 'http://103.178.153.209/geoserver/sahaja/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=sahaja:kecamatan_admin&outputFormat=application/json';
          fetch(wfs_geojson + "&CQL_FILTER=wadmkc='"+kecamatan_value+"'")
            .then(response => response.json())
            .then(data => {

              // Filter Kabkot Params
              var params = wmsAdmKabkot.getParams();
              params.CQL_FILTER = "wadmkk='hide'";
              wmsAdmKabkot.updateParams(params);

              // Filter Kecamatan Params
              var params = wmsAdmKecamatan.getParams();
              params.CQL_FILTER = "wadmkc='"+kecamatan_value+"'";
              wmsAdmKecamatan.updateParams(params);
        
              // Get Extent
              var extent = new VectorSource({
                features: new GeoJSON().readFeatures(data)
              }).getExtent();
              map.getView().fit(extent, map.getSize());

              document.querySelector('#landSuitProcessBtn').onclick = function () {
                postLandSuitProcess(data, kecamatan_value);
              }
        
            });

        }

    });
    
}


function postLandSuitProcess(geojsonmask, nama_kecamatan){
  let start_year = document.querySelector('.yearstart-opt').value;
  let end_year = document.querySelector('.yearend-opt').value;
  let dataType = document.querySelector('.tipedata-opt').value;
  console.log(geojsonmask)
  fetch("http://103.178.153.209/api/landsuit_process", {
    method: 'POST',
    body: JSON.stringify({
        "mask_polygon": JSON.stringify(geojsonmask),
        "start_year": start_year,
        "end_year": end_year,
        "data_type": dataType
    }),
     headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
  })
  .then(response => response.json())
  .then(json => {
    console.log(json)
    $('#landsuit_chart').remove();
    $('#landsuit_chart_container').append('<p style="text-align: center;">Garik Persentase Luas Kesesuaian Lahan '+dataType+' di Kecamatan '+nama_kecamatan+'</p><hr>');
    $('#landsuit_chart_container').append('<canvas height="220" id="landsuit_chart"><canvas>');

    let data = {
      'tidak_sesuai': [],
      'cukup_sesuai': [],
      'sesuai': [],
      'sangat_sesuai': [],
    };
    for(var el in json) {
      data['tidak_sesuai'].push({
        year: el, count: json[el].tidak_sesuai 
      })
      data['cukup_sesuai'].push({
        year: el, count: json[el].cukup_sesuai 
      })
      data['sesuai'].push({
        year: el, count: json[el].sesuai 
      })
      data['sangat_sesuai'].push({
        year: el, count: json[el].sangat_sesuai 
      })
    }
    console.log(data)

    new Chart(
      document.getElementById('landsuit_chart'),
      {
        type: 'bar',
        data: {
          labels: data['tidak_sesuai'].map(row => row.year),
          datasets: [
            {
              label: 'Tidak Sesuai' ,
              data: data['tidak_sesuai'].map(row => row.count),
              backgroundColor: '#fdae61',
            },
            {
              label: 'Cukup Sesuai' ,
              data: data['cukup_sesuai'].map(row => row.count),
              backgroundColor: '#ffffbf',
            },
            {
              label: 'Sesuai' ,
              data: data['sesuai'].map(row => row.count),
              backgroundColor: '#abdda4',
            },
            {
              label: 'Sangat Sesuai' ,
              data: data['sangat_sesuai'].map(row => row.count),
              backgroundColor: '#2b83ba',
            },
          ]
        },
        options: {
          responsive: true,
          scales: {
            // x: {
            //   // stacked: true,
            // },
            y: {
              // stacked: true,
              ticks: {
                // Include a dollar sign in the ticks
                callback: function(value, index, ticks) {
                    return value + ' %';
                }
            }
            }
          }
        }
      }
    );
    $("#chartsController-content").collapse('show');

  });
}


// Show Hide Layers
var isPersil = document.getElementById('isPersil');
isPersil.addEventListener('click', function () {
  map.getLayers().getArray()[10].setVisible(this.checked);
});

var isAdminKabkot = document.getElementById('isAdminKabkot');
isAdminKabkot.addEventListener('click', function () {
  map.getLayers().getArray()[11].setVisible(this.checked);
});

var isAdminKec = document.getElementById('isAdminKec');
isAdminKec.addEventListener('click', function () {
  map.getLayers().getArray()[12].setVisible(this.checked);
});

var isWpl = document.getElementById('isWpl');
isWpl.addEventListener('click', function () {
  map.getLayers().getArray()[13].setVisible(this.checked);
});

var isTeh2020 = document.getElementById('isTeh2020');
isTeh2020.addEventListener('click', function () {
  map.getLayers().getArray()[1].setVisible(this.checked);
});
var isTeh2021 = document.getElementById('isTeh2021');
isTeh2021.addEventListener('click', function () {
  map.getLayers().getArray()[2].setVisible(this.checked);
});
var isTeh2022 = document.getElementById('isTeh2022');
isTeh2022.addEventListener('click', function () {
  map.getLayers().getArray()[3].setVisible(this.checked);
});

var isTebu2020 = document.getElementById('isTebu2020');
isTebu2020.addEventListener('click', function () {
  map.getLayers().getArray()[4].setVisible(this.checked);
});
var isTebu2021 = document.getElementById('isTebu2021');
isTebu2021.addEventListener('click', function () {
  map.getLayers().getArray()[5].setVisible(this.checked);
});
var isTebu2022 = document.getElementById('isTebu2022');
isTebu2022.addEventListener('click', function () {
  map.getLayers().getArray()[6].setVisible(this.checked);
});

var isPerikanan2020 = document.getElementById('isPerikanan2020');
isPerikanan2020.addEventListener('click', function () {
  map.getLayers().getArray()[7].setVisible(this.checked);
});
var isPerikanan2021 = document.getElementById('isPerikanan2021');
isPerikanan2021.addEventListener('click', function () {
  map.getLayers().getArray()[8].setVisible(this.checked);
});
var isPerikanan2022 = document.getElementById('isPerikanan2022');
isPerikanan2022.addEventListener('click', function () {
  map.getLayers().getArray()[9].setVisible(this.checked);
});

