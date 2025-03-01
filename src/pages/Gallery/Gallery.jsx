import './Gallery.css';

const images = [
  'seb_in_the_river.jpeg',
  'cool_view.jpeg',
  'grand_canyon_ueberblick.jpeg',
  'letzter_tag_in_budapest.jpg',
  'dan_seb_budapest.jpg',
  'lake_powell.jpeg',
  'forgot_where_this_is.jpeg',
  'cocomero.png',
  'park.jpeg',
  'yum.jpeg',
  'muddy_car.jpeg',
  'sparty.JPG',
  'alpen.jpeg',
  'you_look_great.jpeg',
  'tuer.jpeg',
  'sleepy_seb.jpeg',
  'foo.jpeg',
  'scared_of_heights.JPG',
  'grand_canyon_bruecke.jpeg',
  'madison.jpeg',
  'wuerstchen.jpeg',
  'hike.jpeg',
  'art.jpeg',
  'critter.jpeg',
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      {images.map((image) => {
        const link = `gallery/${image}`;
        return (
          <div className={'gallery-img-container'}>
            <img className="gallery-img" src={link} onClick={() => window.open(link)} />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
