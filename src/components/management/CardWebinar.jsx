import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import {
  startCreateWebinar,
  startUpdateWebinar,
  webinarSelected,
} from "../../redux/actions/webinars";

const CardWebinar = () => {
  const inputFile = useRef();

  const dispatch = useDispatch();

  const initialForm = {
    title: "",
    description: "",
    link: "",
  };

  const [checked, setChecked] = useState(false);
  const [image, setImage] = useState("");
  const [renderForm, setRenderForm] = useState(true);

  const reset = () => {
    formValues.title = "";
    formValues.description = "";
    formValues.link = "";
    inputFile.current.value = "";
    setImage("");
    setChecked(false);
  };

  const { webSelected } = useSelector((state) => state.webinar);

  const onFileInputChange = ({ target }) => {
    if (target && target.files[0]) {
      setImage(target.files[0]);
    }
  };

  const deselectWebinar = () => {
    dispatch(webinarSelected(null));
    reset();
  };

  const [formValues, handleInputChange] = useForm(initialForm);

  const { title, description, link } = formValues;

  useEffect(() => {
    if (webSelected) {
      formValues.title = webSelected.web_tittle;
      formValues.description = webSelected.web_description;
      formValues.link = webSelected.web_link;
      setChecked(webSelected.web_featured == 1 ? true : false);
      setRenderForm(!renderForm);
    } else {
      reset();
    }
  }, [webSelected]);

  const clickUpdateImg = () => {
    inputFile.current.click();
  };

  const submit = (e) => {
    e.preventDefault();

    if (webSelected) {
      dispatch(
        startUpdateWebinar(
          webSelected.web_id,
          title,
          description,
          link,
          checked ? "1" : "0"
        )
      );
    } else {
      dispatch(
        startCreateWebinar(title, description, link, image, checked ? "1" : "0")
      );
    }

    reset();
  };

  return (
    <form className="card-webinar" onSubmit={submit}>
      <h2 className="card-webinar__title">Agregar Webinar</h2>
      <label className="labels-webinar" htmlFor="title-webinar">
        Título
      </label>
      <input
        className="card-webinar__input"
        name="title"
        value={title}
        onChange={handleInputChange}
        id="title-webinar"
        type="text"
        placeholder="Escriba el título de webinar"
      />

      <label className="labels-webinar" htmlFor="link-webinar">
        Link de youtube
      </label>
      <input
        className="card-webinar__input"
        name="link"
        value={link}
        onChange={handleInputChange}
        id="link-webinar"
        type="text"
        placeholder="Escriba link de youtube del webinar"
      />

      <label className="labels-webinar" htmlFor="image-webinar">
        Imagen del webinar
      </label>
      <div className="card-webinar__input-file-container">
        <input
          className="card-webinar__input card-webinar__input-file"
          id="image-webinar"
          type="file"
          ref={inputFile}
          name="image-webinar"
          onChange={onFileInputChange}
          placeholder="Ingresa la imagen del webinar"
        />
        <button
          type="button"
          className="card-webinar-button cPoint"
          onClick={clickUpdateImg}
        >
          Cargar imagen
        </button>
      </div>

      <label htmlFor="featured" className="labels-webinar display">
        ¿Webinar destacado?
      </label>
      <input
        type="checkbox"
        name="featured"
        checked={checked}
        value={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      <label className="labels-webinar" htmlFor="description-webinar">
        Descripción
      </label>
      <textarea
        className="card-webinar__input card-webinar__input-textarea"
        id="description-webinar"
        name="description"
        value={description}
        onChange={handleInputChange}
        type="text"
        placeholder="Escriba La descripción del webinar"
      />

      <input
        type="submit"
        value="Agregar"
        className="card-webinar-button cPoint"
      />
      <input
        type="button"
        value="Cancelar"
        onClick={deselectWebinar}
        className="card-webinar-button cPoint"
      />
    </form>
  );
};

export default CardWebinar;
