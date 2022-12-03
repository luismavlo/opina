import React from "react";
import { ContentCardClipping } from "../components/home/ContentCardClipping";
import Navbar from "../components/shared/Navbar";

const HomeScreen = () => {
  return (
    <div className="general__content-dashboard">
      <Navbar />
      <section className="home-screen__content">
        <h2 className="home-screen__title">CLIPPING</h2>
        <ContentCardClipping />
      </section>
    </div>
  );
};

export default HomeScreen;
