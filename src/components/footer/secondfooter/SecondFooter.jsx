import React from "react";
import LogoBranco from "../../../../public/images/logo-branco.png";
import Summer from "../../../../public/images/summer-branco.png";

const SecondFooter = () => {
  return (
    <section className="gradient-blue">
      <div className="container">
        <div className="flex flex-col gap-2 py-5 justify-between items-center lg:flex-row lg:py-0 lg:gap-0">
          <img className="w-[120px]" src={LogoBranco} alt="Logline Logo" />
          <p className="text-white text-center text-md mt-10 opacity-35 lg:mt-0">
            Todos os direitos reservados © 2024
          </p>
          <img className="w-[100px]" src={Summer} alt="Summer Logo" />
        </div>
      </div>
    </section>
  );
};

export default SecondFooter;
