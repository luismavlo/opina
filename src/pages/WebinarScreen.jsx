import React, { useEffect, useState } from "react";
import CardInfoWebinar from "../components/management/CardInfoWebinar";
import CardWebinar from "../components/management/CardWebinar";
import NavBar from "../components/shared/Navbar";
import presentation from "../assets/webinar/presentation-photo.webp";
import { startGetWebinar } from "../redux/actions/webinars";
import { useDispatch, useSelector } from "react-redux";

const WebinarScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetWebinar());
  }, [dispatch]);

  const [onFilter, setOnFilter] = useState(false);

  const { webinars } = useSelector((state) => state.webinar);

  const handleFilter = () => {
    setOnFilter(!onFilter);
  };

  const filterByTrueFeatured = webinars.filter(
    (webinar) => webinar.web_featured == 1
  );

  return (
    <div className="webinar-screen">
      <NavBar />
      <section className="webinar-screen__section">
        <h2 className="webinar-screen__title">Webinar</h2>
        <div className="webinar-screen-container-card">
          <CardWebinar />
        </div>
      </section>
      <div className="webinar-list-section">
        <button className="btn btn--white" onClick={handleFilter}>
          Fitrar Webinars
        </button>
      </div>

      <div className="webinar-list-section">
        <h2 className="heading--two">
          {onFilter ? (
            <span>Webinars Destacados</span>
          ) : (
            <span>Todos los Webinars</span>
          )}
        </h2>
      </div>

      <section className="webinar-list-section">
        {onFilter
          ? filterByTrueFeatured.map((webinar) => (
              <CardInfoWebinar key={webinar.web_id} webinar={webinar} />
            ))
          : webinars.map((webinar) => (
              <CardInfoWebinar key={webinar.web_id} webinar={webinar} />
            ))}
      </section>
    </div>
  );
};

export default WebinarScreen;
