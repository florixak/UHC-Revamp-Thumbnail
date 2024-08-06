import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center -mb-20">
      <img src={Logo} alt="Logo" width={500} className="mr-12" />
    </div>
  );
};

export default Header;
