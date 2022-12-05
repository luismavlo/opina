import axios from "axios";
import getConfig from "../../helpers/getconfig";
import useNotification from "../../hooks/useNotification";
import { types } from "../types/types";
import { setIsLoading } from "./ui";

export const startCreateNews = (title, description, image, pdf, featured) => {
  const formData = new FormData();
  formData.append("new_tittle", title);
  formData.append("new_description", description);
  formData.append("new_link", pdf);
  formData.append("new_image", image);
  formData.append("new_featured", featured ? 1 : 0);
  return (dispatch) => {
    const notificationActive = useNotification()
    dispatch(setIsLoading(true));
    axios
      .post(
        "https://backend.opina-peru.com/NewController/insert_news",
        formData,
        getConfig()
      )
      .then(({data}) => {
        dispatch(startGetNews());
        if(data.ok){
          notificationActive(data.message, data.ok, dispatch)
        } else {
          notificationActive(data, data.ok, dispatch)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startUpdateNews = (
  id,
  new_tittle,
  new_description,
  new_featured
) => {
  return (dispatch) => {
    const notificationActive = useNotification()
    const formData = new FormData();
    formData.append("new_tittle", new_tittle);
    formData.append("new_description", new_description);
    formData.append("new_featured", new_featured ? 1 : 0);
    dispatch(setIsLoading(true));
    axios
      .post(
        `https://backend.opina-peru.com/NewController/update_new/${id}`,
        formData,
        getConfig()
      )
      .then(({data}) => {
        dispatch(startGetNews())
        console.log(data)
        if(data.ok){
          notificationActive(data.message, data.ok, dispatch)
        } else {
          notificationActive(data, data.ok, dispatch)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startDeleteNews = (id) => {
  const notificationActive = useNotification()
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .delete(
        `https://backend.opina-peru.com/NewController/delete_new/${id}`,
        getConfig()
      )
      .then(() => {
        dispatch(startGetNews())
        notificationActive("Noticia eliminada exitosamente", true, dispatch)
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startGetNews = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get("https://backend.opina-peru.com/NewController/get_new")
      .then((res) => dispatch(getNews(res.data)))
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const startNewsSelected = (newsSelected) => ({
  type: types.newsSelected,
  payload: newsSelected,
});

export const getNews = (news) => ({
  type: types.newsGet,
  payload: news,
});
