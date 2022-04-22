import "./landing.css";
import style from "../../assets/common.module.css";
import Navigation from "../../components/navigation/Navigation";
import img from "../../assets/img/dummy.jpg";
import Properties from "../../components/properties/Properties";

// pages
import Metaverse from "../metaverse/Metaverse";
import Roadmap from "../roadmap/Roadmap";

const Landing = () => {
  return (
    <div>
      <Navigation />
      <div className="landing">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="landingContent">
                <h2 className="landingTitle">Amet consectetur adipisicing.</h2>
                <h1>Nunc, Facilisis</h1>
                <p>
                  Consectetur adipisicing elit. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Consequuntur, fugiat?
                </p>
                <div className="LandingButtons">
                  <button className={`${style.gradientBtn}`}>DISCORD</button>
                  <button className="customLandingBtn">WHITEPAPER</button>
                </div>
              </div>
              <div className="downArrow">
                <span>
                  <i class="fa-solid fa-chevron-down"></i>
                </span>
              </div>
            </div>
            <div className="col-md-2">
              <ul className="LandingSocialLinks">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-discord"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="headline">
        <h4 className="headlineText">
          .MINTING MARCH .MINTING MARCH .MINTING MARCH .MINTING MARCH .MINTING
          MARCH{" "}
        </h4>
      </div>
      <div className="about">
        <div className="container">
          <div className="aboutWrapper">
            <h5 className={style.barTitle}>ABOUT</h5>
            <div className="aboutContent">
              <br />
              <h2 className="landingTitle">BRINT THE METAVERSE TO</h2>
              <h2 className={style.gradientText}>LIFE WITH NFTS</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                quo temporibus nobis fugiat laudantium beatae consequatur
                eveniet dolores illum praesentium?
              </p>
            </div>
            <div className="aboutImages">
              <img src={img} className="aboutImage" />
              <img src={img} className="aboutImage" />
              <img src={img} className="aboutImage" />
            </div>
            <p className="mt-4">Join The Lorem Ispum NFT</p>
            <button className={`${style.gradientBtn} mb-5`}>
              JOIN DISCORD
            </button>
          </div>
        </div>
      </div>

      {/* metaverse section */}
      <Metaverse />

      {/* roadmap */}
      <Roadmap />

      {/* propertties */}
      <div className="container">
        <Properties />
      </div>
    </div>
  );
};

export default Landing;
