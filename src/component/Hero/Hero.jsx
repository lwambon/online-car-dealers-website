import "./Hero.css";
import BackgroundVideo from "../../assets/movingCars.mp4";

function Hero() {
  return (
    <div className="hero-section">
      <div className="heros-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <h3 className="heros-details">
          Adventure awaits on every road. Let your journey define the story
        </h3>
        <p className="heros-information">
          Travel far, travel wide, let the journey move you.
        </p>
      </div>
    </div>
  );
}

export default Hero;
