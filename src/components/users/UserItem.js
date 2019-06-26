import React, { Component } from "react";

class UserItem extends Component {
  render() {
    //   pull the values from the user that passed as prop to UserItem
    const { login, html_url } = this.props.user;
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
  }
}

export default UserItem;
