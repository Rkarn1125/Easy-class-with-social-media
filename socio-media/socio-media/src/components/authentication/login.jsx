import React from "react";

import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";

import CircularProgress from '@mui/material/CircularProgress';
import { AuthContext } from "../../context/AuthContext";
const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);

  return (
    <>
      <form action="" className="actual-form" onSubmit={handleClick}>
        <div className="input-wrap">
          <input
            name="email"
            placeholder="Email"
            type="email"
            required
            className="input-field"
            id="email"
            ref={email}
          />
          <label>Email</label>
        </div>

        <div className="input-wrap">
          <input
            className="input-field"
            name="password"
            placeholder="Password"
            type="password"
            required
            id="password"
            minLength="6"
            ref={password}
          />
          <label>Password</label>
        </div>

            
        <button type="submit" value="Sign In" className="sign-btn" >
          {isFetching ? <CircularProgress color="secondary" />:"Login"}
        </button>
        
        <p className="text">
          Forgotten your password or you login datails?
          <a href="#">Get help</a> signing in
        </p>
        </form>
    </>
  );
};

export default Login;
