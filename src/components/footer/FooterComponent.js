import "./footer.css";
import logo from "./img-logo.svg";
import { Link } from "react-router-dom";
import homeDeliveryIcon from "./home-delivery-icon.svg";
import nyIcon from "./Ny-icon.svg";
import gameIcon from "./game-icon.svg";
import cookieIcon from "./cooking-icon.svg";

function FooterComponent() {
  return (
    <div>
      <div className="title-ny">
        <img src={logo} alt="" />
      </div>
      <div className="container">
        <ul className="menu-item-footer">
          <li className="titile-menu-item">NEWS</li>
          <li>
            <Link className="link-tomenu" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-tomenu" to="world">
              World
            </Link>
          </li>

          <li>Coronavirus</li>
          <li>U.S.</li>
          <li>
            <Link className="link-tomenu" to="Politics">
              Politics
            </Link>
          </li>

          <li>New York</li>
          <li>Business</li>
          <Link className="link-tomenu" to="tech">
            Tech
          </Link>
          <li>
            <Link className="link-tomenu" to="Science">
              Science
            </Link>
          </li>

          <li>Sports</li>
          <li>Wildfire Tracker</li>
          <li>Obituaries</li>
          <li>Today's Paper</li>
          <li>Corrections</li>
          <li>Trending</li>
        </ul>
        <div>
          <ul className="menu-item-footer">
            <li className="titile-menu-item">OPINION</li>
            <li>Today's Opinion</li>
            <li>Columnists</li>
            <li>Editorials</li>
            <li>Guest Essays</li>
            <li>Letters</li>
            <li>Sunday Opinion</li>
            <li>Opnion Video</li>
          </ul>
        </div>
        <div>
          <ul className="menu-item-footer">
            <li className="titile-menu-item">ARTS</li>
            <li>Today's Arts</li>
            <li>Art & Design</li>
            <li>Books</li>
            <li>Best Seller Book List</li>
            <li>Dance</li>
            <li>Movies</li>
            <li>Music</li>
            <li>Pop Culture</li>
            <li>Television</li>
            <li>Theater</li>
            <li>Video: Arts</li>
          </ul>
        </div>
        <div>
          <ul className="menu-item-footer">
            <li className="titile-menu-item">LIVING</li>
            <li>Automative</li>
            <li>Games</li>
            <li>Education</li>
            <li>Food</li>
            <li>
              <Link className="link-tomenu" to="Health">
                Health
              </Link>
            </li>

            <li>Jobs</li>
            <li>Love</li>
            <li>Magazine</li>
            <li>Pareting</li>
            <li>Real Estate</li>
            <li>Style</li>
            <li>T Magazine</li>
            <li>TRavel</li>
          </ul>
        </div>
        <div>
          <ul className="menu-item-footer">
            <li className="titile-menu-item">MORE</li>
            <li>Reader Center</li>
            <li>The Athletic</li>
            <li>Wirecutter</li>
            <li>Cooking</li>
            <li>Headway</li>
            <li>Live Events</li>
            <li>The Learning network</li>
            <li>Tools & Services</li>
            <li>Podcasts</li>
            <li>Video</li>
            <li>TimesMachine</li>
            <li>NYT Store</li>
            <li>Manage My Account</li>
            <li>NYTLicensing</li>
          </ul>
        </div>
        <div>
          <ul className="menu-item-footer">
            <li className="titile-menu-item">SUBSCRIBE</li>
            <div className="subscribe">
              <li>
                <img className="icone-footer" src={homeDeliveryIcon} alt="" />
                Home Delivery
              </li>
              <li>
                <img className="icone-footer" src={nyIcon} alt="" />
                Digital Subscriptions
              </li>
              <li>
                <img className="icone-footer" src={gameIcon} alt="" />
                Games
              </li>
              <li>
                <img className="icone-footer" src={cookieIcon} alt="" />
                Cooking
              </li>
            </div>
            <li>Email newsletters</li>
            <li>Corporate Subscriptions</li>
            <li>Education Rate</li>

            <div>
              <li>Mobile Applications</li>
              <li>Replica Edition</li>
              <li>International</li>
              <li>Canada</li>
              <li>Español</li>
              <li>中文网</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
