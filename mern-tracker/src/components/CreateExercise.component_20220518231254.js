import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class CreateExercise extends Component {
    render() {
        return (
        <div>
            <h3>Create Exercise Log</h3>
            <form>
            <div className="form-group">
                <label>Username: </label>
                <select className="form-control">
                <option>test</option>
                </select>
            </div>
            <div className="form-group">
                <label>Description: </label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label>Duration (in minutes): </label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label>Date: </label>
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