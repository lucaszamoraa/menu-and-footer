import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import data from "../../config/navigation.json";

const Socials = () => {
  return (
    <div className="flex items-center justify-center px-5 py-4 gap-10 mt-5 bg-grayLogline">
      <Link to={data.socials.facebook} target="_blank">
        <FaFacebook size={40} color="#fff" />
      </Link>
      <Link to={data.socials.instagram} target="_blank">
        <AiFillInstagram size={45} color="#fff" />
      </Link>
      <Link to={data.socials.linkedin} target="_blank">
        <FaLinkedin size={40} color="#fff" />
      </Link>
    </div>
  );
};

export default Socials;
