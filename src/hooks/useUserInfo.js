import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import * as config from "../Config.json";

import { useAuth } from "../context/user";

export default (navigation) => {
  const [locationsCount, setLocationsCount] = useState();
  const [users, setUsers] = useState();
  const { userCredentials } = useAuth(navigation);

  const getLocations = () => {
    axios
      .get(`${config.URL}location`, {
        headers: { token: userCredentials?.token },
      })
      .then(function (response) {
        setLocationsCount(response.data.locations.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteUser = (id) => {
    axios
      .delete(`${config.URL}user/${id}`, {
        headers: { token: userCredentials?.token },
      })
      .then(function () {})
      .catch(function (error) {
        console.log(error);
      });

    getUsers();
  };

  const getUsers = () => {
    axios
      .get(`${config.URL}user`, {
        headers: { token: userCredentials?.token },
      })
      .then(function (response) {
        setUsers(response.data.users);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getLocations();
    getUsers();
  }, [navigation]);

  return { locationsCount, users, setLocationsCount, deleteUser };
};
