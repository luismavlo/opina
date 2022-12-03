import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import CardAdminTeam from "../components/team/CardAdminTeam";
import CardUserTeam from "../components/team/CardUserTeam";
import { startGetEmployees } from "../redux/actions/team";

const TeamScreen = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const employess = useSelector((state) => state.team.employees);

  const employessFiltered = employess.filter(
    (emp) => emp.team_cargo !== "gerente"
  );

  const employessFilteredByManager = employess.filter(
    (emp) => emp.team_cargo === "gerente"
  );

  useEffect(() => {
    dispatch(startGetEmployees());
  }, []);

  const handleAddEmploy = () => {
    navigate("/opina/addEmployee");
  };

  return (
    <div className="general__content-dashboard">
      <Navbar />
      <div className="team__content">
        {employessFilteredByManager.map((employess) => (
          <CardAdminTeam
            key={employess.team_id}
            id={employess.team_id}
            name={employess.team_name}
            email={employess.team_email}
            cargo={employess.team_cargo}
            description={employess.team_description}
            avatar={employess.team_avatar}
          />
        ))}
        <div className="management__container-button">
          <button onClick={handleAddEmploy} className="cPoint">
            AGREGAR AL EQUIPO
          </button>
        </div>
        {employessFiltered.map((employess) => (
          <CardUserTeam key={employess.team_id} employess={employess} />
        ))}
      </div>
    </div>
  );
};

export default TeamScreen;
