import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, html_url } }) => {
  //   pull the values from the user that passed as prop to UserItem
  return (
    <div className="card text-center">
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};
export default UserItem;
