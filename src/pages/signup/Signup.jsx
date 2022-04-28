import "../login/login.css";
import Navigation from "../../components/navigation/Navigation";
import Input from "../../components/input/Input";
import bg from "../../assets/img/img 7.png";
import style from "../../assets/common.module.css";

function Signup() {
  return (
    <>
      <Navigation />
      <div className="loginWrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="LoginBG">
                <img src={bg} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="signUpWrapper">
                <h2 style={{ fontWeight: "800", marginTop: "50px" }}>
                  Welcome to <span className={style.gradientText}>NFT</span>
                </h2>
                <p style={{ fontSize: "1.2rem" }}>Register your account</p>
                <br />
                <div className="loginInputs">
                  <Input
                    type="text"
                    placeholder="e.g Devid Jhon"
                    label="NAME"
                  />
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
                  <button className={style.gradientBtn}>SIGNUP</button>
                </div>
                <div className="loginWith">
                  <p>Signup account with</p>

                  <ul className="loginUl">
                    <li>
                      <i class="fa-brands fa-facebook-f"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-linkedin-in"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-google"></i>
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

export default Signup;