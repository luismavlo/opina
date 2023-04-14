import React from "react";
import video from "../../../assets/opinapace/opinapace_video.png";

const OpinaInterview = () => {
  return (
    <section className="opina-interview">
      <h2 className="opina-interview__title">Entrevista</h2>
      <article className="opina-interview__container">
        <h3 className="opina-interview__container__title">Canal 7 trujillo</h3>
        <a
          className="opina-interview__link"
          href="https://www.youtube.com/watch?v=zAwCOFWxIHc"
          target="_blank"
        >
          <img className="opina-interview__video" src={video} alt="" />
        </a>
      </article>
    </section>
  );
};

export default OpinaInterview;
