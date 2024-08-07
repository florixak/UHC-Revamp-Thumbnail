import { supports } from "../data";

import Section from "./Section";
import TextList from "./lists/TextList";

const Supports = () => {
  return (
    <Section title="Support">
      <TextList list={supports} />
    </Section>
  );
};

export default Supports;
