import { about } from "../data";
import Section from "./Section";

const About = () => {
  return (
    <Section title="About">
      <p>{about}</p>
    </Section>
  );
};

export default About;
