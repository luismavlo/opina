import React, { useEffect } from "react";
import torrePizza from "../../../assets/opinapace/torre-pizza.jpeg";
import CardNews from "../../Lading/news-insights/CardNews";
import { useSelector, useDispatch } from "react-redux";
import { startGetNews } from "../../../redux/actions/news";
const NewsInsights = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetNews());
  }, [dispatch]);

  const cardsNews = useSelector((state) => state.news.allNews);

  return (
    <section className="news-insights">
      <h2 className="news-insights__title">New and Insights</h2>
      <div className="news-insights__container">
        {cardsNews.map((newInfo) => (
          <CardNews key={newInfo.new_id} newInfo={newInfo} />
        ))}
      </div>
    </section>
  );
};

export default NewsInsights;
