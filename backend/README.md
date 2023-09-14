# Getting Started with Forest Carbon (API)

This project was...

## Installation
### Local Development (On-Premise)

### PostgreSQL Databases
1. Install PostgreSQL & PostGIS Spatial Extension
2. Create New Database (forestcarbon_db)
3. Add PostGIS Extension to Databases
4. Import data_spasial (link) to Databases using PostGIS Shapefile Manager
5. Spatial data stored on PostgreSQL database as table with geometry field

### Connect to GeoServer
1. Install GeoServer
2. Create new Store (Connect to postgresql)
3. Create Workspace based on created Store
4. Publish all spatial table as services
5. Styling with SLD

### API
1. Install Python
2. Install PIP & Virtualenv
```
# After download get-pip
python get-pip.py
pip install virtualenv
```
2. Clone repository
```
git clone git@gitlab.com:geometaid/forestcarbon-api.git
cd forestcarbon-api
```
3. Create virtualenv & Install library dependencies
```
virtualenv env
env\Scripts\activate
# Make sure virtualenv has activated
pip install -r requirements.txt
```
4. Configure db, cors, and url parameter at settings.py
```
copy settings.py.example settings.py
```
5. Run uvicorn
```
uvicorn main:app --reload
```
API will be run automactically on http://localhost:8000,
Also check http://localhost:8000/docs & http://localhost:8000/redocs for Swagger documentation
Also check http://localhost:8000/openapi for API list