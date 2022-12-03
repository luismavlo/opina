import React from "react";
import { Link } from "react-router-dom";

const CardNews = ({ newInfo }) => {
  return (
    <article className="card-news-landing">
      <header className="card-news-landing__header">
        <img
          className="card-news-landings__img"
          src={newInfo.new_image}
          alt="img news"
        />
      </header>
      <div className="card-news-landing__body">
        <div className="card-news-landing__body--overflow">
          <h3 className="card-news-landing__title">{newInfo.new_tittle}</h3>
          <p className="card-news-landing__text">{newInfo.new_description}</p>
        </div>
        <a href={newInfo.new_link} target="_blank">
          <button className="card-news-landing__btn">Saber más</button>
        </a>
      </div>
    </article>
  );
};

export default CardNews;
