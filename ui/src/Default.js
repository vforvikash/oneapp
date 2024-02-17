// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import ContactForm from './contact/ContactForm';

class Default extends Component {
    state = {
        counter: 0
    };

    handleClick = () => {
        this.setState(prevState => {
            return { counter: prevState.counter + 1 };
        });
    };
    render() {
        return (
            <div className="MainBody">
                <h1>I'm configuring setting up Webpack!!!</h1>
                <p>{`The count now is: ${this.state.counter}`}</p>
                <button onClick={this.handleClick}>Click me</button>

                <ContactForm />
            </div>
        );
    }
}
export default Default;