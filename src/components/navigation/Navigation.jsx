import "./navigation.css";
import style from "../../assets/common.module.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h3 className={style.gradientText}>LOGO</h3>
          </div>
          <div className="col-md-6">
            <ul className="navlinks">
              <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">RoadMap</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="navlinks">
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Signup</a>
              </li>
              <li>
                <a href="#" className={style.gradientBtn}>
                  <i class="fa-solid fa-arrow-down"></i>
                  METAMASK
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
