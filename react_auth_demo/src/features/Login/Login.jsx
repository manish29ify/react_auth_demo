import React from 'react';
import { useHistory } from "react-router-dom";
// import Styled from "./styled";

const Login = () => {
  let history = useHistory();
  const goToHome = () => {
    history.replace('home')
  }
  return (
    <React.Fragment>
      <div className="login-container">
        <form>
          <div className="imgcontainer">
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar" />
          </div>

          <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <button type="submit">Login</button>
            <label>
              <input type="checkbox" name="remember" /> Remember me
    </label>
          </div>

          <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
            <button type="button" onClick={goToHome} className="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#dsf">password?</a></span>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;