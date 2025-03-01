import './Gallery.css';

const images = [
  'seb_in_the_river.jpeg',
  'cool_view.jpeg',
  'grand_canyon_brücke.jpeg',
  'tür.jpeg',
  'letzter_tag_in_budapest.jpg',
  'dan_seb_budapest.jpg',
  'lake_powell.jpeg',
  'forgot_where_this_is.jpeg',
  'cocomero.PNG',
  'park.jpeg',
  'yum.jpeg',
  'muddy_car.jpeg',
  'sparty.JPG',
  'alpen.jpeg',
  'you_look_great.jpeg',
  'sleepy_seb.jpeg',
  'foo.jpeg',
  'scared_of_heights.JPG',
  'würstchen.jpeg',
  'madison.jpeg',
  'hike.jpeg',
  'art.jpeg',
  'critter.jpeg',
  'grand_canyon_überblick.jpeg',
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      {images.map((image) => {
        return (
          <div className="gallery-img-container">
            <img className="gallery-img" src={`gallery/${image}`} />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
