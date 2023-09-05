import React, { useState, useEffect } from "react";
import "./About.css"; // Import your CSS file for styling

function About() {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);


  const loaded = () => (
    <div className="about-container">
      <img src={about.headshot} alt={about.name} className="about-image" />
     <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <h4>{about.linkedin}</h4>
      <p>{about.bio}</p>
      <a href={about.resume} target="_blank" rel="noopener noreferrer">Download Resume (PDF)</a>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
