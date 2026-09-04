import SidebarSection from './SidebarSection';
import { DATA_SOURCES } from '../../constants/oceanData';

const SOURCE_ICONS = {
  'numerical-model': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  'in-situ': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
};

function DataSourceSelector({ selectedSource, onSelectSource }) {
  return (
    <SidebarSection title="DATA SOURCE" badge="INPUT">
      <div className="source-segmented-control" role="radiogroup" aria-label="Ocean Data Source">
        {DATA_SOURCES.map((source) => {
          const isSelected = selectedSource === source.id;
          return (
            <button
              key={source.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={`source-btn ${isSelected ? 'active' : ''}`}
              onClick={() => onSelectSource(source.id)}
            >
              <span className="source-icon">{SOURCE_ICONS[source.id]}</span>
              <div className="source-text-group">
                <span className="source-label">{source.label}</span>
                <span className="source-subtext">{source.shortCode}</span>
              </div>
              {isSelected && <span className="source-active-indicator" aria-hidden="true" />}
            </button>
          );
        })}
      </div>
    </SidebarSection>
  );
}

export default DataSourceSelector;
