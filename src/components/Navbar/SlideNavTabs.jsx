import { useState, useRef, useEffect, useCallback } from 'react';
import './SlideNavTabs.css';

const TABS = [
  {
    id: 'Dashboard',
    label: 'Dashboard',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: 'Ocean View',
    label: 'Ocean View',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: 'Observations',
    label: 'Observations',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    id: 'Models',
    label: 'Models',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
];

function SlideNavTabs() {
  const [selectedTab, setSelectedTab] = useState('Ocean View');
  const [pillPosition, setPillPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const tabRefs = useRef({});

  // Reposition pill to currently selected tab
  const syncPillToSelected = useCallback(() => {
    const activeEl = tabRefs.current[selectedTab];
    if (activeEl) {
      setPillPosition({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        opacity: 1,
      });
    }
  }, [selectedTab]);

  // Sync position on mount, selection change, and window resize
  useEffect(() => {
    syncPillToSelected();

    const handleResize = () => {
      syncPillToSelected();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [syncPillToSelected]);

  const handleMouseEnter = (e) => {
    const el = e.currentTarget;
    setPillPosition({
      left: el.offsetLeft,
      width: el.offsetWidth,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    syncPillToSelected();
  };

  const handleTabClick = (tabId, e) => {
    setSelectedTab(tabId);
    const el = e.currentTarget;
    setPillPosition({
      left: el.offsetLeft,
      width: el.offsetWidth,
      opacity: 1,
    });
  };

  return (
    <nav
      className="slide-nav-tabs"
      role="tablist"
      aria-label="Main Navigation"
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Sliding Pill Element */}
      <span
        className="slide-pill"
        style={{
          left: `${pillPosition.left}px`,
          width: `${pillPosition.width}px`,
          opacity: pillPosition.opacity,
        }}
        aria-hidden="true"
      />

      {/* Navigation Tabs */}
      {TABS.map((tab) => {
        const isSelected = selectedTab === tab.id;
        return (
          <button
            key={tab.id}
            ref={(el) => {
              if (el) tabRefs.current[tab.id] = el;
            }}
            type="button"
            role="tab"
            aria-selected={isSelected}
            className={`slide-tab-btn ${isSelected ? 'selected' : ''}`}
            onClick={(e) => handleTabClick(tab.id, e)}
            onMouseEnter={handleMouseEnter}
            title={tab.label}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export default SlideNavTabs;
