import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetEmployees } from "../../../redux/actions/team";
import CardIntegrante from "./CardIntegrante";
import "./styles/equipo.css";

const Equipo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetEmployees());
  }, [dispatch]);

  const { employees } = useSelector((state) => state.team);

  return (
    <section className="equipo-section">
      <h2 className="equipo__title">Nuestro equipo</h2>
      <div className="equipo__container">
        {employees.map((employee) => (
          <CardIntegrante key={employee.team_id} employee={employee} />
        ))}
      </div>
    </section>
  );
};

export default Equipo;
