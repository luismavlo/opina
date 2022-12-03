import React from "react";
import { useDispatch } from "react-redux";
import {
  startDeleteWebinar,
  webinarSelected,
} from "../../redux/actions/webinars";

const CardInfoWebinar = ({ webinar }) => {
  const dispatch = useDispatch();

  const selectWebinar = () => {
    dispatch(webinarSelected(webinar));
  };

  const deleteWebinar = () => {
    dispatch(startDeleteWebinar(webinar.web_id));
  };

  return (
    <article className="card-webinar-info">
      <div className="web-info__img-container">
        <img className="web-info__img" src={webinar.web_image} alt="" />
      </div>
      <div className="web-info__container-info">
        <div className="web-info__title-container">
          <h2 className="web-info__title">{webinar.web_tittle}</h2>
        </div>
        <div>
          <a target="_blank" href={webinar.web_link} className="web-info__link">
            Link de Youtube
          </a>
          <div className="web-info__container-btn">
            <button className="web-info__btn" onClick={selectWebinar}>
              Actualizar
            </button>
            <button className="web-info__btn" onClick={deleteWebinar}>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardInfoWebinar;
