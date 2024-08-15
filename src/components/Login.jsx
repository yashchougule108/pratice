import React from "react";
import "../app.css";

const Login = () => {
  return (
    <div className="login">
      <div>
      <h1 className="hed1">Hello! Welcome to Political Insights</h1>
      <h3 className="hed"> Sign up to get great analysis of all political aspects.</h3>
      </div>
    
     <form className="form1">
      <div>
      <input className="inp" type="text" placeholder="username" />
      </div>
      <div>
      <input className="inp" type="password" placeholder="password" />
      </div>
      <div>
      <button className="btn">SIGN IN</button>
      </div>
     </form>
    </div>
  );
};

export default Login;
