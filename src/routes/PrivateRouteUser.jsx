import React from "react";
import { Navigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'

const PrivateRouteUser = ({ children }) => {
  let isAuth = localStorage.getItem('dqAuthToken');

  const toast = useToast();

  if (isAuth) {
    toast({
      title: `User Please Login`,
      position: "top-right",
      isClosable: true,
      status: "error",
      duration: 4000,
    });
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default PrivateRouteUser;
