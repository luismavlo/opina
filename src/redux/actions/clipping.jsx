import axios from "axios";
import getConfig from "../../helpers/getconfig";
import useNotification from "../../hooks/useNotification";
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
  const notificationActive = useNotification()
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
      .then(({data}) => {
        dispatch(startGetClipping());
        if(data.ok) {
          notificationActive(data.message, data.ok, dispatch)
        } else {
          if(!data.message) {
            notificationActive(data, false, dispatch)
          }
        }
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startUpdateClipping = (id, name, link) => {
  const notificationActive = useNotification()
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
      .then(({data}) => {
        dispatch(startGetClipping());
        if(data.ok) {
          notificationActive(data.message, data.ok, dispatch)
        } else {
          if(!data.message) {
            notificationActive(data, false, dispatch)
          }
        }
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startDeleteClipping = (id) => {

  const notificationActive = useNotification()

  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .delete(
        `https://backend.opina-peru.com/ClippingController/delete_clipping/${id}`,
        getConfig()
      )
      .then(({data}) => {
        dispatch(startGetClipping())
        notificationActive(data.message, !data.ok, dispatch)
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

const getClipping = (clipping) => ({
  type: types.clippingGet,
  payload: clipping,
});
