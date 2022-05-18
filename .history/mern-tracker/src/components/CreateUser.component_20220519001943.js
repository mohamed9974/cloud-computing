import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
        <h3>Users</h3>
        <ul>
          {this.state.users.map(user => (
            <li>{user}</li>
          ))}
        </ul>
        <Link to="/">Back to home</Link>
      </div>
    )
  }
}