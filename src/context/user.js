import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import * as config from "../Config.json";
import * as hooks from "../hooks";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const { userCredentials, setuserCredentials } = hooks.useUserCredentials();
  const setUserName = (name) => {
    setuserCredentials({ ...userCredentials, name: name });
  };
  const setUserEmail = (email) => {
    setuserCredentials({ ...userCredentials, email: email });
  };
  const setUserPassword = (password) => {
    setuserCredentials({ ...userCredentials, password: password });
  };
  const register = () => {
    return axios
      .post(`${config.URL}register`, userCredentials)
      .then(function async(response) {
        setuserCredentials({ ...userCredentials, token: response.data.token });
        return true;
      })
      .catch(function (error) {
        return false;
      });
  };
  const login = () => {
    return axios
      .post(`${config.URL}login`, userCredentials)
      .then(function async(response) {
        setuserCredentials({ ...userCredentials, token: response.data.token });
        return true;
      })
      .catch(function (error) {
        console.log(error);
        return false;
      });
  };
  useEffect(() => {}, []);
  return (
    <Auth.Provider
      value={{
        register,
        login,
        setUserEmail,
        setUserPassword,
        userCredentials,
        setUserName,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export const useAuth = () => useContext(Auth);
