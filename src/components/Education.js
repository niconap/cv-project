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
    let obj = {};
    obj.school = this.state.school;
    obj.title = this.state.title;
    obj.beginDate = this.state.beginDate;
    obj.endDate = this.state.endDate;
    let array = [this.state.saved];
    array.splice(this.state.editindex, 1, obj);
    this.setState({
      saved: array,
      school: "",
      title: "",
      beginDate: "",
      endDate: "",
      forms: [],
      educations: array.map((element) => {
        let index = array.indexOf(element);
        return (
          <div key={uniqid()} className="edu">
            <p>School name: {element.school}</p>
            <p>Study: {element.title}</p>
            <p>Begin date: {element.beginDate}</p>
            <p>Ending date: {element.endDate}</p>
            <button
              onClick={() =>
                this.setState({
                  forms: this.editEducation(index),
                })
              }
            >
              Edit
            </button>
            <button>Delete</button>
          </div>
        );
      }),
    });
  };

  editEducation = (index, obj) => {
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
          placeholder="School Name"
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          name="title"
          placeholder="Study"
        ></input>
        <input
          onChange={this.handleChange}
          type="date"
          name="beginDate"
          placeholder="Beginning Date"
        ></input>
        <input
          onChange={this.handleChange}
          type="date"
          name="endDate"
          placeholder="Ending Date"
        ></input>
        <button type="submit">Submit</button>
      </form>
    );
  };

  submitForm = (e) => {
    e.preventDefault();
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
        let index = array.indexOf(element);
        return (
          <div key={uniqid()} className="edu">
            <p>School name: {element.school}</p>
            <p>Study: {element.title}</p>
            <p>Begin date: {element.beginDate}</p>
            <p>Ending date: {element.endDate}</p>
            <button
              onClick={() =>
                this.setState({
                  forms: this.editEducation(index, element),
                })
              }
            >
              Edit
            </button>
            <button>Delete</button>
          </div>
        );
      }),
    });
  };

  createForm = () => {
    return (
      <form className="new" key={uniqid()} onSubmit={this.submitForm}>
        <input
          onChange={this.handleChange}
          type="text"
          name="school"
          placeholder="School Name"
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          name="title"
          placeholder="Study"
        ></input>
        <input
          onChange={this.handleChange}
          type="date"
          name="beginDate"
          placeholder="Beginning Date"
        ></input>
        <input
          onChange={this.handleChange}
          type="date"
          name="endDate"
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
          Add
        </button>
      </div>
    );
  }
}

export default Education;
