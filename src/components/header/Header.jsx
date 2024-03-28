import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../config/navigation.json";
import Logo from "../../../public/images/Logo.png";
import LogoBranco from "../../../public/images/logo-branco.png";
import "./header.css";
import Button from "../../utils/button/Button";
import Socials from "../../utils/socials/Socials";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`py-4 shadow-md fixed w-full top-0 z-10 ${
          isOpen ? "bg-blueLogline" : "bg-white"
        }`}
        style={{
          transition: "background-color 0.3s ease",
        }}
      >
        <div className="container">
          <nav className="flex px-5 justify-between items-center  lg:px-0">
            <a href="/">
              <img
                className="w-[110px]"
                src={isOpen ? LogoBranco : Logo}
                alt=""
              />
            </a>
            <ul className="hidden lg:flex gap-10">
              {data.links.map((link, index) => (
                <li
                  className="font-semibold uppercase text-sm tracking-[2px] text-blackLogline hover:text-orangeLogline transition-colors duration-100 ease-in-out slideInRightIndividual linha"
                  key={index}
                >
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
            <Button
              linkTo={"/contato"}
              visible={"hidden lg:flex"}
              buttonText={"CONTATO"}
            />

            <button
              id="hamburger"
              className={`lg:hidden ${isOpen && "open"}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
        {isOpen && (
          <div className="flex flex-col h-screen mt-4 py-10 gradient-blue shadow-md fixed w-full  slideInRight border-t-2">
            <ul className=" flex flex-col gap-5 px-5 slideInRight mb-5">
              {data.links.map((link, index) => (
                <li
                  className="font-semibold slideInRightIndividual uppercase text-sm tracking-[2px] text-white"
                  key={index}
                  onClick={toggleMenu}
                >
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
              <Button
                linkTo={"/contato"}
                visible={"block lg:hidden"}
                buttonText={"CONTATO"}
              />
            </ul>
            <Socials />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
