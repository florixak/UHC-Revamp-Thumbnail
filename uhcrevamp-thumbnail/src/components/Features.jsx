import { features } from "../data";
import ImageList from "./lists/ImageList";
import Section from "./Section";

const Features = () => {
  return (
    <Section title="Features">
      <ImageList list={features} />
      <p className="text-center text-2xl">
        And more like reserved slots, etc...
      </p>
    </Section>
  );
};

export default Features;
