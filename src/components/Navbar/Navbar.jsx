import './Navbar.css';

const options = ['home', 'projects'];

const Navbar = ({ props }) => {
  return (
    <div className="nav-container">
      <div className="nav-header">[Daniel Hettinger]</div>
      <div className="nav-options">
        {
          // TODO: Add a folder with images and randomly order them, then choose an image for every nav option.
          options.map((option) => (
            <div className="nav-option" key={option}>
              {option}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Navbar;
