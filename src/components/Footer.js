import React from "react";

function Footer(props) {
  const footerStyle = {
    fontSize: "14px", 
    textAlign: "center", 
    padding: "1rem",
    backgroundColor: "#f0f0f0", 
    borderTop: "1px solid #ccc", 
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Josean Gomez</p>
      <p>Contact: joseangomezwork@gmail.com</p>
      <p>Cell: 310-956-6877</p>
    </footer>
  );
}

export default Footer;
