import React from 'react'
import '../../styles/signup.css';


function SignupForm(props) {
    return (
        <div className="form-wrapper">
            <form onSubmit={props.handleSubmit}>
                <h3>Sign Up For an Account</h3>
                <input  
                    className = "account-input"
                    onChange={props.handleChange}
                    value={props.username}
                    name="username"
                    type="email"
                    placeholder="Email Address"/>
                    <br/>
                <input 
                    className = "account-input"
                    onChange={props.handleChange}
                    value={props.password}
                    name="password"
                    type="password"
                    placeholder="Password"/>
                    <br/>
                <button className="form-btn" type="submit">Create Account</button>
                <p>{props.errMsg}</p>
            </form>
        </div>
    )
}

export default SignupForm