import axios from "axios";
import getConfig from "../../helpers/getconfig";
import useNotification from "../../hooks/useNotification";
import { types } from "../types/types";
import { setIsLoading } from "./ui";

export const startUpdateUser = (
  user_name,
  user_email,
  user_password,
  user_description,
  uid
) => {
  return (dispatch) => {
    const notificationActive = useNotification()
    const formData = new FormData();
    formData.append("user_name", user_name);
    formData.append("user_email", user_email);
    formData.append("user_password", user_password);
    formData.append("user_description", user_description);
    dispatch(setIsLoading(true));
    axios
      .post(
        `https://backend.opina-peru.com/UserController/update_user/${uid}`,
        formData
        ,
        getConfig()
      )
      .then(({data}) => {
        dispatch(startGetUsers());
        if(data.ok){
          notificationActive(data.message, data.ok, dispatch)
        } else {
          notificationActive(data, data.ok, dispatch)
        }
      })
      .catch((error) => console.error(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const deleteUser = (uid) => {
  return (dispatch) => {
    const notificationActive = useNotification()
    dispatch(setIsLoading(true));
    axios
      .delete(
        `https://backend.opina-peru.com/UserController/inactive_user/${uid}`,
        getConfig()
      )
      .then(({data}) => {
        dispatch(startGetUsers());
        notificationActive('Usuario eliminado correctamente', true, dispatch)
      })
      .catch((error) => console.error(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startGetUsers = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        "https://backend.opina-peru.com/UserController/get_user",
        getConfig()
      )
      .then((resp) => {
        dispatch(getUser(resp.data));
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

const getUser = (users) => ({
  type: types.userGet,
  payload: users,
});
