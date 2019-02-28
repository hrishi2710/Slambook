import React, { Component } from 'react';
import {Row, Col, Container, Form, Dropdown, Button} from 'react-bootstrap';
import './App.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={{ span :6 , offset :3}}>
          <div><h1>Slambook</h1></div>
          </Col>
        </Row>
        {/* column 1 form starts here */}
        <Row>
          <Col>
          <Form className="wholeform">
              <Form.Group as={Row} controlId="name" >
              <Form.Label  column sm="2">Name:</Form.Label>
              <Col sm="10"><Form.Control type="name" placeholder="Enter your name" size="sm" />
              </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="dob" >
              <Form.Label  column sm="2">DOB:</Form.Label>
              <Col sm="10"><DatePicker/>
              </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="contact" >
              <Form.Label column sm="2" >Contact:</Form.Label>
              <Col sm="10"><Form.Control type="contact" placeholder="Enter your Contact details" size="sm" />
              </Col>
              <Form.Text className='contact-muted-text'>Your contact is confidential! Cheers!</Form.Text>
              </Form.Group>

              <Form.Group as={Row} controlId="gender" >
              <Form.Label column sm="2" >Gender:</Form.Label>
              <Col sm="10">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="gender-dropdown">Select gender</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/Male">Male</Dropdown.Item>
                  <Dropdown.Item href="#/Female">Female</Dropdown.Item>
                  <Dropdown.Item href="#/Transgender">Transgender</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="zodiac" >
              <Form.Label column sm="2" >Zodiac:</Form.Label>
              <Col sm="10"><Form.Control type="zodiac" placeholder="Enter your Zodiac" size="sm" />
              </Col>
              </Form.Group>
            </Form>
          </Col>

          {/* column 1 form ends here */}

          {/* column 2 form starts here */}

          <Col>
          <Form className="wholeform">
              <Form.Group as={Row} controlId="crush" >
              <Form.Label column sm="2" >1st crush:</Form.Label>
              <Col sm="10"><Form.Control type="crush"  size="sm" />
              </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="sport" >
              <Form.Label column sm="2" >Fav sport:</Form.Label>
              <Col sm="10"><Form.Control type="sport" placeholder="Cricket, football etc." size="sm" />
              </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="hobby" >
              <Form.Label column sm="2" >Hobby:</Form.Label>
              <Col sm="10"><Form.Control type="hobby" placeholder="video games, coin collection etc." size="sm" />
              </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="nickname" >
              <Form.Label column sm="2" >Nickname:</Form.Label>
              <Col sm="10"><Form.Control type="nickname"  size="sm"  placeholder="what friends call you!"/>
              </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="about-me" >
              <Form.Label column sm="2" >About me:</Form.Label>
              <Col sm="10"><Form.Control as="textarea" rows="5" type="about-me" placeholder="Write whatever comes to your mind!" size="sm" />
              </Col>
              </Form.Group>
            </Form>
          </Col>

          {/* column 2 form ends here */}
        </Row>
        
        <Row>
          <Button type="submit" size="lg">Submit</Button>
        </Row>
      </Container>     
    );
  }
}

export default App;
