import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { startCreateEmployees } from "../redux/actions/team";

const AddUserToTeamScreen = () => {
  const navigate = useNavigate();

  const initialForm = {
    name: "",
    email: "",
    position: "",
    description: "",
  };

  const [avatar, setAvatar] = useState("");

  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm(initialForm);

  const { name, email, position, description } = formValues;

  const onFileInputChange = ({ target }) => {
    if (target && target.files[0]) {
      setAvatar(target.files[0]);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(
      startCreateEmployees(
        name.toLowerCase(),
        email.toLowerCase(),
        position.toLowerCase(),
        description.toLowerCase(),
        avatar
      )
    );
    reset();
    navigate("/opina/team");
  };

  const back = () => {
    navigate(-1);
  };

  return (
    <div className="auth__container">
      <div className="register__card">
        <h2>AGREGAR INTEGRANTE</h2>
        <form onSubmit={handleRegister} className="register__content-form">
          <div className="auth__input-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
          </div>

          <div className="auth__input-group">
            <label htmlFor="email">Email:</label>

            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              pattern="[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?"
              autoComplete="off"
              required
            />
          </div>

          <div className="auth__input-group">
            <label htmlFor="position">Cargo</label>

            <input
              type="text"
              name="position"
              value={position}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="auth__input-group">
            <label htmlFor="description">Descripción</label>

            <input
              type="text"
              value={description}
              onChange={handleInputChange}
              name="description"
              autoComplete="off"
              required
            />
          </div>

          <div className="auth__input-group input-file">
            <label htmlFor="avatar">Avatar</label>

            <div className="register__content-file">
              <p>
                <i className="fa-solid fa-upload spacing-right"></i>Add File
              </p>
              <input
                type="file"
                name="avatar"
                accept="image/png, image/jpeg"
                onChange={onFileInputChange}
              />
            </div>
          </div>

          <input type="submit" value="Agregar" className="cPoint" />

          <button className="button-1" onClick={back}>
            Volver a la configuración
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserToTeamScreen;
