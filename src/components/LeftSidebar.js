import { Link } from "react-router-dom";

function LeftSidebar(props) {
  return (
    <aside className="sidebar sidebar-left">
      <ul className="category">
        <li onClick={() => props.setSearch(true)}>
          <Link to="/">SEARCH</Link>
        </li>
        <li
          onMouseOver={() => props.setIsShopHovered(true)}
          onMouseOut={() => props.setIsShopHovered(false)}
          className="dropdown"
        >
          <Link to="/">SHOP</Link>
          {props.isShopHovered && (
            <ul className="dropdown-content">
              <li onClick={() => props.handleCategoryChange("hair")}>
                <Link to="/shop/hair">for hair</Link>
              </li>
              <li onClick={() => props.handleCategoryChange("neck")}>
                <Link to="/shop/neck">for neck</Link>
              </li>
              <li onClick={() => props.handleCategoryChange("fingers")}>
                <Link to="/shop/fingers">for fingers</Link>
              </li>
            </ul>
          )}
        </li>
        <li
          onMouseOver={() => props.setIsBoardHovered(true)}
          onMouseOut={() => props.setIsBoardHovered(false)}
          className="dropdown"
        >
          <Link to="/">BOARD</Link>
          {props.isBoardHovered && (
            <ul className="dropdown-content">
              <li>
                <Link to="/notice">notice</Link>
              </li>
              <li>
                <Link to="/q-a">q / a</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
}

export default LeftSidebar;
