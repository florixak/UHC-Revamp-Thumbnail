import { FaArrowDown } from "react-icons/fa6";

const UnderThumbnail = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      <FaArrowDown size={22} />
      <p className="text-2xl font-bold text-center">More under thumbnail</p>
      <FaArrowDown size={22} />
    </div>
  );
};

export default UnderThumbnail;
