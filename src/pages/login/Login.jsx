import React from "react";
import style from "../../assets/common.module.css";
import bg from "../../assets/img/img 7.png";
import Input from "../../components/input/Input";
import Navigation from "../../components/navigation/Navigation";
import "./login.css";


function Login() {
  return (
    <>
      <Navigation />
      <div className="loginWrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="LoginBG">
                <img alt="" src={bg} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="signUpWrapper">
                <h2 style={{ fontWeight: "800", marginTop: "100px" }}>
                  Welcome to <span className={style.gradientText}>NFT</span>
                </h2>
                <p style={{ fontSize: "1.2rem" }}>Login your account</p>
                <br />
                <div className="loginInputs">
                  <Input
                    type="email"
                    placeholder="example@gmail.com"
                    label="EMAIL"
                  />
                  <Input
                    type="password"
                    placeholder="Enter password"
                    label="Password"
                  />
                  <br />
                  <button className={style.gradientBtn}>LOGIN</button>
                </div>
                <div className="loginWith">
                  <p>Login account with</p>

                  <ul className="loginUl">
                    <li>
                      <i className="fa-brands fa-facebook-f"></i>
                    </li>
                    <li>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </li>
                    <li>
                      <i className="fa-brands fa-google"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
