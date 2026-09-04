import SidebarSection from './SidebarSection';

function TimeControl({
  date = '2026-09-01',
  onDateChange,
  hourStep = 12,
  onHourStepChange,
  isPlaying = false,
  onTogglePlay,
  onStepPrev,
  onStepNext,
}) {
  const formattedTime = `${String(hourStep).padStart(2, '0')}:00 UTC`;

  return (
    <SidebarSection title="TIME CONTROL" badge="TEMPORAL">
      <div className="time-control-panel">
        {/* Date & Time Row */}
        <div className="time-display-card">
          <div className="time-metric">
            <span className="time-caption">SELECTED DATE</span>
            <label className="date-input-wrap">
              <input
                type="date"
                className="date-picker-input"
                value={date}
                onChange={(e) => onDateChange && onDateChange(e.target.value)}
                aria-label="Simulation date"
              />
            </label>
          </div>

          <div className="time-metric right-aligned">
            <span className="time-caption">TIMESTAMP</span>
            <div className="utc-clock-badge">
              <span className="time-value-highlight">{formattedTime}</span>
            </div>
          </div>
        </div>

        {/* Playback Controls Row */}
        <div className="playback-button-row" role="toolbar" aria-label="Timeline Playback Controls">
          <button
            type="button"
            className="time-step-btn"
            onClick={onStepPrev}
            title="Previous Timestep (-3 hrs)"
            aria-label="Previous Timestep"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="19 20 9 12 19 4 19 20" />
              <line x1="5" y1="19" x2="5" y2="5" />
            </svg>
          </button>

          <button
            type="button"
            className={`play-pause-btn ${isPlaying ? 'playing' : ''}`}
            onClick={onTogglePlay}
            title={isPlaying ? 'Pause Simulation' : 'Play Simulation'}
            aria-label={isPlaying ? 'Pause Simulation' : 'Play Simulation'}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 4 20 12 6 20 6 4" />
              </svg>
            )}
            <span className="play-btn-text">{isPlaying ? 'PAUSE' : 'PLAY'}</span>
          </button>

          <button
            type="button"
            className="time-step-btn"
            onClick={onStepNext}
            title="Next Timestep (+3 hrs)"
            aria-label="Next Timestep"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 4 15 12 5 20 5 4" />
              <line x1="19" y1="5" x2="19" y2="19" />
            </svg>
          </button>
        </div>

        {/* Timeline Slider */}
        <div className="timeline-slider-box">
          <div className="timeline-slider-labels">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>24:00</span>
          </div>

          <div className="slider-container">
            <input
              type="range"
              min="0"
              max="24"
              step="1"
              value={hourStep}
              onChange={(e) => onHourStepChange && onHourStepChange(Number(e.target.value))}
              className="timeline-slider-input"
              aria-label="Timeline timestep slider"
            />
          </div>

          <div className="slider-ticks" aria-hidden="true">
            {[0, 3, 6, 9, 12, 15, 18, 21, 24].map((t) => (
              <span
                key={t}
                className={`slider-tick ${t === hourStep ? 'active' : ''}`}
                style={{ left: `${(t / 24) * 100}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </SidebarSection>
  );
}

export default TimeControl;
