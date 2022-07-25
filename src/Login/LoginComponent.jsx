import React, { Component } from 'react'
//import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component{

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        //console.log(this.state);
        this.setState(
            {
    
                [event.target.name]
                : event.target.value
            }
        )
    }

   

    loginClicked() {
        
         if(this.state.username==='admin' && this.state.password==='dummy'){
             //AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
             this.props.history.push(`/employees/${this.state.username}`)
         }
        

    }
    logoutClicked() {
        
        
            this.props.history.push(`/`)
        }
       

   

    render() {
        return (
            <center>
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br></br><br></br>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br></br><br></br>
                    
                    <button className="btn btn-success" onClick={this.loginClicked}>Admin Login</button>
                    <button className="btn btn-success" onClick={this.loginClicked}>User Login</button>
                    <button className="btn btn-success" onClick={this.logoutClicked}>Logout</button>
                    
                    
                </div>
            </div>
            </center>
        )
    }
}

export default LoginComponent