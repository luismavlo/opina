import React from "react";

const CardIntegrante = ({ employee }) => {
  return (
    <article className="card-integrante">
      <img
        className="card-integrante__img"
        src={employee.team_avatar}
        alt="Foto de integrante"
      />
      <h3 className="card-integrante__name">{employee.team_name}</h3>
      <p className="card-integrante__cargo">{employee.team_description}</p>
    </article>
  );
};

export default CardIntegrante;
