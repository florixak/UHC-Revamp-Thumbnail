const CommandList = ({ list }) => {
  return (
    <div className="w-full flex flex-col gap-4 text-center">
      {list.map((item) => (
        <li
          key={item.title}
          className="w-full flex flex-row gap-2 text-2xl justify-between"
        >
          <div className="flex flex-row gap-5 font-bold">
            <p>{item.command}</p>
            <p className="text-lg mt-1">{item.aliases}</p>
          </div>

          <p className="text-xl text-right">{item.description}</p>
        </li>
      ))}
    </div>
  );
};

export default CommandList;
