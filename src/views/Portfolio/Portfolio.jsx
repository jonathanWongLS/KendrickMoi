import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
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
      <div className="portfolio-items">Items</div>
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