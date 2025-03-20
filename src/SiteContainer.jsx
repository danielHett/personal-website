import { Outlet } from 'react-router';
import Navbar from './components/Navbar/Navbar.jsx';
import './SiteContainer.css';

const SiteContainer = ({ navRoutes }) => {
  return (
    <div className="site-container">
      <div className="navbar-container">
        <Navbar navRoutes={navRoutes} />
      </div>
      <div className="current-page-container">
        <Outlet />
      </div>
    </div>
  );
};

export default SiteContainer;
