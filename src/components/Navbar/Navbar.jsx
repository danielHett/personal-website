import { useNavigate } from 'react-router';
import './Navbar.css';

const Navbar = ({ props }) => {
  let navigate = useNavigate();

  const options = [
    // { label: 'snippits', onClick: () => navigate('/snippits') },
    { label: 'books', onClick: () => navigate('/books') },
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
        {
          // TODO: Add a folder with images and randomly order them, then choose an image for every nav option.
          options.map((option) => (
            <a className="nav-option" key={option.label} onClick={option.onClick}>
              {option.label}
            </a>
          ))
        }
      </div>
    </div>
  );
};

export default Navbar;
