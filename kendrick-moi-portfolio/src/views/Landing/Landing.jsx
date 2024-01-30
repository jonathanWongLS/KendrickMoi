import {Helmet} from "react-helmet";
import landingVideo from "./assets/SABAH.mp4";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <Helmet>
        <body style="overflow: hidden" />
      </Helmet>
      <video width="100%" height="100%" muted autoPlay loop className="landing-video">
        <source src={landingVideo} type="video/mp4" />
      </video>
      <div className="landing-content-container">
        <div className="landing-top-right-container">
        </div>
        <div className="landing-center-container">
          <p className="landing-title">KENDRICK MOI</p>
          <a href="" target="_blank" className="landing-subtitle">
            BRINGING IDEAS TO LIFE
          </a>
        </div>
      </div>
    </div>
  )
}

export default Landing