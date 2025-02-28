import { useNavigate } from 'react-router';
import './Navbar.css';

const Navbar = ({ navRoutes }) => {
  let navigate = useNavigate();

  const options = [
    { label: 'resume', onClick: () => window.open('/official_resume.pdf') },
    { label: 'linkedin', onClick: () => window.open('https://www.linkedin.com/in/daniel-hettinger/') },
    { label: 'github', onClick: () => window.open('https://github.com/danielHett') },
  ];

  return (
    <div className="nav-container">
      <a className="nav-header" onClick={() => navigate('/')}>
        [<span>Home</span>]
      </a>
      <div className="nav-options">
        {navRoutes.map(({ label, isRouter, link }) => (
          <a className="nav-option" key={label} onClick={() => (isRouter ? useNavigate(link) : window.open(link))}>
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
