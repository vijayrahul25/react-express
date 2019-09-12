import React, { Component } from 'react';

export default class Signup extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div class="col-sm">
                <h1>Signup</h1>
                <form>
                <div class="form-group">
                    <input
                        className="form-control"
                        placeholder="Username goes here..."
                        name="username"
                        type="text"
                        onChange={this.handleChange}
                    />
                    </div>
                    <div class="form-group">
                    <input
                        className="form-control"
                        placeholder="Password goes here..."
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                    />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}