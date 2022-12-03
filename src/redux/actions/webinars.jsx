import axios from "axios";
import getConfig from "../../helpers/getconfig";
import { types } from "../types/types";
import { setIsLoading } from "./ui";

export const startCreateWebinar = (
  title,
  description,
  link,
  image,
  featured
) => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("web_tittle", title);
    formData.append("web_description", description);
    formData.append("web_link", link);
    formData.append("web_image", image);
    formData.append("web_featured", featured ? 1 : 0);
    dispatch(setIsLoading(true));
    axios
      .post(
        "https://backend.opina-peru.com/WebinarsController/insert_webinars",
        formData,
        getConfig()
      )
      .then((res) => {
        console.log(res.data);
        dispatch(startGetWebinar());
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startUpdateWebinar = (
  id,
  web_tittle,
  web_description,
  web_link,
  web_featured
) => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("web_tittle", web_tittle);
    formData.append("web_description", web_description);
    formData.append("web_link", web_link);
    formData.append("web_featured", web_featured ? 1 : 0);
    dispatch(setIsLoading(true));
    axios
      .post(
        `https://backend.opina-peru.com/WebinarsController/update_webinars/${id}`,
        formData,
        getConfig()
      )
      .then((res) => {
        console.log(res.data);
        dispatch(startGetWebinar());
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startDeleteWebinar = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .delete(
        `https://backend.opina-peru.com/WebinarsController/delete_webinars/${id}`,
        getConfig()
      )
      .then((res) => {
        console.log(res.data);
        dispatch(startGetWebinar());
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startGetWebinar = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        "https://backend.opina-peru.com/WebinarsController/get_webinars"
      )
      .then((res) => dispatch(getWebinar(res.data)))
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const webinarSelected = (webSelected) => ({
  type: types.webinarSelected,
  payload: webSelected,
});

export const getWebinar = (webinars) => ({
  type: types.webinarGet,
  payload: webinars,
});
