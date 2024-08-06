import { supports } from "../data";
import List from "./List";
import Section from "./Section";

const Supports = () => {
  return (
    <Section title="Supports">
      <List list={supports} />
    </Section>
  );
};

export default Supports;
