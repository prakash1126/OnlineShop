import React from 'react'
import { Outlet } from 'react-router-dom'
import UserChatsComponent from './UserChatsComponent'

const RouteWithChatComponent = () => {
  return (
    <>
     <UserChatsComponent/><Outlet/>
    </>
  )
   
}

export default RouteWithChatComponent