import React from "react";
import { useDispatch } from "react-redux";
import { iconCamara, logoWhite } from "../../assets";
import { capitalize } from "../../helpers/capitalize";
import { useForm } from "../../hooks/useForm";
import { startUpdateUser } from "../../redux/actions/users";

const CardAdmin = ({ user }) => {
  const initialForm = {
    name: user.user_name,
    email: user.user_email,
    password: "",
    description: user.user_description,
  };

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm(initialForm);

  const { name, email, password, description } = formValues;

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      startUpdateUser(
        name.toLowerCase(),
        email.toLowerCase(),
        password,
        description.toLowerCase(),
        user.user_id
      )
    );
  };

  return (
    <div className="management__card">
      <div className="management__card-header">
        <h2>Administrador</h2>
        <div className="management_add-photo">
          <img src={user.user_avatar} alt="" className="management__avatar" />
        </div>
      </div>
      <form onSubmit={handleUpdate}>
        <div className="management__group-flex">
          <div className="management__input-group">
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

          <div className="management__input-group">
            <label htmlFor="email">Email</label>
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
        </div>

        <div className="management__group-flex">
          <div className="management__input-group">
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

          <div className="management__input-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              value={description}
              onChange={handleInputChange}
              name="description"
              autoComplete="off"
              required
            />
          </div>
        </div>

        <input type="submit" value="Actualizar" className="cPoint" />
      </form>
      <img src={logoWhite} alt="" className="management__logo-opina" />
    </div>
  );
};

export default CardAdmin;
