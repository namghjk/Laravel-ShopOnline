import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const RequireRoute = ({ children }: { children: JSX.Element }) => {
  const [returnElement, setReturnElement] = useState(children);

  useEffect(() => {
    const checkAuth = async () => {
      const auth = localStorage.getItem("userToken");
      if (!auth) {
        setReturnElement(<Navigate to="/Auth/Login" />);
      }
    };

    checkAuth();
  }, []);

  return returnElement;
};

export default RequireRoute;
