import axios from "axios";
import getConfig from "../../helpers/getconfig";
import useNotification from "../../hooks/useNotification";
import { types } from "../types/types";
import { setIsLoading } from "./ui";

export const startCreateEmployees = (
  name,
  email,
  position,
  description,
  avatar
) => {
  const formData = new FormData();
  formData.append("team_name", name);
  formData.append("team_email", email);
  formData.append("team_description", description);
  formData.append("team_cargo", position);
  formData.append("team_avatar", avatar);
  return (dispatch) => {
    const notificationActive = useNotification()
    dispatch(setIsLoading(true));
    axios
      .post(
        "https://backend.opina-peru.com/WorkTeamController/insert_work_team",
        formData,
        getConfig()
      )
      .then(({data}) => {
        dispatch(startGetEmployees())
        notificationActive(data.message, data.ok, dispatch)
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startUpdateEmployees = (
  id,
  team_name,
  team_email,
  team_cargo,
  team_description
) => {
  return (dispatch) => {
    const notificationActive = useNotification()
    const formData = new FormData();
    formData.append("team_name", team_name);
    formData.append("team_email", team_email);
    formData.append("team_description", team_description);
    formData.append("team_cargo", team_cargo);
    dispatch(setIsLoading(true));
    axios
      .post(
        `https://backend.opina-peru.com/WorkTeamController/update_work_team/${id}`,
        formData,
        getConfig()
      )
      .then(({data}) => {
        dispatch(startGetEmployees());
        notificationActive(data.message, data.ok, dispatch)
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startDeleteEmployees = (id) => {
  const notificationActive = useNotification()
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .delete(
        `https://backend.opina-peru.com/WorkTeamController/delete_work_team/${id}`,
        getConfig()
      )
      .then((res) => {
        dispatch(startGetEmployees());
        notificationActive("Integrante eliminado correctamente.", true, dispatch)
      })
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startGetEmployees = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        "https://backend.opina-peru.com/WorkTeamController/get_work_team"
      )
      .then((res) => dispatch(getEmployees(res.data)))
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

const getEmployees = (employees) => ({
  type: types.teamGet,
  payload: employees,
});
