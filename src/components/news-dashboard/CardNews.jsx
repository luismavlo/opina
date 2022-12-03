import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import {
  startCreateNews,
  startNewsSelected,
  startUpdateNews,
} from "../../redux/actions/news";

const CardNews = () => {
  const inputFile = useRef();
  const inputPdf = useRef();

  const dispatch = useDispatch();

  const initialForm = {
    title: "",
    description: "",
  };

  const [checked, setChecked] = useState(false);
  const [image, setImage] = useState("");
  const [renderForm, setRenderForm] = useState(true);
  const [pdf, setPdf] = useState("");

  const reset = () => {
    formValues.title = "";
    formValues.description = "";
    setImage("");
    setPdf("");
    inputFile.current.value = "";
    inputPdf.current.value = "";
    setChecked(false);
  };

  const { newsSelected } = useSelector((state) => state.news);

  const onFileInputChange = ({ target }) => {
    if (target && target.files[0]) {
      setImage(target.files[0]);
    }
  };

  const onPdfInputChange = ({ target }) => {
    if (target && target.files[0]) {
      setPdf(target.files[0]);
    }
  };

  const deselectNews = () => {
    dispatch(startNewsSelected(null));
    reset();
  };

  const [formValues, handleInputChange] = useForm(initialForm);

  const { title, description } = formValues;

  useEffect(() => {
    if (newsSelected) {
      formValues.title = newsSelected.new_tittle;
      formValues.description = newsSelected.new_description;
      setChecked(newsSelected.new_featured == 1 ? true : false);
      setRenderForm(!renderForm);
    } else {
      reset();
    }
  }, [newsSelected]);

  const clickUpdateImg = () => {
    inputFile.current.click();
  };

  const clickUpdatePdf = () => {
    inputPdf.current.click();
  };

  const submit = (e) => {
    e.preventDefault();

    if (newsSelected) {
      dispatch(
        startUpdateNews(newsSelected.new_id, title, description, checked)
      );
    } else {
      dispatch(startCreateNews(title, description, image, pdf, checked));
    }
    deselectNews();
    reset();
  };

  return (
    <form className="card-news" onSubmit={submit}>
      <h2 className="card-news__title">Agregar Noticia</h2>
      <label className="labels-news" htmlFor="title-news">
        Título
      </label>
      <input
        className="card-news__input"
        name="title"
        value={title}
        onChange={handleInputChange}
        id="title-news"
        type="text"
        placeholder="Escriba el título de la noticia"
      />

      <label className="labels-news" htmlFor="pdf-news">
        Cargar Pdf
      </label>
      <div className="card-news__input-file-container">
        <input
          className="card-news__input card-news__input-file"
          id="pdf-news"
          type="file"
          ref={inputPdf}
          name="pdf-news"
          onChange={onPdfInputChange}
          placeholder="Ingresa el pdf de la noticia"
        />
        <button
          type="button"
          className="card-news-button"
          onClick={clickUpdatePdf}
        >
          Cargar Pdf
        </button>
      </div>

      <label className="labels-news" htmlFor="image-news">
        Imagen de la noticia
      </label>
      <div className="card-news__input-file-container">
        <input
          className="card-news__input card-news__input-file"
          id="image-news"
          type="file"
          ref={inputFile}
          name="image-news"
          onChange={onFileInputChange}
          placeholder="Subir la imagen de la noticia"
        />
        <button
          type="button"
          className="card-news-button"
          onClick={clickUpdateImg}
        >
          Cargar imagen
        </button>
      </div>

      <label htmlFor="featured" className="labels-webinar display">
        ¿Noticia destacada?
      </label>
      <input
        type="checkbox"
        name="featured"
        checked={checked}
        value={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      <label className="labels-news" htmlFor="description-news">
        Descripción
      </label>
      <textarea
        className="card-news__input card-news__input-textarea"
        id="description-news"
        name="description"
        value={description}
        onChange={handleInputChange}
        type="text"
        placeholder="Escriba La descripción de la noticia"
      />

      <input
        type="submit"
        value="Agregar"
        className="card-webinar-button cPoint"
      />
      <input
        type="button"
        value="Cancelar"
        onClick={deselectNews}
        className="card-webinar-button cPoint"
      />
    </form>
  );
};

export default CardNews;
