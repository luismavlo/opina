import axios from "axios";
import getConfig from "../../helpers/getconfig";
import { types } from "../types/types";
import { setIsLoading } from "./ui";

export const startGetClipping = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        "https://backend.opina-peru.com/ClippingController/get_clipping"
      )
      .then((res) => {
        dispatch(getClipping(res.data));
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startCreateClipping = (name, link) => {
  const formData = new FormData();
  formData.append("clipping_name", name);
  formData.append("clipping_link", link);
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .post(
        "https://backend.opina-peru.com/ClippingController/insert_clipping",
        formData,
        getConfig()
      )
      .then((res) => {
        dispatch(startGetClipping());
        console.log(res);
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startUpdateClipping = (id, name, link) => {
  const formData = new FormData();
  formData.append("clipping_name", name);
  formData.append("clipping_link", link);
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .post(
        `https://backend.opina-peru.com/ClippingController/update_clipping/${id}`,
        formData,
        getConfig()
      )
      .then((res) => {
        console.log(res.data);
        dispatch(startGetClipping());
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startDeleteClipping = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .delete(
        `https://backend.opina-peru.com/ClippingController/delete_clipping/${id}`,
        getConfig()
      )
      .then(() => dispatch(startGetClipping()))
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

const getClipping = (clipping) => ({
  type: types.clippingGet,
  payload: clipping,
});
