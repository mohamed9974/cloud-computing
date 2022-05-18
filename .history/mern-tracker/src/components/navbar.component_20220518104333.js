import React,{Component} from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
            <Link to="/" className="navbar-brand">
                MERN-Tracker
            </Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                    Exercises
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/create" className="nav-link">
                    Create Exercise Log
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/user" className="nav-link">
                    Create User
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        );
    }
    }