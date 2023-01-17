import axios from "axios";
import getConfig from "../../helpers/getconfig";
import useNotification from "../../hooks/useNotification";
import { types } from "../types/types";
import { setIsLoading } from "./ui";
import { startGetUsers } from "./users";

export const startLogin = (user_email, user_password) => {
  const notificationActive = useNotification()
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
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("token-init-date", new Date().getTime());
        notificationActive(data.message, data.ok, dispatch)
        dispatch(
          login({
            uid: data.user_id,
            name: data.user_name,
            role: data.user_role,
            avatar: data.user_avatar,
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
  const notificationActive = useNotification()
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
      .then(({ data }) => {
        notificationActive(data.message, data.ok, dispatch)
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