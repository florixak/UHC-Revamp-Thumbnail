import { permissions } from "../data";
import TextList from "./lists/TextList";
import Section from "./Section";
import UnderThumbnail from "./UnderThumbnail";

const Permissions = () => {
  const slicedPermissions = permissions.slice(0, 5);
  return (
    <Section title="Permissions">
      <TextList list={slicedPermissions} />
      <UnderThumbnail />
    </Section>
  );
};

export default Permissions;
