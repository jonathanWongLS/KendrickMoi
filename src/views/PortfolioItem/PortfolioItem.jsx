import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import "./PortfolioItem.css"; 

const PortfolioItem = () => {
  return (
    <div className="portfolio-item-main-container">
        <header className="portfolio-item-header">
            <div className="portfolio-item-title">
                <a href="/" rel="noreferrer noopener" className="portfolio-item-title-anchor">
                    <h1>KENDRICK MOI</h1>
                </a>
            </div>
        </header> 
        <div className="portfolio-item-content">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7PIji8OubXU?si=9jTVNBEqfeY3mrMn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="portfolio-item-controls">
            <a href="/" rel="noreferrer noopener">
                <IoIosArrowBack/>
            </a>
            <a href="/portfolio" rel="noreferrer noopener">
                Close
            </a>
            <a href="/" rel="noreferrer noopener">
                <IoIosArrowForward/>
            </a>
        </div>
    </div>
  )
}

export default PortfolioItem