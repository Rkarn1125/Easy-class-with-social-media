import axios from "axios";
import { useRef } from "react";

export default function Signup() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <form action="" className="actual-form" onSubmit={handleClick}>
        <div className="input-wrap">
          <input
            type="text"
            className="input-field"
            autoComplete="off"
            name="username"
            ref={username}
            required
          />
          <label>username</label>
        </div>

        <div className="input-wrap">
          <input
            type="email"
            className="input-field"
            required
            name="email"
            ref={email}
          />
          <label>Email</label>
        </div>

        <div className="input-wrap">
          <input
            type="text"
            className="input-field"
            autoComplete="off"
            name="password"
            minLength="6"
            ref={password}
            required
          />
          <label>Password</label>
        </div>
        <div className="input-wrap">
          <input
            type="text"
            className="input-field"
            autoComplete="off"
            name="password"
            minLength="6"
            ref={passwordAgain}
            required
          />
          <label>Password again</label>
        </div>

        <button type="submit" value="Sign Up" className="sign-btn" >sign up</button>
      </form>
      <p className="text">
        By signing up, I agree to the
        <a href="#">Terms of Services</a> and
        <a href="#">Privacy Policy</a>
      </p>
    </>
  );
}
