import { about } from "../data";
import Section from "./Section";

const About = () => {
  return (
    <Section title="About">
      <div>
        <h1 className="font-bold font-MinecraftAlt first-letter:text-5xl first-letter:gradient-text outline-black text-3xl">
          {about.title}
        </h1>
        <p className="text-xl ml-[2px]">{about.description}</p>
      </div>
    </Section>
  );
};

export default About;
