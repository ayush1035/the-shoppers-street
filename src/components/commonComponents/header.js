import React from 'react';
import { NavLink } from "react-router-dom";
export default class MyHeader extends React.Component {
    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-success navStyle">
                <NavLink className="navbar-brand brandName" activeStyle={{ color: 'white', textDecoration: 'none' }} to="/">The Shoppers Street</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                        <NavLink className="nav-link" exact activeStyle={{ color: 'white', textDecoration: 'none' }} to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeStyle={{ color: 'white', textDecoration: 'none' }} to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeStyle={{ color: 'white', textDecoration: 'none' }} to="/contactUs">Contact Us</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        );
    }

} 
