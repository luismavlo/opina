import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Loading } from "../components/ui/loading";
import AboutUsScreen from "../pages/AboutUsScreen";
import LandingScreen from "../pages/LandingScreen";
import OpinapaceScreen from "../pages/OpinapaceScreen";
import { startChecking } from "../redux/actions/auth";
import AuthRouter from "./AuthRouter";
import DashboardRouter from "./DashboardRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  return (
    <HashRouter>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/">
          <Route index element={<LandingScreen />} />
          <Route path="about-us" element={<AboutUsScreen />} />
          <Route path="opinapace" element={<OpinapaceScreen />} />
        </Route>

        <Route
          path="/auth/*"
          element={
            <PublicRoute isAuthenticated={!!uid}>
              <AuthRouter />
            </PublicRoute>
          }
        />

        <Route
          path="/opina/*"
          element={
            <PrivateRoute isAuthenticated={!!uid}>
              <DashboardRouter />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<LandingScreen />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
