import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import newspaper from "../../assets/home-assets/newspaper.png";
import { orderClippings } from "../../helpers/orderClippings";

import { startGetClipping } from "../../redux/actions/clipping";

const ClippingHome = () => {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(startGetClipping());
  }, [dispach]);

  const { clippings } = useSelector((state) => state.clipping);

  return (
    <section className="section-clipping-home">
      <h2 className="home-titles clipping-title">Clipping</h2>
      <h3 className="home-subtitles-clipping">Más resaltados</h3>
      <ul className="container-links-clipping">
        {orderClippings(clippings).map((clipping) => (
          <li className="list-item-clipping" key={clipping.clipping_id}>
            <a
              href={clipping.clipping_link}
              className="list-link-clipping"
              target="_blank"
            >
              {clipping.clipping_name}
            </a>
          </li>
        ))}
      </ul>
      <img className="img-newspaper" src={newspaper} alt="image newspaper" />
    </section>
  );
};

export default ClippingHome;
