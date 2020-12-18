import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      school: [],
      title: [],
      beginDate: [],
      endDate: [],
      educations: [],
    };
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(e);
  };

  createForm = () => {
    return (
      <form id="new" key={uniqid()} onSubmit={this.submitForm}>
        <input type="text" name="schoolname" placeholder="School Name"></input>
        <input type="text" name="study" placeholder="Study"></input>
        <input
          type="text"
          name="begindate"
          placeholder="Beginning Date"
        ></input>
        <input type="text" name="enddate" placeholder="Ending Date"></input>
        <button type="submit">Submit</button>
      </form>
    );
  };

  addForm = () => {
    this.setState({
      educations: [...this.state.educations, this.createForm()],
    });
  };

  render() {
    return (
      <div id="education" className="component">
        <h2>Education experience</h2>
        <button id="add" onClick={this.addForm}>
          Add
        </button>
        {this.state.educations}
      </div>
    );
  }
}

export default Education;
