import { Link } from "react-router-dom";
import './Header.css';

function Header() {

  //an example of an inline style for the nav tag for an initial layout - later additions, or 

  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: ".2rem solid black",
    padding: ".5rem",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <h1>My Portfolio Page</h1>
      <nav style={navStyle}>
  <Link to="/" className="nav-link">
    <div className="nav-button">HOME</div>
  </Link>
  <Link to="/about" className="nav-link">
    <div className="nav-button">ABOUT</div>
  </Link>
  <Link to="/projects" className="nav-link">
    <div className="nav-button">PROJECTS</div>
  </Link>
</nav>
    </header>
  );
}

export default Header;

