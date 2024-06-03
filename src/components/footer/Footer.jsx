import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <a style={{ color: "white",textDecoration:"none" }} href="https://portfoliowebsite-ljtv.onrender.com/"><li  className="menuItem">About</li></a>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Made By Kundan Kumar with ❤️.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a style={{ color: "white" }} href="https://github.com/tropnicates"><FaGithub /></a>
          </span>
          <span className="icon">
            <a style={{ color: "white" }} href="https://www.instagram.com/tropnicates/"><FaInstagram /></a> 
          </span>
          <span className="icon">
            <a style={{ color: "white" }} href="https://x.com/Tropnicates"><FaTwitter /></a> 
          </span>
          <span className="icon">
            <a style={{ color: "white" }} href="https://www.linkedin.com/in/kundan-kumar-3a8a6720b//"><FaLinkedin /></a> 
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;