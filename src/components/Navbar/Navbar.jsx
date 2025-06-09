import { useNavigate } from 'react-router';
import './Navbar.css';

const Navbar = ({ navRoutes }) => {
  let navigate = useNavigate();

  return (
    <div className="nav-container">
      <a className="nav-header" onClick={() => navigate('/')}>
        [<span>who am i?</span>]
      </a>
      <div className="nav-options">
        {navRoutes.map(({ label, isRouter, link }) => (
          <a className="nav-option" key={label} onClick={() => (isRouter ? navigate(link) : window.open(link))}>
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
