import React, { Component } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Router, Route, Link} from 'react-router-dom';
import {createBrowserHistory} from 'history';
const history = createBrowserHistory();


function Result(){
  return(
    <div>
      <h1>Form submitted</h1>
    </div>
  );
}


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      defaultDate : new Date(),
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleDateChange(date) {
     this.setState({
       defaultDate : date
     });
    }
  
  handleFormChange(event) {
    this.setState({
      [event.target.id] : event.target.value
    });
  }

  handleClick(event){
    event.preventDefault();
    history.push("/DisplayResult");
  }


  render() {

    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div>
              <h1>Slambook</h1>
            </div>
          </div>
        </div>
        <form className="wholeform" onChange = {this.handleFormChange}>
        <div className="row">
          <div className="col">
            
              <div className="form-group row">
                <label htmlFor="name" className="form-label col-form-label col-sm-2">Name:</label>
                <div className="col-sm-10">
                  <input placeholder="Enter your name" name="name" type="name" id="name" className="form-control form-control-sm"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="dob" className="form-label col-form-label col-sm-2">DOB:</label>
                <div className="col-sm-10">
                  <div> <DatePicker id="dob" selected={this.state.defaultDate} onChange={this.handleDateChange}></DatePicker> </div>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="contact" className="form-label col-form-label col-sm-2">Contact:</label>
                <div className="col-sm-10">
                  <input placeholder="Enter your Contact details" type="contact" id="contact" className="form-control form-control-sm"/>
                </div>
                <small className="contact-muted-text form-text">Your contact is confidential! Cheers!</small>
              </div>
              <div className="form-group row">
                <label htmlFor="gender" className="form-label col-form-label col-sm-2">Gender:</label>
                <div className="col-sm-10">
                  <select id="gender">
                    <option value ="male">Male</option>
                    <option value ="female">Female</option>
                    <option value ="transgender">Transgender</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="zodiac" className="form-label col-form-label col-sm-2">Zodiac:</label>
                <div className="col-sm-10">
                  <input placeholder="Enter your Zodiac" type="zodiac" id="zodiac" className="form-control form-control-sm"/>
                </div>
              </div>
            
          </div>
        <div className="col">
            
            <div className="form-group row">
              <label htmlFor="crush" className="form-label col-form-label col-sm-2">1st crush:</label>
              <div className="col-sm-10">
                <input type="crush" id="crush" className="form-control form-control-sm"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="sport" className="form-label col-form-label col-sm-2">Fav sport:</label>
              <div className="col-sm-10">
                <input placeholder="Cricket, football etc." type="sport" id="sport" className="form-control form-control-sm"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="hobby" className="form-label col-form-label col-sm-2">Hobby:</label>
              <div className="col-sm-10">
                <input placeholder="video games, coin collection etc." type="hobby" id="hobby" className="form-control form-control-sm"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="nickname" className="form-label col-form-label col-sm-2">Nickname:</label>
              <div className="col-sm-10">
                <input placeholder="what friends call you!" type="nickname" id="nickname" className="form-control form-control-sm"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="about-me" className="form-label col-form-label col-sm-2">About me:</label>
              <div className="col-sm-10">
                <textarea rows="5" placeholder="Write whatever comes to your mind!" type="about-me" id="about-me" className="form-control form-control-sm"></textarea>
              </div>
            </div>
          
        </div>
      </div>
      </form>
      
      <div className="row">
      <button type="submit" className="btn btn-primary btn-lg" onClick={this.handleClick}>Submit</button>
      </div>
    </div>     
    );
  }
}

export {Result};

export default App;
