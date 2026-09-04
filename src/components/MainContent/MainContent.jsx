import './MainContent.css';
import { OCEAN_PARAMETERS } from '../../constants/oceanData';
import StarFieldBackground from './StarFieldBackground';

function MainContent({
  dataSource = 'numerical-model',
  selectedParameter = 'sst',
  visualizationToggles = {},
  hourStep = 12,
}) {
  // Find current parameter descriptor
  const currentParam =
    OCEAN_PARAMETERS.find((p) => p.id === selectedParameter) || OCEAN_PARAMETERS[0];

  const formattedTime = `${String(hourStep).padStart(2, '0')}:00 UTC`;
  const isModelSource = dataSource === 'numerical-model';

  return (
    <main
      className="main-content-container"
      id="main-content"
      aria-label="3D Ocean Visualization Canvas"
    >
      {/* 3D Viewport / Canvas Stage */}
      <div className="ocean-canvas-stage">
        {/* Deep Black Space Background with Three.js / WebGL Star Field */}
        <StarFieldBackground />

        {/* Centered Intentional Scientific Placeholder */}
        <div className="engine-placeholder-card">
          <div className="engine-icon-halo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              <ellipse cx="12" cy="12" rx="6" ry="3" />
            </svg>
          </div>

          <div className="engine-title-group">
            <h1 className="engine-main-title">3D OCEAN VISUALIZATION</h1>
            <p className="engine-subtitle">
              Interactive numerical model and in-situ observation viewer
            </p>
          </div>

          <div className="engine-divider" aria-hidden="true" />

          <div className="engine-stage-indicator">
            <span className="engine-badge">THREE.JS / WEBGL TARGET</span>
            <p className="engine-placeholder-text">3D Visualization Engine</p>
            <p className="engine-model-hint">Ocean model visualization will appear here</p>
          </div>

          {/* Active Layer Indicators */}
          <div className="active-layers-preview" aria-label="Active rendering layers">
            <span className={`layer-chip ${visualizationToggles.oceanSurface ? 'active' : ''}`}>
              Surface Mesh: {visualizationToggles.oceanSurface ? 'ON' : 'OFF'}
            </span>
            <span className={`layer-chip ${visualizationToggles.currentVectors ? 'active' : ''}`}>
              Vectors: {visualizationToggles.currentVectors ? 'ON' : 'OFF'}
            </span>
            <span className={`layer-chip ${visualizationToggles.observationPoints ? 'active' : ''}`}>
              In-Situ: {visualizationToggles.observationPoints ? 'ON' : 'OFF'}
            </span>
            <span className={`layer-chip ${visualizationToggles.coastline ? 'active' : ''}`}>
              Coastline: {visualizationToggles.coastline ? 'ON' : 'OFF'}
            </span>
            <span className={`layer-chip ${visualizationToggles.grid ? 'active' : ''}`}>
              Grid: {visualizationToggles.grid ? 'ON' : 'OFF'}
            </span>
          </div>
        </div>

        {/* ==============================================
            FLOATING SCIENTIFIC HUD OVERLAYS
           ============================================== */}

        {/* 1. TOP-LEFT OVERLAY: Live Model Status */}
        <aside className="hud-panel hud-top-left" aria-label="Live Model Status">
          <span className="hud-label">
            {isModelSource ? 'LIVE OCEAN MODEL' : 'IN-SITU OBSERVATIONS'}
          </span>
          <div className="hud-status-line">
            <span className="status-beacon" />
            <span className="status-badge-text">ONLINE</span>
          </div>
          <span className="hud-subtext">
            {isModelSource ? 'Model: INCOIS-ROMS 1/12°' : 'Network: ARGO + Moored Buoys'}
          </span>
        </aside>

        {/* 2. TOP-RIGHT OVERLAY: Active Ocean Parameter Readout */}
        <aside className="hud-panel hud-top-right" aria-label="Current Parameter Telemetry">
          <span className="hud-label">{currentParam.symbol} ({currentParam.name})</span>
          <span className="hud-value hud-value-accent">{currentParam.typicalVal}</span>
          <span className="hud-subtext">Sampling: 1-hr step</span>
        </aside>

        {/* 3. BOTTOM-LEFT OVERLAY: Spatial Coordinates */}
        <aside className="hud-panel hud-bottom-left" aria-label="Spatial Coordinates">
          <span className="hud-label">TELEMETRY / POSITION</span>
          <div className="coords-block">
            <div className="coord-row">
              <span className="coord-dim">LAT</span>
              <span>10.32° N</span>
            </div>
            <div className="coord-row">
              <span className="coord-dim">LON</span>
              <span>72.48° E</span>
            </div>
          </div>
          <span className="hud-subtext">Projection: WGS 84 / Mercator</span>
        </aside>

        {/* 4. BOTTOM-RIGHT OVERLAY: Depth & Temporal State */}
        <aside className="hud-panel hud-bottom-right" aria-label="Depth and Time State">
          <span className="hud-label">VERTICAL LAYER</span>
          <span className="hud-value">Depth: Surface</span>
          <span className="hud-subtext">T: {formattedTime}</span>
        </aside>
      </div>
    </main>
  );
}

export default MainContent;
