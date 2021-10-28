import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import QualitiesList from "./qualitiesList";
import API from "../API";
import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
  const history = useHistory();
  const [user, setUser] = useState();
  useEffect(() => {
    API.users.getById(userId).then((data) => setUser(data));
  }, []);
  const handleAllUsers = () => {
    history.push("/users");
  };
  if (user) {
    return (
      <>
        <h3>{user.name}</h3>
        <h3>Profession: {user.profession.name}</h3>
        <QualitiesList qualities={user.qualities} />
        <p>Completed meetings: {user.completedMeetings}</p>
        <h3>Rate: {user.rate}</h3>

        <button
          onClick={() => {
            handleAllUsers();
          }}
        >
          Все пользователи
        </button>
      </>
    );
  }
  return "Loading...";
};

UserPage.propTypes = {
  userId: PropTypes.string,
};

export default UserPage;