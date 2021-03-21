import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row mt-2 mb-4">
          <div className="col text-center">
            <ul className="list-inline">
              <li className="list-inline-item">
                <FaFacebookSquare size="2.7rem" className="social-icons" />
              </li>
              <li className="list-inline-item">
                <FaInstagramSquare size="2.7rem" className="social-icons" />
              </li>
              <li class="list-inline-item">
                <FaTwitterSquare size="2.7rem" className="social-icons" />
              </li>
              <li class="list-inline-item">
                <FaYoutubeSquare size="2.7rem" className="social-icons" />
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center border-top pt-1">
            <p className="footer-small-text">&copy; 2021, Rumyana Dimitrieva</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
