import { requirements } from "../data";
import Section from "./Section";
import TextList from "./lists/TextList";

const Requirements = () => {
  return (
    <Section title="Requirements">
      <TextList list={requirements} />
    </Section>
  );
};

export default Requirements;
