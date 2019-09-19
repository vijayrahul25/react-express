import React, { Component } from 'react';
import ApiHandler from './../../service/ApiHandler';

export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: '',
            success: ''
        };
    }
    render() {
        let error = (this.state.error) ? <div class="alert alert-danger" role="alert">{this.state.error}</div> : ''
        let success = (this.state.success) ? <div class="alert alert-success" role="alert">{this.state.success}</div> : ''
        return (
            <div class="col-sm">                
                <h1>Signup</h1>
               {error}
               {success}
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
                    <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }

    handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    clearErrorSuccess = () => {
        this.setState({ success: '' });
        this.setState({ error: '' }) 
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.clearErrorSuccess();
        var body = {
            username: this.state.username,
            password: this.state.password
        }

        ApiHandler.postRequest('user/signup', body).then((response) => {
            console.log(response);
            if (response.success) {
                this.setState({ success: response.success })
            } else {
                this.setState({ error: response.error }) 
            }
        })
    }
}