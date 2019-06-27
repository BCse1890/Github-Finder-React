import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // load user data from github repo and use promise to send
  // message to console
  // async componentDidMount() {
  //   // set loading to true while data loading from github
  //   this.setState({ loading: true });
  //   const res = await axios.get(`https://api.github.com/users?client_id=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   // set users to data loaded from github and set loading
  //   // to false when it has loaded
  //   this.setState({
  //     users: res.data,
  //     loading: false
  //   });
  //   console.log(res.data);
  // }

  // Search Github users
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // Clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    // can destructure as this line to pull out users and loading
    // and we can remove this.state from code below - also doing same
    // with props if we wish to
    // const { users, loading } = this.state
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
