import React from "react";
import { useDispatch } from "react-redux";
import { iconCamara, logoWhite } from "../../assets";
import { capitalize } from "../../helpers/capitalize";
import { useForm } from "../../hooks/useForm";
import {
  startDeleteEmployees,
  startUpdateEmployees,
} from "../../redux/actions/team";

const CardUserTeam = ({ employess }) => {
  const initialForm = {
    name: employess.team_name,
    email: employess.team_email,
    position: employess.team_cargo,
    description: employess.team_description,
  };

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm(initialForm);

  const { name, email, position, description } = formValues;

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(startDeleteEmployees(employess.team_id));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      startUpdateEmployees(
        employess.team_id,
        name,
        email,
        position,
        description
      )
    );
  };

  return (
    <div className="management__card">
      <div className="management__card-header ml-5">
        <h2>{`Integrante`}</h2>
        <div className="management_add-photo">
          <img src={employess.team_avatar} alt="" />
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
            <label htmlFor="position">Cargo:</label>
            <input
              type="text"
              name="position"
              value={position}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="management__input-group">
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
        </div>

        <div className="container-button btn-margin-center">
          <input type="submit" value="Actualizar" className="button-1" />
          &nbsp;
          <button type="button" className="button-1" onClick={handleDelete}>
            Eliminar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardUserTeam;
