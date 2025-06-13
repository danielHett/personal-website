import { Link } from 'react-router';
import TextLink from '../../components/TextLink/TextLink.jsx';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-title">Hi there! I'm Daniel</div>
      <div className="home-section">
        Welcome to my personal website, dedicated to me! I built it myself using React. You can find all of the code for
        this website <TextLink link="https://github.com/danielHett/personal-website">here</TextLink> on GitHub.
        <br />
        <br />
        Who am I? Most people call me Daniel, some people call me Dan, and hardly anyone calls me Danny. I grew up in
        Champaign County, partly in Mahomet and partly in Champaign itself. Champaign is also where happened to attend
        the{' '}
        <TextLink link="https://www.usnews.com/best-graduate-schools/top-science-schools/computer-science-rankings?name=University%20of%20Illinois&_sort=rank-asc">
          University of Illinois
        </TextLink>
        , studying Computer Science and Linguistics. While studying, I worked a number of different jobs. I was a
        barista at café/frozen yogurt place on campus, a teaching assistent for several different computer science
        courses, and during my last year of university I began working full-time as a full stack software engineer at{' '}
        <TextLink link="https://www.statefarm.com/">State Farm</TextLink>.
        <br />
        <br />
        After completing university, I moved to{' '}
        <TextLink link="https://en.wikipedia.org/wiki/Chicago">Chicago</TextLink> to try out being in the big city. I
        also continued working at State Farm. Most of my time there was spent between: (1) designing and developing
        backend services using TypeScript/Python and (2) writing Terraform configuration to build-out the infrastructure
        that made the services work. Occasionally, I also build UIs using React.
        <br />
        <br />
        After two great years in Chicago, I packed up a suitcase and flew across the Atlantic to{' '}
        <TextLink link="https://de.wikipedia.org/wiki/K%C3%B6ln">Köln</TextLink>, where I live now. I'm currently
        studying for the German C1 exam and searching for work as a software engineer. Feel free to shoot me an email if
        you have a role that you think would be a good fit for me!
        <br />
        <br />
        Outside of studying German, there's a lot of other things that I like do. When I feel particularly motivated, I
        love using technology to build cool and exciting things (check out my github to see what I'm talking about!)
        <br />
        <br />
        When I'm not writing code, you'll probably find me reading, writing, watching a{' '}
        <TextLink link="https://letterboxd.com/danie_hettinger/">movie</TextLink>, or in the gym.
      </div>
    </div>
  );
};

export default Home;
