import { Link } from 'react-router';
import TextLink from '../../components/TextLink/TextLink.jsx';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-title">Hi there! I'm Daniel</div>
      <div className="home-section">
        This is my website, dedicated to me! I built it myself using React. You can find all of the code for this
        website <TextLink link="https://github.com/danielHett/personal-website">here</TextLink> on GitHub.
      </div>
      <div className="home-section">
        I grew up in Champaign, Illinois, which is where I also happened to attend the{' '}
        <TextLink link="https://www.usnews.com/best-graduate-schools/top-science-schools/computer-science-rankings?name=University%20of%20Illinois&_sort=rank-asc">
          University of Illinois
        </TextLink>
        , studying Computer Science and Linguistics. Since completing university, I've moved to{' '}
        <TextLink link="https://en.wikipedia.org/wiki/Chicago">Chicago</TextLink> (the greatest city in the world).
      </div>
      <div className="home-section">
        Now I work as a software engineer at <TextLink link="https://www.statefarm.com/">State Farm</TextLink>. Most of
        my time there is spent between: (1) designing and developing backend services using Javascript/Python and (2)
        writing Terraform configuration to build-out the infrastructure that makes these services work. Occasionally, I
        also build UIs using React.
      </div>
      <div className="home-section">
        Outside of my day job, there's a lot of other things that I do. When I feel particularly motivated, I love using
        technology to build cool and exciting things (check out my github to see what I'm talking about!)
      </div>
      <div className="home-section">
        When I'm not writing code, you'll probably find me reading, writing, watching a{' '}
        <TextLink link="https://letterboxd.com/danie_hettinger/">movie</TextLink>, or in the gym.
      </div>
    </div>
  );
};

export default Home;
