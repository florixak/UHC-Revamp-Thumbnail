import Test from "../../assets/test.jpg";
import Kits from "../../assets/kits.png";
import Perks from "../../assets/perks.png";
import CustomRecipes from "../../assets/custom-recipes.png";
import Profile from "../../assets/profile.png";
import Teams from "../../assets/teams.png";

const List = ({ list }) => {
  return (
    <div className="w-full flex flex-col gap-20">
      {list.map((item) => (
        <li
          className="w-full flex flex-col odd:items-start even:items-end"
          key={item.title}
        >
          <h1 className="font-bold font-MinecraftAlt first-letter:text-5xl first-letter:gradient-text outline-black text-3xl">
            {item.title}
          </h1>
          <img
            className="shadow-zinc-50 shadow-lg border-zinc-50 border-2"
            width={1920}
            src={Kits}
            alt=""
          />
        </li>
      ))}
    </div>
  );
};

export default List;
