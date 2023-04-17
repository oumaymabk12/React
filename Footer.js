import React from "react";
import "./Footer.css";
import {
  AiFillFacebook,
  AiFillEnvironment,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div>
        <ul className="socila">
          <li>
            <link to="/">
              <AiFillFacebook />
            </link>
          </li>
          <li>
            <link to="#">
              <AiFillEnvironment />
            </link>
          </li>
          <li>
            <link to="#">
              <AiFillInstagram />
            </link>
          </li>
          <li>
            <link to="">
              <AiFillLinkedin />
            </link>
          </li>
          <li>
            <link to="#">
              <AiFillMail />
            </link>
          </li>
          <li>
            <link to="#">
              <AiFillPhone />
            </link>
          </li>
        </ul>
        <ul className="nemu">
          <li>
            <link to="/">Accueil</link>
          </li>
          <li>
            <link to="/Rendezvous">Rendez-vous</link>
          </li>
          <li>
            <link to="/Aider">Aider</link>
          </li>
          <li>
            <link to="/Connecter">Connecter</link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
