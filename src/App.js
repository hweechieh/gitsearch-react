import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import User from "./components/User";
import RepoList from "./components/ReposList";
import Avatar from "./components/Avatar";

class App extends Component {
  state = {
    userInfoArray: [],
    userRepoArray: [],
  };

  addUserDetails = (firstAPIresp, secondAPIresp) => {
    this.setState({
      userInfoArray: firstAPIresp,
      userRepoArray: secondAPIresp,
    });
  };

  render() {
    const { userInfoArray, userRepoArray } = this.state;
    return (
      <div>
        <div className="title">
          <h3>function searchUser() =</h3>
        </div>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        ></link>
        <Form onSubmit={this.addUserDetails} />
        <Avatar userInfoArray={userInfoArray} />
        {Object.keys(userInfoArray).length > 1 ? (
          <User userInfoArray={userInfoArray} />
        ) : (
          ""
        )}
        <RepoList userRepoArray={userRepoArray} />
      </div>
    );
  }
}

export default App;
