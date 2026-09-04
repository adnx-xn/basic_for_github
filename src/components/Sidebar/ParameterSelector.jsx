import SidebarSection from './SidebarSection';
import { OCEAN_PARAMETERS } from '../../constants/oceanData';

const PARAM_ICONS = {
  sst: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </svg>
  ),
  salinity: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      <path d="M12 11a3 3 0 0 1 3 3" />
    </svg>
  ),
  velocity: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h20M17 5l5 7-5 7" />
      <path d="M7 19c-2 0-3-1-3-2.5S5.5 14 7 14s3 1 3 2.5S8.5 19 7 19z" />
    </svg>
  ),
  'wave-height': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  ),
  'sea-level': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="21" x2="20" y2="21" />
      <line x1="4" y1="3" x2="20" y2="3" />
      <line x1="4" y1="12" x2="20" y2="12" strokeDasharray="3 3" />
      <polyline points="9 8 12 5 15 8" />
      <polyline points="9 16 12 19 15 16" />
    </svg>
  ),
};

function ParameterSelector({ selectedParamId, onSelectParam }) {
  return (
    <SidebarSection title="OCEAN PARAMETERS" badge="VARIABLE">
      <div className="parameter-list" role="radiogroup" aria-label="Ocean Parameters">
        {OCEAN_PARAMETERS.map((param) => {
          const isSelected = selectedParamId === param.id;
          return (
            <button
              key={param.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={`parameter-card ${isSelected ? 'active' : ''}`}
              onClick={() => onSelectParam(param.id)}
            >
              <div className="param-icon-frame" style={{ '--param-tint': param.color }}>
                {PARAM_ICONS[param.id]}
              </div>
              <div className="param-info">
                <span className="param-name">{param.name}</span>
                <span className="param-symbol">{param.symbol} ({param.unit})</span>
              </div>
              <div className="param-status-dot" aria-hidden="true" />
            </button>
          );
        })}
      </div>
    </SidebarSection>
  );
}

export default ParameterSelector;
