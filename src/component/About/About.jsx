import "./About.css";
import Nairobi from "../../assets/nairobi.jpg";
import Capital from "../../assets/capital.jpg";
import Attactions from "../../assets/touristattraction.jpg";

function About() {
  return (
    <div className="about-section">
      <h2 className="title">about</h2>
      <div className="about-container">
        <div className="about-details">
          <p className="about-info">
            Nairobi, Kenya's vibrant capital, is a dynamic hub blending modern
            urban charm with rich cultural heritage. Known as the "Green City in
            the Sun," it offers unique attractions like Nairobi National Park,
            where wildlife roams against a city skyline. As East Africas
            business epicenter, Nairobi hosts international corporations,
            thriving startups, and bustling markets, attracting business
            enthusiasts worldwide. Educational institutions like the University
            of Nairobi are key academic pillars, while cultural spots like the
            Karen Blixen Museum highlight its historic charm. For recreation,
            Nairobi boasts lively nightlife, serene parks, and upscale malls,
            making it an ideal destination for work, study, and leisure.
          </p>
        </div>
        <div className="about-images">
          <img src={Nairobi} alt="nairobi" />
          <img src={Capital} alt="nairobi" />
          <img src={Attactions} alt="nairobi" />
        </div>
      </div>
    </div>
  );
}

export default About;
