import './Sidebar.css';
import DataSourceSelector from './DataSourceSelector';
import ParameterSelector from './ParameterSelector';
import ToggleControl from './ToggleControl';
import TimeControl from './TimeControl';
import Legend from './Legend';

function Sidebar({
  isOpen,
  onClose,
  dataSource,
  onSelectDataSource,
  selectedParameter,
  onSelectParameter,
  visualizationToggles,
  onToggleLayer,
  date,
  onDateChange,
  hourStep,
  onHourStepChange,
  isPlaying,
  onTogglePlay,
  onStepPrev,
  onStepNext,
}) {
  return (
    <aside
      className={`sidebar-container ${isOpen ? 'open' : ''}`}
      id="sidebar"
      aria-label="Visualization Controls Sidebar"
    >
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <div className="sidebar-heading-group">
          <svg className="sidebar-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" />
            <line x1="20" y1="12" x2="20" y2="3" />
            <line x1="1" y1="14" x2="7" y2="14" />
            <line x1="9" y1="8" x2="15" y2="8" />
            <line x1="17" y1="16" x2="23" y2="16" />
          </svg>
          <h2 className="sidebar-title">Visualization Controls</h2>
        </div>

        {/* Mobile close button */}
        <button
          type="button"
          className="sidebar-close-btn"
          onClick={onClose}
          aria-label="Close controls panel"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Scrollable controls list */}
      <div className="sidebar-scroll-area">
        {/* 1. DATA SOURCE */}
        <DataSourceSelector
          selectedSource={dataSource}
          onSelectSource={onSelectDataSource}
        />

        {/* 2. OCEAN PARAMETERS */}
        <ParameterSelector
          selectedParamId={selectedParameter}
          onSelectParam={onSelectParameter}
        />

        {/* 3. VISUALIZATION TOGGLES */}
        <ToggleControl
          toggles={visualizationToggles}
          onToggle={onToggleLayer}
        />

        {/* 4. TIME CONTROL */}
        <TimeControl
          date={date}
          onDateChange={onDateChange}
          hourStep={hourStep}
          onHourStepChange={onHourStepChange}
          isPlaying={isPlaying}
          onTogglePlay={onTogglePlay}
          onStepPrev={onStepPrev}
          onStepNext={onStepNext}
        />

        {/* 5. LEGEND */}
        <Legend selectedParamId={selectedParameter} />
      </div>
    </aside>
  );
}

export default Sidebar;
