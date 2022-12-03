import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardAdmin from "../components/management/CardAdmin";
import CardUser from "../components/management/CardUser";
import Navbar from "../components/shared/Navbar";
import { startGetUsers } from "../redux/actions/users";

const ManagementScreen = () => {
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleRegister = () => {
    navigate("/opina/auth/register");
  };

  const usersFiltered = users.filter((user) => user.user_role !== "root");
  const userFilteredPerRoot = users.filter((user) => user.user_role === "root");

  useEffect(() => {
    dispatch(startGetUsers());
  }, [dispatch]);

  return (
    <div className="general__content-dashboard">
      <Navbar />

      <div className="management__content">
        {userFilteredPerRoot.map((user) => (
          <CardAdmin user={user} key={user.user_id} />
        ))}
        <div className="management__container-button">
          <button onClick={handleRegister}>AGREGAR USUARIO</button>
        </div>
        {usersFiltered.map((user, index) => (
          <CardUser user={user} key={user.user_id} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ManagementScreen;
