import React from "react";
import { Link } from "react-router-dom";

const CardWebinarLanding = ({ webinar }) => {
  return (
    <article className="card-web-landing">
      <header className="card-web-landing__header">
        <a href={webinar.web_link} target="_blank">
          <img
            className="card-web-landing__img"
            src={webinar.web_image}
            alt=""
          />
        </a>
      </header>
      <div className="card-web-landing__body">
        <h3 className="card-web-landing__body__title">{webinar.web_tittle}</h3>
        <p className="card-web-landing__body__description">
          {webinar.web_description}
        </p>
      </div>
    </article>
  );
};

export default CardWebinarLanding;
