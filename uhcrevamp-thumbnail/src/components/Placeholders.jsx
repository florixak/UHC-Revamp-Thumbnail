import { placeholders } from "../data";
import TextList from "./lists/TextList";
import Section from "./Section";
import UnderThumbnail from "./UnderThumbnail";

const Placeholders = () => {
  const slicedPlaceholders = placeholders.slice(0, 5);
  return (
    <Section title="Placeholders">
      <TextList list={slicedPlaceholders} />
      <UnderThumbnail />
    </Section>
  );
};

export default Placeholders;
