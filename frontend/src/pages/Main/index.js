import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";
import Logo from "../../assets/logo.svg";

class Main extends Component {
  state = {
    newBox: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await api.post("boxes", {
      title: this.state.newBox,
    });

    this.props.history.push(`/box/${response.data._id}`);
  };

  handleInputChange = (e) => {
    this.setState({ newBox: e.target.value });
  };

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <img src={Logo} alt="Rocketseat Logo" />

          <input
            type="text"
            placeholder="Criar um box"
            value={this.state.newBox}
            onChange={this.handleInputChange}
          />
          <button type="submit">Criar</button>
        </form>
      </div>
    );
  }
}

export default Main;
