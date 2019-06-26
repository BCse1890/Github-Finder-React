import React, { Component } from "react";
import UserItem from "./UserItem";

export class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "mojombo",
        html_url: "https://github.com/mojombo"
      },
      {
        id: "2",
        login: "defunkt",
        html_url: "https://github.com/defunkt"
      },
      {
        id: "3",
        login: "pjhyett",
        html_url: "https://github.com/pjhyett"
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          // each child must have unique key component so use key in div
          // pass in user from mapping as prop into UserItem
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1 rem"
};
export default Users;
