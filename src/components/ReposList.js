import React, { Component } from "react";
import Repo from "./Repos";
import "./Repos.css";

class RepoList extends Component {
  render() {
    const { userRepoArray } = this.props;
    var index = 0;
    return (
      <div className="repos-container">
        {userRepoArray.map((repo) => (
          <Repo key={index++} {...repo} />
        ))}
      </div>
    );
  }
}

export default RepoList;
