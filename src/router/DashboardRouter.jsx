import React from "react";
import { Route, Routes } from "react-router-dom";
import AddUserToTeamScreen from "../pages/AddUserToTeamScreen";
import HomeScreen from "../pages/HomeScreen";
import ManagementScreen from "../pages/ManagementScreen";
import NewsScreen from "../pages/NewsScreen";
import OutslandingScreen from "../pages/OutslandingScreen";
import RegisterScreen from "../pages/RegisterScreen";
import TeamScreen from "../pages/TeamScreen";
import WebinarScreen from "../pages/WebinarScreen";
import NotificactionRoute from "./NotificactionRoute";

const DashboardRouter = () => {
  return (
    <Routes>
      <Route element={<NotificactionRoute />}>
        <Route path="auth/register" element={<RegisterScreen />} />
        <Route path="home" element={<HomeScreen />} />
        <Route path="team" element={<TeamScreen />} />
        <Route path="outslanding" element={<OutslandingScreen />} />
        <Route path="news" element={<NewsScreen />} />
        <Route path="webinar" element={<WebinarScreen />} />
        <Route path="management" element={<ManagementScreen />} />
        <Route path="addEmployee" element={<AddUserToTeamScreen />} />
      </Route>
    </Routes>
  );
};

export default DashboardRouter;
