import React, { Component } from 'react';
import {Row, Col, Container, Form, Dropdown, Button} from 'react-bootstrap';
import './App.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


class App extends Component {
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div>
              <h1>Slambook</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form className="wholeform">
              <div className="form-group row">
                <label htmlFor="name" className="form-label col-form-label col-sm-2">Name:</label>
                <div className="col-sm-10">
                  <input placeholder="Enter your name" type="name" id="name" className="form-control form-control-sm"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="dob" className="form-label col-form-label col-sm-2">DOB:</label>
                <div className="col-sm-10">
                  <div className="react-datepicker-wrapper">
                    <div className="react-datepicker__input-container">
                      <input type="text" className="" />
                    </div>
                  </div>
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
                  <div className="dropdown">
                    <button aria-haspopup="true" aria-expanded="false" id="gender-dropdown" type="button" className="dropdown-toggle btn btn-success">Select gender</button>
                    <div aria-labelledby="gender-dropdown" className="dropdown-menu" x-placement="bottom-start" style={{"position": "absolute", "willchange": "transform", "top":"0px", "left": "0px", "transform": "translate3d(0px, 38px, 0px)"}}>
                      <a href="#/Male" className="dropdown-item">Male</a>
                      <a href="#/Female" className="dropdown-item">Female</a>
                      <a href="#/Transgender" className="dropdown-item">Transgender</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="zodiac" className="form-label col-form-label col-sm-2">Zodiac:</label>
                <div className="col-sm-10">
                  <input placeholder="Enter your Zodiac" type="zodiac" id="zodiac" className="form-control form-control-sm"/>
                </div>
              </div>
            </form>
          </div>
          <div className="col">
            <form className="wholeform">
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
          </form>
        </div>
      </div>
      <div className="row">
        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
      </div>
    </div>     
    );
  }
}

export default App;

