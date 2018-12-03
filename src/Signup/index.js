import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Input } from 'semantic-ui-react';

export default class Signup extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      linkedin: '',
    }
  }
  handleChange = (e) => {
    console.log(e.currentTarget.name)
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const createUser = await fetch('http://localhost:9000', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(createUser)

    } catch (err) {
      return(err);
      console.log(err);
    }
  }

  render(){
    return(
      <div>
        <h2>SIGNUP PAGE</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input type='text' name='email' placeholder='email address' onChange={this.handleChange} />
          <Form.Input type='text' name='username' placeholder='username' onChange={this.handleChange} />
          <Form.Input type='text' name='password' placeholder='password' onChange={this.handleChange} />
          <Form.Input type='text' name='linkedin' placeholder='LinkedIn' onChange={this.handleChange} />

            <Button type='submit'>
              Submit
            </Button>

        </Form>
      </div>
    )
  }
}
