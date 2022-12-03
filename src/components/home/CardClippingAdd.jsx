import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { startCreateClipping } from "../../redux/actions/clipping";

export const CardClippingAdd = () => {
  const initialForm = {
    title: "",
    link: "",
  };

  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm(initialForm);

  const { title, link } = formValues;

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(startCreateClipping(title, link));
    reset();
  };

  return (
    <div className="card-clipping">
      <form>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="link"
          value={link}
          onChange={handleInputChange}
        />

        <div className="card-clipping__content--options">
          <div className="card-clipping__circle-opt" onClick={handleAdd}>
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </form>
    </div>
  );
};
