import React, {Component} from "react";

export default class ExercisesList extends Component {
    render() {
        return (
            <div>
                <h3>Exercises List</h3>
                <ul className="list-group">
                    <li className="list-group-item">Exercise 1</li>
                    <li className="list-group-item">Exercise 2</li>
                    <li className="list-group-item">Exercise 3</li>
                </ul>
            </div>
        );
    }
}