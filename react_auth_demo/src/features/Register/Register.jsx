import React from 'react';
// import Styled from "./styled";

const Register = _ => {
  return (
    <React.Fragment>
      <div className="login-container">
        <form>
          <div className="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account</p>
            <hr />

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
            <hr />
            <p>By creating an account you agree to our <a href="#sdfsdf">Terms & Privacy</a></p>

            <button type="submit" className="registerbtn">Register</button>
          </div>

          <div className="container signin">
            <p>Already have an account? <a href="#fddsf">Sign in</a></p>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Register;