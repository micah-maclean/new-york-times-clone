import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="world">World</Link>
        </li>
        <li>
          <Link to="Science">Science</Link>
        </li>
        <li>
          <Link to="tech">Tech</Link>
        </li>
        <li>
          <Link to="Health">Health</Link>
        </li>
        <li>
            <Link to="Politics">Politics</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
