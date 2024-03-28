import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./button.css";

const Button = ({ buttonText, linkTo, visible }) => {
  return (
    <div className="flex">
      <Link
        to={linkTo}
        className={`lg:inline-block bg-orangeLogline animate-fade-right animate-once animate-duration-1000 btn btn-2 hover-slide-right before:bg-blueLogline before:absolute after:absolute ${visible}`}
      >
        <span className="rounded-sm flex items-center gap-5 text-white">
          {buttonText}
          <FaArrowRight />
        </span>
      </Link>
    </div>
  );
};

export default Button;
