import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import JPG1 from "./assets/first.jpg";
import JPG2 from "./assets/second.jpg";
import JPG3 from "./assets/third.jpeg"; 
import JPG4 from "./assets/fourth.jpg";
import JPG5 from "./assets/fifth.jpg";
import JPG6 from "./assets/sixth.jpg";
import JPG7 from "./assets/seventh.jpg";

import "./Portfolio.css";

const Portfolio = () => {
  useEffect(() => document.title = "Kendrick Moi | Portfolio");
  
  return (
    <div className="portfolio-main-container">
      <div className="portfolio-menu-mobile">Menu</div>
      <div className="portfolio-title">
        <a href="/" rel="noreferrer noopener" className="portfolio-title-anchor">
          <h1>KENDRICK MOI</h1>
        </a>
      </div> 
      <div className="portfolio-links">
        <a href="/about" rel="noreferrer">
          <span>About</span>
        </a>
        <a href="/portfolio" rel="noreferrer" className="active">
          <span>Portfolio</span>
        </a>
      </div>
      <div className="portfolio-items">
        <Row className="portfolio-items-row">
          <Col lg={12} xl={7} style={{ cursor: "pointer" }} onClick={() => {}}>
            <div className="overlay">
              <h2>Kuala Lumpur</h2> 
              <img src={JPG1} width="100%" /> 
            </div>
          </Col>
          <Col lg={12} xl={5} style={{ cursor: "pointer" }} onClick={() => {}}>
            <div className="overlay">
              <h2>Singapore International Airport</h2> 
              <img src={JPG2} width="100%" /> 
            </div>
          </Col>
        </Row>
        <Row className="portfolio-items-row">
          <Col lg={12} xl={4} style={{ cursor: "pointer" }} onClick={() => {}}>
            <div className="overlay">
                <h2>Cameraman</h2> 
                <img src={JPG3} width="100%" /> 
              </div>
          </Col>
          <Col lg={12} xl={8} style={{ cursor: "pointer" }} onClick={() => {}}>
            <div className="overlay">
              <h2>Rave</h2> 
              <img src={JPG4} width="100%" /> 
            </div>  
          </Col> 
        </Row>
        <Row className="portfolio-items-row">
          <Col lg={12} xl={6} style={{ cursor: "pointer" }} onClick={() => {}}>
            <div className="overlay">
              <h2>Monkey</h2> 
              <img src={JPG5} width="100%" /> 
            </div>
          </Col>
          <Col lg={12} xl={6} style={{ cursor: "pointer" }} onClick={() => {}}>
            <div className="overlay">
              <h2>Batu Caves</h2> 
              <img src={JPG6} width="100%" /> 
            </div>
          </Col>
        </Row>
        <Row className="portfolio-items-row"> 
          <Col lg={12} xl={6} style={{ cursor: "pointer" }} onClick={() => {}}>
            <div className="overlay">
              <h2>Dusk Photoshoot</h2> 
              <img src={JPG7} width="100%" /> 
            </div>
          </Col>
          <Col lg={12} xl={6}>
          </Col>
        </Row>
      </div>
      <div className="portfolio-socmed-links">
        <a href="https://www.instagram.com/kendrickmoi_/" rel="noreferrer noopener" target="_blank" className="portfolio-socmed-link">
          <div className="portfolio-icon-container"> 
            <FaInstagram /> 
          </div>
        </a>

        <a href="https://www.facebook.com/kendrick.moi" rel="noreferrer noopener" target="_blank" className="portfolio-socmed-link">
          <div className="portfolio-icon-container">
            <FaFacebook />
          </div>
        </a>
        <a href="mailto:jonathanwongls01@gmail.com" rel="noreferrer noopener" target="_blank" className="portfolio-socmed-link">
          <div className="portfolio-icon-container">
            <AiOutlineMail />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Portfolio