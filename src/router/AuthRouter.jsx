import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginScreen from "../pages/LoginScreen";
import NotificactionRoute from "./NotificactionRoute";


const AuthRouter = () => {
  return (
    <Routes>
      <Route element={<NotificactionRoute />}>
        <Route path="login" element={<LoginScreen />} />
        <Route path="*" element={<LoginScreen />} />
      </Route>  
    </Routes>
  );
};

export default AuthRouter;
