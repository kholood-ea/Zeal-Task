import React, { Component, useState } from "react";
import axios from "axios";
import * as config from "../Config.json";
export default (navigation) => {
  const [userCredentials, setuserCredentials] = useState({
    name: null,
    email: "",
    password: "",
    token: null,
  });

  return {
    userCredentials,
    setuserCredentials,
  };
};
