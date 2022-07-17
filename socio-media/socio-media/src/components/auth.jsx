import React from "react";
import "../style/App.css";
import Login from "./authentication/login";
import Signup from "./authentication/signup";
const Auth = () => {
  function getSignup() {
    document.querySelector("#main").classList.toggle("sign-up-mode");
  }

  function moveSlider() {
    const bullets = document.querySelectorAll(".bullets span");
    const images = document.querySelectorAll(".image");

    let index = this.dataset.value;

    let currentImage = document.querySelector(`.img-${index}`);
    images.forEach((img) => img.classList.remove("show"));
    currentImage.classList.add("show");

    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;
    bullets.forEach((bull) => bull.classList.remove("active"));
    this.classList.add("active");
  }
  function onGround() {
    const bullets = document.querySelectorAll(".bullets span");
    bullets.forEach((bullet) => {
      bullet.addEventListener("click", moveSlider);
    });
  }

  return (
    <div>
      <main id="main">
        <div className="box shadow-lg p-3 mb-5 bg-body rounded">
          <div className="inner-box">
            <div className="forms-wrap">
              <div id="form1" className="sign-in-form">
                <div className="logo">
                  <img src="/image/logo.png" alt="easyclass" />
                  <h4>easyclass</h4>
                </div>

                <div className="heading">
                  <h2>Welcome Back</h2>
                  <h6>Not registred yet? </h6>
                  <a href="#" className="toggle" onClick={getSignup}>
                    Sign up
                  </a>
                </div>

                <Login></Login>
              </div>

              <div id="form1" className="sign-up-form">
                <div className="logo">
                  <img src="/image/logo.png" alt="easyclass" />
                  <h4>easyclass</h4>
                </div>

                <div className="heading">
                  <h2>Get Started</h2>
                  <h6>Already have an account? </h6>
                  <a href="#" className="toggle" onClick={getSignup}>
                    Sign in
                  </a>
                </div>

                <Signup></Signup>
              </div>
            </div>

            <div className="carousel">
              <div className="images-wrapper">
                <img
                  src="/image/image1.png"
                  className="image img-1 show"
                  alt=""
                />
                <img src="./image/image2.png" className="image img-2" alt="" />
                <img src="./image/image3.png" className="image img-3" alt="" />
              </div>

              <div className="text-slider">
                <div className="text-wrap">
                  <div className="text-group">
                    <h2>Create your own courses</h2>
                    <h2>Customize as you like</h2>
                    <h2>Invite students to your class</h2>
                  </div>
                </div>

                <div className="bullets" onClick={onGround}>
                  <span className="active" data-value="1"></span>
                  <span data-value="2"></span>
                  <span data-value="3"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;
