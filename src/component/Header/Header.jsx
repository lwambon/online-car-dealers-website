import "./Header.css";

function Header() {
  return (
    <div className="header-section">
      <div className="header-navigation">
        <h2 className="header-logo">online car dealering</h2>
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
