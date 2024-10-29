import "./Header.css";
import Logo from "../../assets/nairobilogo2.jpg";

function Header() {
  return (
    <div className="header-section">
      <div className="header-navigation">
        <img src={Logo} alt="logo" className="header-logo" />
        <div className="navigation-list">
          <nav className="navigation-items">
            <a href="">home</a>
            <a href="">about</a>
            <a href="">services</a>
            <a href="">Education</a>
            <a href="">contact </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
