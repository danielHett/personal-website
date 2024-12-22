import './Navbar.css';
import { useNavigate } from 'react-router';

const options = ['projects', 'articles'];

const Navbar = ({ props }) => {
  let navigate = useNavigate();

  return (
    <div className="nav-container">
      <div className="nav-header" onClick={() => navigate('/')}>
        [<span>Daniel Hettinger</span>]
      </div>
      <div className="nav-options">
        {
          // TODO: Add a folder with images and randomly order them, then choose an image for every nav option.
          options.map((option) => (
            <div className="nav-option" key={option} onClick={() => navigate(`/${option}`)}>
              {option}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Navbar;
