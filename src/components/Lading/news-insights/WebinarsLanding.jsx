import React from "react";
import webinarImage from "../../../assets/opinapace/webinar_image.webp";
import CardWebinarLanding from "./CardWebinarLanding";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { startGetWebinar } from "../../../redux/actions/webinars";

const WebinarsLanding = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetWebinar());
  }, [dispatch]);

  const { webinars } = useSelector((state) => state.webinar);

  return (
    <section className="webinars-landing">
      <h2 className="webinars-landing__title">Webinars</h2>
      <div className="webinars-landing__container">
        {webinars.map((webinar) => (
          <CardWebinarLanding key={webinar.web_id} webinar={webinar} />
        ))}
      </div>
    </section>
  );
};

export default WebinarsLanding;
