import { Link } from "react-router-dom";

function RightSidebar() {
  return (
    <aside className="sidebar sidebar-right">
      <ul className="category">
        <li>
          <Link to="/">LOGIN</Link>
        </li>
        <li>
          <Link to="/cart">CART</Link>
        </li>
        <li>
          <Link to="/">ORDER</Link>
        </li>
        <li>
          <Link to="/">MY PAGE</Link>
        </li>
      </ul>
    </aside>
  );
}

export default RightSidebar;
