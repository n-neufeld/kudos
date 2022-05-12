import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import profilePort from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

// HEADER COMPONENT FOR ALL CONTAINING ELEMENTS
function Header() {
  return (
    <article className="header">
      <a className="brainflix-logo-container" href="/">
        <img className="brainflix-logo" alt="brainflix logo" src={logo} />
      </a>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="search"
        rel="search"
      />
      <img className="user-portrait" alt="user portrait" src={profilePort} />
      <Link className="upload-button" to="/upload">
        UPLOAD
      </Link>
    </article>
  );
}

export default Header;
