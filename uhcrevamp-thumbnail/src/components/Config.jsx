import Section from "./Section";
import TextList from "./lists/TextList";
import { configuration } from "../data";

const Config = () => {
  return (
    <Section title="Configs">
      <TextList list={configuration} />
    </Section>
  );
};

export default Config;
