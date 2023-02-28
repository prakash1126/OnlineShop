import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserChatsComponent from "./user/UserChatsComponent";

const ProtectedRoute = ({ admin }) => {
  if (admin) {
    let adminAuth = true;
    if (adminAuth) return adminAuth ? <Outlet /> : <Navigate to="/login" />;
  } else {
    let userAuth = true;
    if (userAuth) {
      return userAuth ? (
        <>
          <UserChatsComponent />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      );
    }
  }
};
export default ProtectedRoute;
