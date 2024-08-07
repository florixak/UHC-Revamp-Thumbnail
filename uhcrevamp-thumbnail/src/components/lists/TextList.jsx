const TextList = ({ list }) => {
  return (
    <div className="w-full flex flex-col gap-4 text-center">
      {list.map((item) => (
        <li
          key={item.title}
          className="w-full flex flex-row gap-2 text-2xl justify-between"
        >
          <span className="font-MinecraftAlt">{item.title}</span>{" "}
          <p className="text-xl text-right">{item.description}</p>
        </li>
      ))}
    </div>
  );
};

export default TextList;
