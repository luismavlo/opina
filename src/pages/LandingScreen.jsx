import React from "react";
import ClippingHome from "../components/Lading/ClippingHome";
import ContactHome from "../components/Lading/ContactHome";
import PrincipalSection from "../components/Lading/PrincipalSection";
import ServiciosSection from "../components/Lading/ServiciosSection";
import FooterLanding from "../components/shared/FooterLanding";
import HeaderLanding from "../components/shared/HeaderLanding";

const LandingScreen = () => {
  return (
    <div className="landing__screen particles-js">
      <HeaderLanding />
      <main className="main-home">
        <PrincipalSection />
        <ServiciosSection />
        <ClippingHome />
        <ContactHome />
        <FooterLanding />
      </main>
    </div>
  );
};

export default LandingScreen;
