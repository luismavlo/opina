import { setIsNotificationClose } from "../redux/actions/ui"


const useNotification = () => {

  const notificationActive = (message, hasError, dispatch) => {
    dispatch(setIsNotificationClose({
      isNotificationClose: false,
      isNotificationMessage: message,
      isNotificationColor: hasError,
    }))
    setTimeout(() => {
      dispatch(setIsNotificationClose({
        isNotificationClose: true,
        isNotificationMessage: "",
        isNotificationColor: hasError
      }))
    }, 3000)
  }

  return notificationActive
}

export default useNotification