const Section = ({ title, children }) => {
  return (
    <section className="flex flex-col gap-14 m-auto w-[1000px] bg-transparent p-10 rounded-xl text-zinc-50">
      <h1 className="font-MinecraftAlt text-6xl text-center gradient-text">
        {title}
      </h1>
      {children}
    </section>
  );
};

export default Section;
