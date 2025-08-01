import { Link } from "react-router-dom";

function RightSidebar(props) {
  return (
    <aside
      className={`sidebar sidebar-right ${props.className}`}
      onMouseEnter={() => props.setRightSidebarToggle(true)}
      onMouseLeave={() => props.setRightSidebarToggle(false)}
    >
      <ul className="category">
        <li>
          <Link to="/">LOGIN</Link>
        </li>
        <li>
          <Link to="/cart">CART</Link>
        </li>
        <li>
          <Link to="/detail/:category/:id">ORDER</Link>
        </li>
        <li>
          <Link to="/wishlist">WISH LIST</Link>
        </li>
        <li>
          <Link to="/">MY PAGE</Link>
        </li>
      </ul>
    </aside>
  );
}

export default RightSidebar;
