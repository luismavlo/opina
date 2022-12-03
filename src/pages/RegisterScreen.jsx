import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { startRegister } from "../redux/actions/auth";

const RegisterScreen = () => {
  //const { uid } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const initialForm = {
    name: "",
    email: "",
    password: "",
    repite_password: "",
    description: "",
  };

  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm(initialForm);

  const [avatar, setAvatar] = useState("");

  const { name, email, password, repite_password, description } = formValues;

  const onFileInputChange = ({ target }) => {
    if (target && target.files[0]) {
      setAvatar(target.files[0]);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (repite_password === password) {
      dispatch(
        startRegister(
          name.toLowerCase(),
          email.toLowerCase(),
          password.trim(),
          description.toLowerCase(),
          avatar
        )
      );
      reset();
      navigate("/opina/management");
    } else {
      console.log("Las contraseñas no coinciden");
    }
  };

  const back = () => {
    navigate(-1);
  };

  return (
    <div className="auth__container">
      <div className="register__card">
        <h2>REGISTER</h2>
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
            <label htmlFor="password">Password</label>

            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              pattern="^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}"
              required
            />
          </div>

          <div className="auth__input-group">
            <label htmlFor="repite_password">Repeat password</label>

            <input
              type="password"
              name="repite_password"
              value={repite_password}
              onChange={handleInputChange}
              pattern="^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}"
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
            <label htmlFor="user_avatar">Avatar</label>

            <div className="register__content-file">
              <p>
                <i className="fa-solid fa-upload spacing-right"></i>Add File
              </p>
              <input
                type="file"
                name="user_avatar"
                onChange={onFileInputChange}
                accept="image/png, image/jpeg"
              />
            </div>
          </div>

          <input type="submit" value="Registrar" />

          <button className="button-1" onClick={back}>
            Volver a la configuración
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
