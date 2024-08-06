const List = ({ list }) => {
  return (
    <div className="flex flex-col gap-6">
      {list.map((item) => (
        <li className="flex flex-col" key={item.title}>
          <span className="font-bold font-MinecraftAlt first-letter:text-4xl first-letter:gradient-text outline-black text-xl">
            {item.title}
          </span>
          <p className="text-xl">{item.description}</p>
        </li>
      ))}
    </div>
  );
};

export default List;
