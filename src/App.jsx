import { Outlet } from 'react-router';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {
  return (
    <>
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <div className="content-wrapper">
        <Outlet />
      </div>
    </>
  );
}

export default App;
