import moment from "moment";
import { FaBars, FaSearch } from "react-icons/fa";
import Menu from "./menu/Menu";
import "./Header.css";
import logo from "./Images/logo.png"

function Header() {
  return (
    <header>
        <section className="top-menu">
          <div className="div-left">
            <button style={{color:'black'}}>
              <FaBars/>
            </button>
            <button style={{color:'black'}}>
              <FaSearch/>
            </button>
          </div>
          
          <div className="div-center">
            <ul className="language-menu">
              <li>
                <a href="#">U.S.</a>
              </li>
              <li>
                <a href="#">International</a>
              </li>
              <li>
                <a href="#">Canada</a>
              </li>
              <li>
                <a href="#">Español</a>
              </li>
              <li>
                <a href="#" lang="zh-hans">中文</a>
              </li>
            </ul> 
          </div>
          
          <div className="div-right">
            <button className="cta" href="#">Subscribe for $0.25/week</button>
            <button className="cta" href="#">Log in</button>
          </div>
        </section>
        <section className="middle-menu">
          <div>
            <span>{moment().format('dddd, MMMM DD, YYYY')}</span>
            <span>Today's Paper</span>
          </div>
          <div>
          <a href="/">
            <img className="logo" src={logo}/>
          </a>
          </div>
              <span></span>
          <div>

          </div>
        </section>
        <section className="bottom-menu">
          <Menu />
        </section>
    </header>
  );
}
export default Header;
