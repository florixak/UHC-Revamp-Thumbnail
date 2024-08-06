import { requirements } from "../data";
import List from "./List";
import Section from "./Section";

const Requirements = () => {
  return (
    <Section title="Requirements">
      <List list={requirements} />
    </Section>
  );
};

export default Requirements;
