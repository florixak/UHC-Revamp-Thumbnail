import { features } from "../data";
import List from "./List";
import Section from "./Section";

const Features = () => {
  return (
    <Section title="Features">
      <List list={features} />
    </Section>
  );
};

export default Features;
