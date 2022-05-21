import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateUser extends Component {

  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/users/')
      .then(response => response.json())
      .then(users => {
        this.setState({ users: users.map(user => user.username) });
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    console.log(user);

    fetch('http://localhost:5000/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(user => console.log(user))
      .catch(err => console.log(err));

    this.setState({
      username: ''
    })
  }

    render() {
      return (
        <div>
          <h3>Create User</h3>
          <form>
            <div className="form-group">
              <label>Username: </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Password: </label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label>First Name: </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Last Name: </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email: </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Phone: </label>
              <input type="text" className="form-control" />
            </div>
            <Link to="/" className="btn btn-secondary">
              Back
            </Link>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      );
    }
  }