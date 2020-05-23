import React, { Component } from "react";
import "./User.css";

class User extends Component {
  state = {
    valid: false,
  };

  render() {
    const { login, public_repos, updated_at } = this.props.userInfoArray;
    const firstLetter = login.charAt(0).toUpperCase();
    const otherLetters = login.slice(1);
    const newLogin = firstLetter + otherLetters;

    const tIndex = updated_at.indexOf("T");
    const newDate = updated_at.slice(0, tIndex);
    const removeDash = newDate.replace(/-/g, " ");
    const reversedTimeArr = removeDash.split(" ");
    const actualDateArr = reversedTimeArr.reverse();
    const date = actualDateArr.join(" · ");

    return (
      <div className="user-container">
        <div className="login-name">{newLogin}</div>
        <div className="repo">{public_repos} public repositories</div>
        <div className="updated">Updated on {date}</div>
      </div>
    );
  }
}

export default User;
