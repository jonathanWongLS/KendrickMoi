import { useEffect } from "react";

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
      <div className="portfolio-socmed-links">Socmed Links</div>
    </div>
  )
}

export default Portfolio