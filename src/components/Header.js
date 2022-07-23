import Menu from "./menu/Menu";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="content">
          <a className="logo" href="/">
            New York Times
          </a>
          <Menu />
        </div>
      </div>
    </div>
  );
}
export default Header;
