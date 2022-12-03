import React from "react";
import { CardClipping } from "./CardClipping";
import { CardClippingAdd } from "./CardClippingAdd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { startGetClipping } from "../../redux/actions/clipping";

export const ContentCardClipping = () => {
  const dispatch = useDispatch();
  const { clippings } = useSelector((state) => state.clipping);

  useEffect(() => {
    dispatch(startGetClipping());
  }, [dispatch]);

  return (
    <section className="clipping">
      {clippings.map((clipping) => (
        <CardClipping
          key={clipping.clipping_id}
          title={clipping.clipping_name}
          link={clipping.clipping_link}
          id={clipping.clipping_id}
        />
      ))}

      <CardClippingAdd />
    </section>
  );
};
