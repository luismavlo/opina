import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginScreen from "../pages/LoginScreen";


const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginScreen />} />
      <Route path="*" element={<LoginScreen />} />
    </Routes>
  );
};

export default AuthRouter;
