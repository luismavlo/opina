import axios from "axios";
import getConfig from "../../helpers/getconfig";
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
    dispatch(setIsLoading(true));
    axios
      .post(
        "https://backend.opina-peru.com/WorkTeamController/insert_work_team",
        formData,
        getConfig()
      )
      .then((res) => dispatch(startGetEmployees()))
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
      .then((res) => {
        dispatch(startGetEmployees());
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startDeleteEmployees = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .delete(
        `https://backend.opina-peru.com/WorkTeamController/delete_work_team/${id}`,
        getConfig()
      )
      .then((res) => {
        dispatch(startGetEmployees());
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
