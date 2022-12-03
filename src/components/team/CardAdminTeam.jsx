import React from "react";
import { useDispatch } from "react-redux";
import { iconCamara, logoWhite } from "../../assets";
import { useForm } from "../../hooks/useForm";
import {
  startDeleteEmployees,
  startUpdateEmployees,
} from "../../redux/actions/team";

const CardAdminTeam = ({ id, name, email, cargo, description, avatar }) => {
  const initialForm = {
    team_name: name,
    team_email: email,
    team_cargo: cargo,
    team_description: description,
    team_avatar: "img_default",
  };

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm(initialForm);

  const { team_name, team_email, team_cargo, team_description, team_avatar } =
    formValues;

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(startDeleteEmployees(id));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      startUpdateEmployees(
        id,
        team_name.toLowerCase(),
        team_email.toLowerCase(),
        team_cargo.toLowerCase(),
        team_description.toLowerCase(),
        team_avatar
      )
    );
  };

  return (
    <div className="management__card">
      <div className="management__card-header">
        <h2>Gerente</h2>
        <div className="management_add-photo">
          <img src={avatar} alt="" />
        </div>
      </div>
      <form onSubmit={handleUpdate}>
        <div className="management__group-flex">
          <div className="management__input-group">
            <label htmlFor="team_name">Nombre</label>
            <input
              type="text"
              name="team_name"
              value={team_name}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
          </div>

          <div className="management__input-group">
            <label htmlFor="team_email">Email</label>
            <input
              type="email"
              name="team_email"
              value={team_email}
              onChange={handleInputChange}
              pattern="[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?"
              autoComplete="off"
              required
            />
          </div>
        </div>

        <div className="management__group-flex">
          <div className="management__input-group">
            <label htmlFor="team_cargo">Cargo</label>
            <input
              type="text"
              name="team_cargo"
              value={team_cargo}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="management__input-group">
            <label htmlFor="team_description">Descripción</label>
            <input
              type="text"
              value={team_description}
              onChange={handleInputChange}
              name="team_description"
              autoComplete="off"
              required
            />
          </div>
        </div>

        <div className="container-button">
          <input type="submit" value="Actualizar" className="button-1" />
          &nbsp;
          <button type="button" className="button-1" onClick={handleDelete}>
            Eliminar
          </button>
        </div>
      </form>
      <img src={logoWhite} alt="" className="management__logo-opina" />
    </div>
  );
};

export default CardAdminTeam;
