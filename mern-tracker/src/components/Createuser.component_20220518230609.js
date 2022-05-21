import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateUser extends Component {
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