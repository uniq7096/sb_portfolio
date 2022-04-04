import { Anchor } from "../Anchor";
import { Card } from "../Card";
import WithParallaxWrapped from "../Container";

export const About = () => (
  <WithParallaxWrapped id="about" offset={1}>
    <Card title="About" className="card--bulleted">
      <div className="about__details">
        <p>
          My name is Bohdan from Ukraine. As a detail-oriented Sr. web developer
          working for various types of industrial software companies, I&apos;ve
          racked up extensive and practical experience of web development.
        </p>{" "}
        <p>
          These days, I have the privilege of contributing solutions as a
          developer at <Anchor href="https://zumbat.it/"> ZUMBAT</Anchor> - the
          innovative progressive company in Italy, where I spend my day building
          NFT projects in React while leveling up my JavaScript and Block chain
          skills.
        </p>
        <p>Here are just a few interests of mine outside of programming:</p>
      </div>
      <div className="about__interests">
        <ul>
          <li className="about__interest">Artificial Intelligence</li>
          <li className="about__interest">Japanese Culture</li>
          <li className="about__interest">Football</li>
          <li className="about__interest">Reading</li>
        </ul>
        <ul>
          <li className="about__interest">Space Exploration</li>
          <li className="about__interest">Paddleboarding</li>
          <li className="about__interest">VideoGames</li>
          <li className="about__interest">Swimming</li>
        </ul>
      </div>
    </Card>
  </WithParallaxWrapped>
);
