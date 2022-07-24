import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="world">World</Link>
        </li>
        <li>
          <Link to="/">U.S.</Link>
        </li>
        <li>
            <Link to="Politics">Politics</Link>
        </li>
        <li>
          <Link to="/">N.Y.</Link>
        </li>
        <li>
          <Link to="/">Business</Link>
        </li>
        <li>
          <Link to="Science">Opinion</Link>
        </li>
        <li>
          <Link to="tech">Tech</Link>
        </li>
        <li>
          <Link to="/">Science</Link>
        </li>
        <li>
          <Link to="Health">Health</Link>
        </li>
        <li>
          <Link to="/">Sport</Link>
        </li>
        <li>
          <Link to="/">Arts</Link>
        </li>
        <li>
          <Link to="/">Book</Link>
        </li>
        <li>
          <Link to="/">Style</Link>
        </li>
        <li>
          <Link to="/">Food</Link>
        </li>
        <li>
          <Link to="/">Travel</Link>
        </li>
        <li>
          <Link to="/">Magazine</Link>
        </li>
        <li>
          <Link to="/">T Magazine</Link>
        </li>
        <li>
          <Link to="/">Real Estate</Link>
        </li>
        <li>
          <Link to="/">Video</Link>
        </li>
        
      </ul>
    </div>
  );
}

export default Menu;
