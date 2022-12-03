import axios from "axios";
import getConfig from "../../helpers/getconfig";
import { types } from "../types/types";
import { setIsLoading } from "./ui";
import { startGetUsers } from "./users";

export const startLogin = (user_email, user_password) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .post(
        "https://backend.opina-peru.com/UserController/login",
        {
          user_email,
          user_password,
        }
      )
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("token-init-date", new Date().getTime());
        dispatch(
          login({
            uid: res.data.user_id,
            name: res.data.user_name,
            role: res.data.user_role,
            avatar: res.data.user_avatar,
          })
        );
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const startChecking = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        "https://backend.opina-peru.com/UserController/tokenValidator",
        getConfig()
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("token-init-date", new Date().getTime);
        dispatch(
          login({
            uid: res.data.user_id,
            name: res.data.user_name,
            role: res.data.user_role,
            avatar: res.data.user_avatar,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startRegister = (name, email, password, description, avatar) => {
  const formData = new FormData();
  formData.append("user_name", name);
  formData.append("user_email", email);
  formData.append("user_password", password);
  formData.append("user_description", description);
  formData.append("user_avatar", avatar);
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .post(
        "https://backend.opina-peru.com/UserController/insert_user",
        formData,
        getConfig()
      )
      .then((res) => {
        console.log(res.data);
        dispatch(startGetUsers());
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startLogout = () => {
  return () => {
    localStorage.clear();
    location.reload(true)
  };
};


export const startClearLogin = () => ({
  type: types.clearLogin,
});