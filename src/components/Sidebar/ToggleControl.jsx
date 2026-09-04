import SidebarSection from './SidebarSection';
import { LAYER_CONFIG } from '../../constants/oceanData';

function ToggleControl({ toggles, onToggle }) {
  return (
    <SidebarSection title="VISUALIZATION" badge="LAYERS">
      <div className="toggle-list" role="group" aria-label="Visualization Layers">
        {LAYER_CONFIG.map((layer) => {
          const isChecked = Boolean(toggles[layer.id]);
          return (
            <div key={layer.id} className="toggle-row">
              <div className="toggle-text-block">
                <span className="toggle-label">{layer.label}</span>
                <span className="toggle-desc">{layer.desc}</span>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={isChecked}
                aria-label={`Toggle ${layer.label}`}
                className={`switch-button ${isChecked ? 'checked' : ''}`}
                onClick={() => onToggle(layer.id)}
              >
                <span className="switch-thumb" />
              </button>
            </div>
          );
        })}
      </div>
    </SidebarSection>
  );
}

export default ToggleControl;
