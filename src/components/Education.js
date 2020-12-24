import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      school: "",
      title: "",
      beginDate: "",
      endDate: "",
      saved: [],
      educations: [],
      forms: [],
      editindex: 0,
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

  submitEdit = (e) => {
    e.preventDefault();
    if (this.checkInput()) {
      let obj = {};
      obj.school = this.state.school;
      obj.title = this.state.title;
      obj.beginDate = this.state.beginDate;
      obj.endDate = this.state.endDate;
      let array = this.state.saved;
      array.splice(this.state.editindex, 1, obj);
      this.setState({
        saved: array,
        school: "",
        title: "",
        beginDate: "",
        endDate: "",
        forms: [],
        educations: array.map((element) => {
          return (
            <div key={uniqid()} className="edu">
              <p>
                <u>School name</u>: {element.school}
              </p>
              <p>
                <u>Study</u>: {element.title}
              </p>
              <p>
                <u>Begin date</u>: {element.beginDate}
              </p>
              <p>
                <u>Ending date</u>: {element.endDate}
              </p>
              <button
                onClick={() =>
                  this.setState({
                    forms: this.editEducation(element),
                  })
                }
              >
                Edit
              </button>
              <button
                onClick={() => {
                  this.deleteEducation(element);
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

  deleteEducation = (element) => {
    let index = this.state.educations.indexOf(element);
    if (this.state.educations.length !== 1) {
      this.setState({
        saved: this.state.saved.splice(index, 1),
        educations: this.state.educations.splice(index, 1),
      });
    } else {
      this.setState({
        saved: [],
        educations: this.empty(),
      });
    }
  };

  editEducation = (element) => {
    let index = this.state.educations.indexOf(element);
    this.setState({
      editindex: index,
    });
    return (
      <form className="new" key={uniqid()} onSubmit={this.submitEdit}>
        <h3>Edit Education</h3>
        <input
          onChange={this.handleChange}
          type="text"
          name="school"
          id="school"
          placeholder="School Name"
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          name="title"
          id="title"
          placeholder="Study"
        ></input>
        <input
          onChange={this.handleChange}
          type="date"
          name="beginDate"
          id="beginDate"
          placeholder="Beginning Date"
        ></input>
        <input
          onChange={this.handleChange}
          type="date"
          name="endDate"
          id="endDate"
          placeholder="Ending Date"
        ></input>
        <button type="submit">Submit</button>
      </form>
    );
  };

  submitForm = (e) => {
    e.preventDefault();
    if (this.checkInput()) {
      let obj = {};
      obj.school = this.state.school;
      obj.title = this.state.title;
      obj.beginDate = this.state.beginDate;
      obj.endDate = this.state.endDate;
      let array = [...this.state.saved, obj];
      this.setState({
        saved: [...this.state.saved, obj],
        school: "",
        title: "",
        beginDate: "",
        endDate: "",
        forms: [],
        educations: array.map((element) => {
          return (
            <div key={uniqid()} className="edu">
              <p>
                <u>School name</u>: {element.school}
              </p>
              <p>
                <u>Study</u>: {element.title}
              </p>
              <p>
                <u>Begin date</u>: {element.beginDate}
              </p>
              <p>
                <u>Ending date</u>: {element.endDate}
              </p>
              <button
                onClick={() =>
                  this.setState({
                    forms: this.editEducation(element),
                  })
                }
              >
                Edit
              </button>
              <button
                onClick={() => {
                  this.deleteEducation(element);
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

  checkInput() {
    const schoolInput = document.getElementById("school");
    const titleInput = document.getElementById("title");
    const beginDateInput = document.getElementById("beginDate");
    const endDateInput = document.getElementById("endDate");
    if (
      schoolInput.value.length === 0 ||
      titleInput.value.length === 0 ||
      beginDateInput.value.length === 0 ||
      endDateInput.value.length === 0
    ) {
      return false;
    } else {
      return true;
    }
  }

  createForm = () => {
    return (
      <form className="new" key={uniqid()} onSubmit={this.submitForm}>
        <h3>Add new education</h3>
        <input
          onChange={this.handleChange}
          type="text"
          name="school"
          id="school"
          placeholder="School Name"
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          name="title"
          id="title"
          placeholder="Study"
        ></input>
        <input
          onChange={this.handleChange}
          type="date"
          name="beginDate"
          id="beginDate"
          placeholder="Beginning Date"
        ></input>
        <input
          onChange={this.handleChange}
          type="date"
          name="endDate"
          id="endDate"
          placeholder="Ending Date"
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
      <div id="education" className="component">
        <h2>Education experience</h2>
        {this.state.educations}
        {this.state.forms}
        <button id="add" onClick={this.addForm}>
          +
        </button>
      </div>
    );
  }
}

export default Education;
