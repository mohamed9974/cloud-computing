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
                        <label>Username:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Create User"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
                <h4>Usernames:</h4>
                {this.state.users.map(function (user) {
                  return (
                    <Link key={user} to={`/users/${user}`}>{user}</Link>
                  );
                })}
            </div>
        )
    }
}