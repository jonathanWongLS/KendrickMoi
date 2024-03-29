import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import landingVideo from "./assets/SABAH.mp4";
import "./Landing.css";
import { useEffect } from "react";
 
const Landing = () => {
  useEffect(() => {
    document.title = "Kendrick Moi"
  })

  return (
    <div className="landing-main-container">
      <div className="landing-top-right-container">
        <div className="socmed-links-container">
          <a href="https://www.instagram.com/kendrickmoi_/" rel="noreferrer noopener" target="_blank" className="socmed-link">
            <FaInstagram /> 
          </a>
          <a href="https://www.facebook.com/kendrick.moi" rel="noreferrer noopener" target="_blank" className="socmed-link">
            <FaFacebook />
          </a>
          <a href="mailto:jonathanwongls01@gmail.com" rel="noreferrer noopener" target="_blank" className="socmed-link">
            <AiOutlineMail />
          </a>
        </div>
        <div className="portfolio-link-container">
          <a href="/portfolio" target="_blank" className="portfolio-link">PORTFOLIO</a>
        </div>
      </div>

      <div className="landing-video-container">
        <video width="100%" height="100%" muted autoPlay loop className="landing-video">
          <source src={landingVideo} type="video/mp4" />
        </video>
      </div>

      <div className="landing-center-container">
        <p className="landing-title">KENDRICK MOI</p>
        <a href="/portfolio" target="_blank" className="landing-subtitle-anchor">
          <span className="landing-subtitle">BRINGING IDEAS TO LIFE</span>
        </a>
      </div>
    </div>
  )
}

export default Landing