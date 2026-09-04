import './Navbar.css'

function Navbar({
  systemTitle = '3D Ocean Visualization',
  subtitle = 'Ocean Explorer',
  dataset = 'Indian Ocean',
  activeTab = 'Visualization'
}) {
  const navItems = ['Home', 'Visualization', 'Data', 'About']

  return (
    <header className="navbar" role="banner">
      <div className="navbar-brand-section">
        <div className="navbar-incois-badge">INCOIS</div>
        <div className="navbar-divider" aria-hidden="true" />
        <div className="navbar-title-group">
          <span className="navbar-system-title">{systemTitle}</span>
          <span className="navbar-system-subtitle">{subtitle}</span>
        </div>
      </div>

      <nav className="navbar-nav-menu" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`navbar-nav-item ${item === activeTab ? 'is-active' : ''}`}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="navbar-meta-section">
        <div className="navbar-dataset-tag" title="Active Oceanographic Dataset">
          <span className="navbar-dataset-dot" aria-hidden="true" />
          <span className="navbar-dataset-label">Dataset:</span>
          <span className="navbar-dataset-name">{dataset}</span>
        </div>

        <div className="navbar-tools">
          <button
            type="button"
            className="navbar-tool-btn"
            aria-label="Settings"
            title="Settings"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
