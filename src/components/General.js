import React, { Component } from "react";

class General extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      number: "",
      submit: 0,
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  checkInput() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const numberInput = document.getElementById("number");
    if (
      nameInput.value.length === 0 ||
      emailInput.value.length === 0 ||
      numberInput.value.length === 0 ||
      isNaN(numberInput.value) === true
    ) {
      return false;
    } else {
      return true;
    }
  }

  submitData = (e) => {
    e.preventDefault();
    if (this.checkInput()) {
      this.setState({ submit: 1 });
    }
  };

  editButton = () => {
    this.setState({ submit: 0 });
  };

  render() {
    if (!this.state.submit) {
      return (
        <div id="general" className="component">
          <h2>General information</h2>
          <form onSubmit={this.submitData}>
            <input
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              type="text"
              id="name"
              placeholder="Name"
            ></input>
            <input
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              type="email"
              id="email"
              placeholder="E-Mail"
            ></input>
            <input
              name="number"
              onChange={this.handleChange}
              value={this.state.number}
              type="tel"
              id="number"
              placeholder="Phone Number"
            ></input>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    } else {
      return (
        <div id="general" className="component">
          <h2>General information</h2>
          <p>Name: {this.state.name}</p>
          <p>E-Mail: {this.state.email}</p>
          <p>Phone number: {this.state.number}</p>
          <button onClick={this.editButton} id="edit">
            Edit
          </button>
        </div>
      );
    }
  }
}

export default General;
