import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
const Profile = ({ login }) => {
  const history = useHistory();

  useEffect(() => {
    if (!login) {
      // pushes path to url
      history.push("/");
    }
  }, [login, history]);
  return <div>Profile Page</div>;
};

export default Profile;