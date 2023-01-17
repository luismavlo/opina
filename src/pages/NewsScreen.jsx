import React, { useEffect, useState } from "react";
import CardNews from "../components/news-dashboard/CardNews";
import "../components/news-dashboard/newsScreen.css";
import Navbar from "../components/shared/Navbar";
import CardInfoNews from "../components/news-dashboard/CardInfoNews";
import { useDispatch, useSelector } from "react-redux";
import { startGetNews } from "../redux/actions/news";

const NewsScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetNews());
  }, []);

  const news = useSelector((state) => state.news.allNews);

  const [onFilter, setOnFilter] = useState(false);

  const handleFilter = () => {
    setOnFilter(!onFilter);
  };

  const filterByTrueFeatured = news.filter(
    (singleNews) => singleNews.new_featured == 1
  );

  return (
    <div className="news-dash">
      <Navbar />
      <section className="news-screen__section">
        <h2 className="news-screen__title">Noticias</h2>
        <div className="news-screen-container-card">
          <CardNews />
        </div>
      </section>

      <div className="webinar-list-section">
        <a className="btn btn--white" onClick={handleFilter}>
          Fitrar Noticias
        </a>
      </div>

      <div className="webinar-list-section">
        <h2 className="heading--two">
          {onFilter ? (
            <span>Noticias Destacadas</span>
          ) : (
            <span>Todas las Noticias</span>
          )}
        </h2>
      </div>

      <section className="news-list-section">
        {onFilter
          ? filterByTrueFeatured.map((newspapper) => (
              <CardInfoNews key={newspapper.new_id} newspapper={newspapper} />
            ))
          : news.map((newspapper) => (
              <CardInfoNews key={newspapper.new_id} newspapper={newspapper} />
            ))}
      </section>
    </div>
  );
};

export default NewsScreen;
