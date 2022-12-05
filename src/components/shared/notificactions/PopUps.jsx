import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsNotificationClose } from '../../../redux/actions/ui'
import './popUp.css'

const PopUps = () => {

  const {isNotificationClose, isNotificationColor, isNotificationMessage} = useSelector(state => state.ui.isNotification)

  return (
    <div className={`popup ${isNotificationClose && 'popup--close'} ${isNotificationColor && 'popup--success'}`}>
      <p className='pupup__message'>{isNotificationMessage}</p>
    </div>
  )
}

export default PopUps