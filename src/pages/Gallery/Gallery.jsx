import images from './images.js';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="text" style={{ alignSelf: 'flex-start' }}>
        A collection of cool pictures I've taken. Click an image to enlarge!
      </div>
      <div className="bar"></div>
      <div className="images-container">
        {Object.entries(images).map(([name, { thumb, full }]) => {
          const thumb_link = `gallery/${thumb}`;
          const full_link = `gallery/${full}`;

          return (
            <div className={'image-container'}>
              <img className="image" src={thumb_link} onClick={() => window.open(full_link)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
