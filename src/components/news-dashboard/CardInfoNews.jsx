import React from "react";
import { useDispatch } from "react-redux";
import { startDeleteNews, startNewsSelected } from "../../redux/actions/news";

const CardInfoNews = ({ newspapper }) => {
  const dispatch = useDispatch();

  const selectNews = () => {
    dispatch(startNewsSelected(newspapper));
  };

  const deleteNews = () => {
    dispatch(startDeleteNews(newspapper.new_id));
  };

  return (
    <article className="card-news-info">
      <div className="news-info__img-container">
        <img className="news-info__img" src={newspapper.new_image} alt="" />
      </div>
      <div className="news-info__container-info">
        <div className="news-info__title-container">
          <h2 className="news-info__title">{newspapper.new_tittle}</h2>
        </div>
        <div>
          <a
            target="_blank"
            href={newspapper.new_link}
            className="news-info__link"
          >
            Link de la noticia
          </a>
          <div className="news-info__container-btn">
            <button className="news-info__btn" onClick={selectNews}>
              Actualizar
            </button>
            <button className="news-info__btn" onClick={deleteNews}>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardInfoNews;
