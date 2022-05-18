import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class EditExercise extends Component {
    render() {
        return (
            <div>
                <h3>Edit Exercise</h3>
                <form>
                    <div className="form-group">
                        <label>Username:</label>
                        <select
                            className="form-control"
                            id="username"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        >
                            {this.state.users.map(function (user) {
                                return (
                                    <option key={user} value={user}>
                                        {user}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes):</label>
                        <input
                            type="text"
                            className="form-control"
                            id="duration"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date:</label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Create Exercise Log"
                            className="btn btn-primary"
                            onClick={this.onSubmit}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
