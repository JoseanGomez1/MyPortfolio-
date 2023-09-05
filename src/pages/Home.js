import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

function Home(props) {
  return (
    <div className="homepage-container">
      <div className="header-buttons">
        {/* Your header buttons or navigation go here */}
      </div>
      <div className="homepage-content">
        <div className="typewriter">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .deleteAll()
                .typeString("Welcome to Josean Gomez Portfollio. Have a look around")
                .start();
            }}
          />
        </div>
        <img
          className="homepage-image"
          src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=996&t=1693424489"
          alt="Home"
        />
      </div>
    </div>
  );
}

export default Home;
