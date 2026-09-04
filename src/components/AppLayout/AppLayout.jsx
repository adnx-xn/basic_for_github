import { useState, useEffect } from 'react';
import './AppLayout.css';
import Navbar from '../Navbar/Navbar';
import MainContent from '../MainContent/MainContent';
import Sidebar from '../Sidebar/Sidebar';

function AppLayout() {
  // 1. Data Source state
  const [dataSource, setDataSource] = useState('numerical-model');

  // 2. Selected Ocean Parameter state
  const [selectedParameter, setSelectedParameter] = useState('sst');

  // 3. Visualization Layer Toggles state
  const [visualizationToggles, setVisualizationToggles] = useState({
    oceanSurface: true,
    currentVectors: true,
    observationPoints: true,
    coastline: true,
    grid: false,
  });

  // 4. Time & Simulation state
  const [date, setDate] = useState('2026-09-01');
  const [hourStep, setHourStep] = useState(12);
  const [isPlaying, setIsPlaying] = useState(false);

  // 5. Mobile / Tablet Sidebar Drawer state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle visualization layers
  const handleToggleLayer = (layerId) => {
    setVisualizationToggles((prev) => ({
      ...prev,
      [layerId]: !prev[layerId],
    }));
  };

  // Playback timer simulation (UI demonstration)
  useEffect(() => {
    let intervalId = null;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setHourStep((prev) => (prev >= 24 ? 0 : prev + 1));
      }, 1000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying]);

  // Timestep step handlers
  const handleStepPrev = () => {
    setHourStep((prev) => (prev <= 0 ? 24 : prev - 1));
  };

  const handleStepNext = () => {
    setHourStep((prev) => (prev >= 24 ? 0 : prev + 1));
  };

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="app-layout-container">
      {/* Top Navigation */}
      <Navbar
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Main Workspace (MainContent + Sidebar) */}
      <div className="workspace">
        <MainContent
          dataSource={dataSource}
          selectedParameter={selectedParameter}
          visualizationToggles={visualizationToggles}
          hourStep={hourStep}
        />

        {/* Backdrop for mobile drawer */}
        <div
          className={`mobile-sidebar-backdrop ${isSidebarOpen ? 'active' : ''}`}
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />

        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          dataSource={dataSource}
          onSelectDataSource={setDataSource}
          selectedParameter={selectedParameter}
          onSelectParameter={setSelectedParameter}
          visualizationToggles={visualizationToggles}
          onToggleLayer={handleToggleLayer}
          date={date}
          onDateChange={setDate}
          hourStep={hourStep}
          onHourStepChange={setHourStep}
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
          onStepPrev={handleStepPrev}
          onStepNext={handleStepNext}
        />
      </div>
    </div>
  );
}

export default AppLayout;
