import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CreateExercise extends Component {

    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
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

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        };

        console.log(exercise);

        fetch('http://localhost:5000/exercises/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(exercise)
        })
            .then(response => response.json())
            .then(res => console.log(res));

        window.location = '/';
    }



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
