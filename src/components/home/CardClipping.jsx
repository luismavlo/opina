import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import {
  startDeleteClipping,
  startUpdateClipping,
} from "../../redux/actions/clipping";

export const CardClipping = (props) => {
  const initialForm = {
    title: props.title,
    link: props.link,
  };

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm(initialForm);

  const { title, link } = formValues;

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(startDeleteClipping(props.id));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(startUpdateClipping(props.id, title, link));
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
          <div className="card-clipping__circle-opt" onClick={handleUpdate}>
            <i className="fa-solid fa-check"></i>
          </div>
          <div className="card-clipping__circle-opt" onClick={handleDelete}>
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </form>
    </div>
  );
};
