import React from "react";
import style from "../../assets/common.module.css";
import img1 from "../../assets/img/img 1.jpg";
import img2 from "../../assets/img/img 2.jpg";
import img3 from "../../assets/img/img 3.jpg";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import Properties from "../../components/properties/Properties";
// pages
import Metaverse from "../metaverse/Metaverse";
import Roadmap from "../roadmap/Roadmap";
import Team from "../team/Team";
import "./landing.css";
import { propertiesData } from "./Properties";



const Landing = () => {
  return (
    <>
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
                  <i className="fa-solid fa-chevron-down"></i>
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

      {/* about section */}
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
              <img alt="" src={img1} className="aboutImage" />
              <img alt="" src={img2} className="aboutImage" />
              <img alt="" src={img3} className="aboutImage" />
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
      <h2 className={style.gradientText} id="PropertiesId">
        LATEST ADDED PROPERTIES
      </h2>
      <div className="propertiesSection">
        {propertiesData.map((data, index) => (
          <Properties key={index} data={data} />
        ))}
      </div>
      {/* </div> */}
      {/* Team */}
      <Team />

      {/* FAQ */}
      <div className="container">
        <div className="FAQSection">
          <br />
          <h5 className={style.barTitle}>FAQ</h5>
          <br />
          <h2 className={style.gradientText} style={{ margin: "0 auto" }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <br />
          <Faq />
          {/* bootstraps */}
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Landing;
