import Logo from "../assets/Logo.png";

const sideTexts = [
  ["Kits", "Quests", "Perks"],
  ["Teams", "Statistics", "Recipes"],
];

const HeaderText = ({ title }) => {
  return <p className="gradient-text text-4xl">{title}</p>;
};

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-zinc-50">
      <div className="flex flex-col items-center justify-center font-MinecraftAlt uppercase">
        <img src={Logo} alt="Logo" width={900} className="mr-12" />
        <div className="-mt-16 flex flex-col justify-around items-center text-2xl gap-10 ml-10">
          <div className="flex flex-row gap-20">
            {sideTexts[0].map((item) => (
              <HeaderText key={item} title={item} />
            ))}
          </div>
          <div className="flex flex-row gap-20">
            {sideTexts[1].map((item) => (
              <HeaderText key={item} title={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
