import SidebarSection from './SidebarSection';

const LEGEND_SCHEMAS = {
  sst: {
    title: 'Sea Surface Temperature',
    unit: '°C',
    low: '18.0 °C',
    mid: '26.0 °C',
    high: '34.0 °C',
    gradient: 'linear-gradient(90deg, #1d4ed8 0%, #06b6d4 30%, #eab308 65%, #ef4444 100%)',
    paletteName: 'Thermal (Turbo-Ocean)',
  },
  salinity: {
    title: 'Practical Salinity',
    unit: 'PSU',
    low: '32.0 PSU',
    mid: '35.0 PSU',
    high: '38.0 PSU',
    gradient: 'linear-gradient(90deg, #0d9488 0%, #14b8a6 35%, #0284c7 70%, #1e3a8a 100%)',
    paletteName: 'Haline (Salinity-Blue)',
  },
  velocity: {
    title: 'Current Velocity',
    unit: 'm/s',
    low: '0.00 m/s',
    mid: '1.25 m/s',
    high: '2.50 m/s',
    gradient: 'linear-gradient(90deg, #0f172a 0%, #0284c7 35%, #10b981 70%, #facc15 100%)',
    paletteName: 'Kinetic (Speed-Vector)',
  },
  'wave-height': {
    title: 'Significant Wave Height',
    unit: 'm',
    low: '0.50 m',
    mid: '2.50 m',
    high: '6.00 m',
    gradient: 'linear-gradient(90deg, #1e293b 0%, #38bdf8 40%, #818cf8 75%, #c084fc 100%)',
    paletteName: 'Spectral (Wave-Height)',
  },
  'sea-level': {
    title: 'Sea Surface Height Anomaly',
    unit: 'm',
    low: '-0.80 m',
    mid: '0.00 m',
    high: '+0.80 m',
    gradient: 'linear-gradient(90deg, #7c3aed 0%, #06b6d4 45%, #10b981 55%, #f97316 100%)',
    paletteName: 'Altimetry (Anomaly)',
  },
};

function Legend({ selectedParamId = 'sst' }) {
  const schema = LEGEND_SCHEMAS[selectedParamId] || LEGEND_SCHEMAS.sst;

  return (
    <SidebarSection title="LEGEND" badge={schema.unit}>
      <div className="legend-container">
        <div className="legend-header-row">
          <span className="legend-target-name">{schema.title}</span>
          <span className="legend-palette-tag">{schema.paletteName}</span>
        </div>

        {/* Gradient Ramp Indicator */}
        <div
          className="legend-gradient-bar"
          style={{ background: schema.gradient }}
          aria-label={`Color gradient scale for ${schema.title}`}
        />

        {/* Level Labels */}
        <div className="legend-labels-row">
          <div className="legend-marker">
            <span className="legend-level-tag">Low</span>
            <span className="legend-val">{schema.low}</span>
          </div>
          <div className="legend-marker center">
            <span className="legend-level-tag">Medium</span>
            <span className="legend-val">{schema.mid}</span>
          </div>
          <div className="legend-marker right">
            <span className="legend-level-tag">High</span>
            <span className="legend-val">{schema.high}</span>
          </div>
        </div>
      </div>
    </SidebarSection>
  );
}

export default Legend;
