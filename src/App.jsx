import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <div className="app-body">
        <Home />
        <Sidebar />
      </div>
    </div>
  )
}

export default App
