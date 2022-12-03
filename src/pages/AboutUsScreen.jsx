import React from "react";
import Equipo from "../components/Lading/about-us/Equipo";
import InfoOpina from "../components/Lading/about-us/InfoOpina";
import MisionVisionObjetivo from "../components/Lading/about-us/MisionVisionObjetivo";
import FooterLanding from "../components/shared/FooterLanding";
import HeaderLanding from "../components/shared/HeaderLanding";

const AboutUsScreen = () => {
  return (
    <div>
      <HeaderLanding />
      <main className="main-about-us">
        <InfoOpina />
        <MisionVisionObjetivo />
        <Equipo />
      </main>
      <FooterLanding />
    </div>
  );
};

export default AboutUsScreen;
