import React, { Component } from "react";
import "./Repos.css";

class Repo extends Component {
  render() {
    const { name, owner, default_branch } = this.props;
    const link = `https://github.com/${owner.login}/${name}/blob/${default_branch}/README.md`;
    return (
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          &nbsp; {name} &nbsp;
        </a>
      </div>
    );
  }
}

export default Repo;
