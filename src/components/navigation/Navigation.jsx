import { ethers } from "ethers";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "../../assets/common.module.css";
import "./navigation.css";


const connectMetamask = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send("eth_requestAccounts", [])
  let signer = await provider.getSigner()
  const balance = await signer.getBalance()
  console.log("Account address:", await signer.getAddress())
  console.log("Account balance:", await ethers.utils.formatEther(balance))
}

const Navigation = () => {
  const [toggleNav, setToggleNav] = useState("");

  window.onscroll = function () {
    const navi = document.querySelector(".navigation");
    let height = window.pageYOffset;
    if (height >= 100) navi.classList.add("secondNav");
    else navi.classList.remove("secondNav");
  };


  return (
    <>
      <div className="menubar">
        <button
          className="showMenuButton"
          onClick={() => setToggleNav("toggleNav")}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <h3 className={`${style.gradientText} responseiveLogo`}>LOGO</h3>
      </div>
      <div className={`navigation ${toggleNav}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="menubar">
                <h3 className={style.gradientText}>LOGO</h3>
                <span
                  className="closeSpan"
                  onClick={() => setToggleNav("")}
                ></span>
              </div>
            </div>
            <div className="col-md-5">
              <ul className="navlinks">
                <li>
                  <NavLink to="/">Home</NavLink>
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
            <div className="col-md-5">
              <ul className="navlinks">
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Signup</NavLink>
                </li>
                <li>
                  <button onClick={connectMetamask} type="button" className={style.gradientBtn}>
                    <i className="fa-solid fa-arrow-down"></i>
                    METAMASK
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
