import React, { Component } from "react";
import "./Avatar.css";

class Avatar extends Component {
  state = {
    image: "https://media.giphy.com/media/xGdvlOVSWaDvi/source.gif",
  };

  render() {
    const { userInfoArray } = this.props;
    return (
      <div className="image-cropper">
        {Object.keys(userInfoArray).length > 1 ? (
          <img
            className="image"
            src={userInfoArray.avatar_url}
            alt="user-avatar"
          />
        ) : (
          <img className="image" src={this.state.image} alt="user-avatar" />
        )}
      </div>
    );
  }
}

export default Avatar;
