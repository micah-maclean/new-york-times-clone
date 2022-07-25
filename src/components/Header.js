import { useLocation } from "react-router-dom";
import moment from "moment";
import { FaBars, FaSearch, FaCloudSun } from "react-icons/fa";
import Menu from "./menu/Menu";
import "./Header.css";
import logo from "./Images/logo.png"

function Header() {
  const page = useLocation().pathname;
  console.log(page)
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
            {page !== '/' && 
              <h4>{page.split('/')[1].toUpperCase()}</h4>
            }
          </div>
          
          
          <div className="div-center">
            {page === '/' &&
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
            } 
            {page !== '/' &&
              <a href="/" className="small-logo">
                <img src={logo}/>
             </a>
            }

          </div>
          
          <div className="div-right">
            <button className="cta" href="#">Subscribe for $0.25/week</button>
            <button className="cta" href="#">Log in</button>
          </div>
        </section>
        {page === '/' &&
          <>
            <section className="middle-menu">
              <div className="div-left">
                <span><b>{moment().format('dddd, MMMM DD, YYYY')}</b></span>
                <span>Today's Paper</span>
              </div>
              <div className="div-center">
                <a href="/" className="logo">
                  <img src={logo}/>
                </a>
              </div>
              <div className="div-right">
                <span><FaCloudSun /> 23°</span>
                <span>Dow <span className='red'>-0.93%</span></span>
              </div>
            </section>
            <section className="bottom-menu">
              <Menu />
            </section>
          </>
        }
    </header>
  );
}
export default Header;
