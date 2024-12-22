import TextLink from '../TextLink/TextLink.jsx';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-title">Hi there! I'm Daniel 🇺🇸</div>
      <div className="home-content">
        <div className="home-sections">
          <div className="home-section">
            I'm a software engineer working at <TextLink link="https://www.statefarm.com/">State Farm</TextLink>. Most
            of my time is spent between: (1) designing and developing backend services using Javascript/Python and (2)
            writing Terraform configuration to build-out the infrastructure that makes these services work.
            Occasionally, I build UIs using React.
          </div>
          <div className="home-section">
            I grew up in Champaign (the better half of Champaign-Urbana), which is where I also happened to attend the{' '}
            <TextLink link="https://www.usnews.com/best-graduate-schools/top-science-schools/computer-science-rankings?name=University%20of%20Illinois&_sort=rank-asc">
              University of Illinois
            </TextLink>
            , studying Computer Science and Linguistics.
          </div>
          <div className="home-section">
            Since completing university, I've moved to{' '}
            <TextLink link="https://www.youtube.com/watch?v=UumgHjyh9A0&ab_channel=InternetThings">Chicago</TextLink>{' '}
            (the greatest city in the world). In the city I work and pursue my two greatest passions: reading and
            travelling.
          </div>
        </div>
        <div className="home-portrait">
          <img src="/me.jpeg" alt="this is me" width="300" height="300" />
        </div>
      </div>
    </div>
  );
};

export default Home;
