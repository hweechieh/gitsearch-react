import React, { Component } from "react";
import "./Form.css";

class Gif extends Component {
  render() {
    return (
      <img
        className="search-gif"
        src="https://media.giphy.com/media/ZBb9dcIALtyEfndLPG/200w_d.gif"
        width="5%"
        height="5%"
        alt="search-gif"
      />
    );
  }
}

class Form extends Component {
  state = {
    load: false,
    username: "",
  };

  componentDidMount() {
    this.setState({ load: true });
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let firstAPI = fetch(`https://api.github.com/users/${this.state.username}`);
    let secondAPI = fetch(
      `https://api.github.com/users/${this.state.username}/repos`
    );

    Promise.all([firstAPI, secondAPI])
      .then((res) => Promise.all(res.map((data) => data.json())))
      .then((finalData) => {
        let firstAPIresp = finalData[0];
        let secondAPIresp = finalData[1];
        this.setState({ username: "" });
        this.props.onSubmit(firstAPIresp, secondAPIresp);
      });
  };

  render() {
    const { username } = this.state;
    return (
      <div>
        <div className="gif-container">
          <Gif />
          <Gif />
          <Gif />
        </div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            value={username}
            onChange={(event) =>
              this.setState({ username: event.target.value })
            }
            placeholder="Enter Username"
          ></input>
          <button className="search-btn">></button>
        </form>
      </div>
    );
  }
}

export default Form;
