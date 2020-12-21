import React, { Component } from "react";
import uniqid from "uniqid";

class Practical extends Component {
  constructor() {
    super();
    this.state = {
      forms: [],
      saved: [],
      jobs: [],
      company: "",
      position: "",
      description: "",
      beginYear: "",
      endYear: "",
      editindex: 0,
    };
  }

  checkInput() {
    const companyInput = document.getElementById("company");
    const positionInput = document.getElementById("position");
    const descriptionInput = document.getElementById("description");
    const beginYearInput = document.getElementById("beginYear");
    const endYearInput = document.getElementById("endYear");
    if (
      companyInput.value.length === 0 ||
      positionInput.value.length === 0 ||
      descriptionInput.value.length === 0 ||
      beginYearInput.value.length === 0 ||
      endYearInput.value.length === 0
    ) {
      return false;
    } else {
      return true;
    }
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    if (this.checkInput()) {
      let obj = {};
      obj.company = this.state.company;
      obj.position = this.state.position;
      obj.description = this.state.description;
      obj.beginYear = this.state.beginYear;
      obj.endYear = this.state.endYear;
      let array = [...this.state.saved, obj];
      this.setState({
        saved: [...this.state.saved, obj],
        company: "",
        position: "",
        description: "",
        beginYear: "",
        endYear: "",
        forms: [],
        jobs: array.map((element) => {
          let index = array.indexOf(element);
          return (
            <div key={uniqid()} className="job">
              <p>
                <u>Company name</u>: {element.company}
              </p>
              <p>
                <u>Position</u>: {element.position}
              </p>
              <p>
                <u>Description</u>: {element.description}
              </p>
              <p>
                <u>Starting year</u>: {element.beginYear}
              </p>
              <p>
                <u>Ending Year</u>: {element.endYear}
              </p>
              <button
                onClick={() =>
                  this.setState({
                    forms: this.editJob(index),
                  })
                }
              >
                Edit
              </button>
              <button
                onClick={() => {
                  this.deleteJob(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        }),
      });
    } else {
      return;
    }
  };

  empty = () => {
    return <p></p>;
  };

  deleteJob = (index) => {
    if (this.state.jobs.length !== 1) {
      this.setState({
        saved: this.state.saved.splice(index, 1),
        jobs: this.state.jobs.splice(index, 1),
      });
    } else {
      this.setState({
        saved: [],
        jobs: this.empty(),
      });
    }
  };

  submitEdit = (e) => {
    e.preventDefault();
    if (this.checkInput()) {
      let obj = {};
      obj.company = this.state.company;
      obj.position = this.state.position;
      obj.description = this.state.description;
      obj.beginYear = this.state.beginYear;
      obj.endYear = this.state.endYear;
      let array = [this.state.saved];
      array.splice(this.state.editindex, 1, obj);
      this.setState({
        saved: array,
        company: "",
        position: "",
        description: "",
        beginYear: "",
        endYear: "",
        forms: [],
        jobs: array.map((element) => {
          let index = array.indexOf(element);
          return (
            <div key={uniqid()} className="job">
              <p>
                <u>Company name</u>: {element.company}
              </p>
              <p>
                <u>Position</u>: {element.position}
              </p>
              <p>
                <u>Description</u>: {element.description}
              </p>
              <p>
                <u>Starting year</u>: {element.beginYear}
              </p>
              <p>
                <u>Ending Year</u>: {element.endYear}
              </p>
              <button
                onClick={() =>
                  this.setState({
                    forms: this.editJob(index),
                  })
                }
              >
                Edit
              </button>
              <button
                onClick={() => {
                  this.deleteJob(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        }),
      });
    } else {
      return;
    }
  };

  editJob = (index) => {
    this.setState({
      editindex: index,
    });
    return (
      <form className="new" key={uniqid()} onSubmit={this.submitEdit}>
        <h3>Add new job</h3>
        <input
          onChange={this.handleChange}
          type="text"
          name="company"
          id="company"
          placeholder="Company Name"
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          name="position"
          id="position"
          placeholder="Position"
        ></input>
        <textarea
          onChange={this.handleChange}
          name="description"
          id="description"
          placeholder="Description of your job"
        ></textarea>
        <input
          onChange={this.handleChange}
          type="number"
          min="1900"
          max="2099"
          name="beginYear"
          id="beginYear"
          placeholder="Beginning Year"
        ></input>
        <input
          onChange={this.handleChange}
          type="number"
          min="1900"
          max="2099"
          name="endYear"
          id="endYear"
          placeholder="Ending Year"
        ></input>
        <button type="submit">Submit</button>
      </form>
    );
  };

  createForm = () => {
    return (
      <form className="new" key={uniqid()} onSubmit={this.submitForm}>
        <h3>Add new job</h3>
        <input
          onChange={this.handleChange}
          type="text"
          name="company"
          id="company"
          placeholder="Company Name"
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          name="position"
          id="position"
          placeholder="Position"
        ></input>
        <textarea
          onChange={this.handleChange}
          name="description"
          id="description"
          placeholder="Description of your job"
        ></textarea>
        <input
          onChange={this.handleChange}
          type="number"
          min="1900"
          max="2099"
          name="beginYear"
          id="beginYear"
          placeholder="Beginning Year"
        ></input>
        <input
          onChange={this.handleChange}
          type="number"
          min="1900"
          max="2099"
          name="endYear"
          id="endYear"
          placeholder="Ending Year"
        ></input>
        <button type="submit">Submit</button>
      </form>
    );
  };

  addForm = () => {
    this.setState({
      forms: [this.createForm()],
    });
  };

  render() {
    return (
      <div id="practical" className="component">
        <h2>Practical information</h2>
        {this.state.jobs}
        {this.state.forms}
        <button id="add" onClick={this.addForm}>
          +
        </button>
      </div>
    );
  }
}

export default Practical;
