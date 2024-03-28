import React from "react";
import data from "../../config/navigation.json";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Input from "../../utils/input/Input";
import Button from "../../utils/button/Button";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import SecondFooter from "./secondfooter/SecondFooter";

const Footer = () => {
  return (
    <section>
      <div className="mt-40 bg-custom-footer bg-no-repeat bg-cover w-full py-5">
        <div className="container">
          <div className="grid grid-cols-1 px-5 gap-10 lg:grid-cols-3 lg:px-0">
            <div className="flex flex-col">
              <h1 className="text-white text-4xl mb-5 font-semibold">
                Logline
              </h1>
              <p className="text-white text-sm">{data.texts.textTitle}</p>
              <div className="flex mt-5 gap-2">
                <Link to={data.socials.facebook} target="_blank">
                  <FaFacebook size={30} color="#fff" />
                </Link>
                <Link to={data.socials.instagram} target="_blank">
                  <AiFillInstagram size={30} color="#fff" />
                </Link>
                <Link to={data.socials.linkedin} target="_blank">
                  <FaLinkedin size={30} color="#fff" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-2xl mb-5 font-semibold">
                Links rápidos
              </h1>
              <ul className="flex flex-col gap-2">
                {data.links.map((link, index) => (
                  <li
                    className="text-white flex items-center text-sm"
                    key={index}
                  >
                    <MdKeyboardDoubleArrowRight className="mr-2" />
                    <Link to={link.url}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-4xl mb-5 font-semibold">
                Newsletter
              </h1>
              <p className="text-white text-sm">{data.texts.textSubscribe}</p>
              <Input style={"mt-2 px-2"} placeholder={"Seu e-mail"} />
              <Button buttonText={"Inscreva-se"} />
            </div>
          </div>
        </div>
      </div>
      <SecondFooter />
    </section>
  );
};

export default Footer;
