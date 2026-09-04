export const DATA_SOURCES = [
  {
    id: 'numerical-model',
    label: 'Numerical Model',
    shortCode: 'ROMS / HYCOM',
  },
  {
    id: 'in-situ',
    label: 'In-Situ Observations',
    shortCode: 'ARGO / Buoys',
  },
];

export const OCEAN_PARAMETERS = [
  {
    id: 'sst',
    name: 'Sea Surface Temperature',
    symbol: 'SST',
    unit: '°C',
    typicalVal: '28.4 °C',
    color: '#36B9E7',
  },
  {
    id: 'salinity',
    name: 'Salinity',
    symbol: 'SSS',
    unit: 'PSU',
    typicalVal: '35.2 PSU',
    color: '#5ED6C0',
  },
  {
    id: 'velocity',
    name: 'Current Velocity',
    symbol: 'UV',
    unit: 'm/s',
    typicalVal: '0.82 m/s',
    color: '#38bdf8',
  },
  {
    id: 'wave-height',
    name: 'Wave Height',
    symbol: 'SWH',
    unit: 'm',
    typicalVal: '1.65 m',
    color: '#818cf8',
  },
  {
    id: 'sea-level',
    name: 'Sea Level',
    symbol: 'SSH',
    unit: 'm',
    typicalVal: '+0.12 m',
    color: '#2dd4bf',
  },
];

export const LAYER_CONFIG = [
  { id: 'oceanSurface', label: '3D Ocean Surface', desc: 'Bathymetry & wave mesh' },
  { id: 'currentVectors', label: 'Current Vectors', desc: 'Velocity direction arrows' },
  { id: 'observationPoints', label: 'Observation Points', desc: 'In-situ buoy stations' },
  { id: 'coastline', label: 'Coastline', desc: 'High-res coastal boundary' },
  { id: 'grid', label: 'Grid', desc: 'Lat/Lon coordinate lines' },
];
