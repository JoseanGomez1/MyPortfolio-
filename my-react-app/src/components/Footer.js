import React from "react";

function Footer(props) {
  const footerStyle = {
    fontSize: "14px", // You can adjust this value to make the text smaller or larger
    textAlign: "center", // Center-align the content
    padding: "1rem", // Add some padding for spacing
    backgroundColor: "#f0f0f0", // Add a background color
    borderTop: "1px solid #ccc", // Add a top border for separation
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
