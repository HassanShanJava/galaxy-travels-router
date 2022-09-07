import React from "react";
import "./FooterStyles.css";

import {
  FaFacebook,
  FaMailBulk,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaSearchLocation,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>75850, Nagan Chowrangi</p>
              <h4>Karachi, Sindh, Pakistan</h4>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              (+92) 304 2308901
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              contact@galaxytravels.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the Company</h4>
          <p>
            Sit consetetur diam ea est kasd sit dolores eos amet et. Aliquyam
            amet takimata sed dolores duo consetetur lorem sed,.
          </p>
          <div className="social">
            <a href="https://www.facebook.com/" target='__blank'>
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://github.com/HassanShanJava/galaxy-travels-router" target='__blank'>
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/hassan-shan/" target='__blank'>
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
