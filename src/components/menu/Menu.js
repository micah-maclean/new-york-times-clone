import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Link to="world">World</Link>
        </li>
        <li>
          <Link to="/">U.S.</Link>
        </li>
        <li>
            <Link to="politics">Politics</Link>
        </li>
        <li>
          <Link to="/">N.Y.</Link>
        </li>
        <li>
          <Link to="/">Business</Link>
        </li>
        <li>
          <Link to="/">Opinion</Link>
        </li>
        <li>
          <Link to="tech">Tech</Link>
        </li>
        <li>
          <Link to="science">Science</Link>
        </li>
        <li>
          <Link to="health">Health</Link>
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
