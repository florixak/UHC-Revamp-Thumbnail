import Section from "./Section";
import DiscordLogo from "../assets/discord.png";

const Contact = () => {
  return (
    <Section title="Contact">
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <img width={280} src={DiscordLogo} alt="discord.png" />
        <h2 className="font-MinecraftAlt text-4xl text-center gradient-text">
          florixak
        </h2>
        <p className="m-auto text-3xl text-center max-w-[600px]">
          If you have any problem or are you interested in something then
          contact me.
        </p>
      </div>
    </Section>
  );
};

export default Contact;
