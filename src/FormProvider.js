import React, { createContext, useState, useContext } from "react";

const Form = createContext();

const FormProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (password) => {
    if (password === "password123") {
      setIsLoggedIn(true);
      return true;
    } else {
      setIsLoggedIn(false);
      return false;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const value = {
    isLoggedIn,
    login,
    logout,
  };

  return <Form.Provider value={value}>{children}</Form.Provider>;
};

const useLog = () => {
  const valid = useContext(Form);
  return valid;
};

export { FormProvider, useLog };
