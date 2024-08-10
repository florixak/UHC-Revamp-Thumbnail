import { commands } from "../data";
import Section from "./Section";
import UnderThumbnail from "./UnderThumbnail";
import CommandList from "./lists/CommandList";

const Commands = () => {
  const slicedCommands = commands.slice(0, 5);
  return (
    <Section title="Commands">
      <CommandList list={slicedCommands} />
      <UnderThumbnail />
    </Section>
  );
};

export default Commands;
