import React, { Component } from "react";

class General extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      number: "",
      summary: "",
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
            <textarea
              name="summary"
              onChange={this.handleChange}
              value={this.state.summary}
              id="summary"
              placeholder="About yourself"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    } else {
      return (
        <div id="general" className="component">
          <h2>General information</h2>
          <p>
            <u>Name</u>: {this.state.name}
          </p>
          <p>
            <u>E-Mail</u>: {this.state.email}
          </p>
          <p>
            <u>Phone number</u>: {this.state.number}
          </p>
          <p id="summary">{this.state.summary}</p>
          <button onClick={this.editButton} id="edit">
            Edit
          </button>
        </div>
      );
    }
  }
}

export default General;
