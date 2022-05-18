import React,{Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
// import Map from "./Map";

export default class ExerciseList extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {
            exercises: []
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        exercises: response.data.map(exercise => exercise.username),
                        username: response.data[0].username
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <h3>Exercise List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.exercises.map(exercise => (
                            <tr key={exercise._id}>
                                <td>{exercise.username}</td>
                                <td>{exercise.description}</td>
                                <td>{exercise.duration}</td>
                                <td>{exercise.date.substring(0,10)}</td>
                                <td>
                                    <Link to={"/edit/"+exercise._id} className="btn btn-primary">Edit</Link>
                                    <Link to={"/delete/"+exercise._id} className="btn btn-danger">Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}