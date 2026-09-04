import './Sidebar.css'

function Sidebar({
  activeId = 'explore',
  workspaceItems = [
    {
      id: 'explore',
      label: 'Explore',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="sidebar-nav-icon" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      )
    },
    {
      id: 'layers',
      label: 'Layers',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="sidebar-nav-icon" aria-hidden="true">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    {
      id: 'analysis',
      label: 'Analysis',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="sidebar-nav-icon" aria-hidden="true">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      id: 'observations',
      label: 'Observations',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="sidebar-nav-icon" aria-hidden="true">
          <circle cx="12" cy="12" r="2" />
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        </svg>
      )
    }
  ],
  toolItems = [
    {
      id: 'navigation',
      label: 'Navigation',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="sidebar-nav-icon" aria-hidden="true">
          <polygon points="3 11 22 2 13 21 11 13 3 11" />
        </svg>
      )
    },
    {
      id: 'measure',
      label: 'Measure',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="sidebar-nav-icon" aria-hidden="true">
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
        </svg>
      )
    },
    {
      id: 'reset-view',
      label: 'Reset View',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="sidebar-nav-icon" aria-hidden="true">
          <polyline points="1 4 1 10 7 10" />
          <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
        </svg>
      )
    }
  ]
}) {
  return (
    <aside className="sidebar-content" id="sidebar" aria-label="Ocean Visualization Sidebar">
      <div className="sidebar-main">
        {/* Workspace Section */}
        <div className="sidebar-section">
          <div className="sidebar-section-header">
            <span className="sidebar-section-title">Workspace</span>
          </div>
          <nav aria-label="Workspace Controls">
            <ul className="sidebar-nav-list">
              {workspaceItems.map((item) => {
                const isActive = item.id === activeId
                return (
                  <li key={item.id} className="sidebar-nav-item">
                    <a
                      href={`#${item.id}`}
                      className={`sidebar-nav-link ${isActive ? 'is-active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.icon}
                      <span className="sidebar-nav-text">{item.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        {/* Tools Section */}
        <div className="sidebar-section">
          <div className="sidebar-section-header">
            <span className="sidebar-section-title">Tools</span>
          </div>
          <nav aria-label="Tool Controls">
            <ul className="sidebar-nav-list">
              {toolItems.map((item) => {
                const isActive = item.id === activeId
                return (
                  <li key={item.id} className="sidebar-nav-item">
                    <a
                      href={`#${item.id}`}
                      className={`sidebar-nav-link ${isActive ? 'is-active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.icon}
                      <span className="sidebar-nav-text">{item.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        {/* Active Layer Indicator */}
        <div className="sidebar-workspace-panel" aria-label="Active Workspace State">
          <span className="sidebar-panel-label">Active Layer</span>
          <span className="sidebar-panel-value">3D Ocean Surface & Depth</span>
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-status-row">
          <span className="sidebar-status-dot" aria-hidden="true" />
          <span>INCOIS Data Node</span>
        </div>
        <span className="sidebar-meta-text">Grid Resolution: 0.25°</span>
      </div>
    </aside>
  )
}

export default Sidebar
