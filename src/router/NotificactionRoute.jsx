import React from 'react'
import { Outlet } from 'react-router-dom'
import PopUps from '../components/shared/notificactions/PopUps'

const NotificactionRoute = () => {
  return (
    <>
      <PopUps />
      <Outlet />
    </>
  )
}

export default NotificactionRoute