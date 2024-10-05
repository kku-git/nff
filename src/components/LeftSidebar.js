import { Link } from "react-router-dom";

function LeftSidebar(props) {
  return (
    <aside className="sidebar">
      <ul className="category">
        <li onClick={() => props.setSearch(true)}>
          <a href="#">SEARCH</a>
        </li>
        <li
          onMouseOver={() => props.setIsShopHovered(true)}
          onMouseOut={() => props.setIsShopHovered(false)}
          className="dropdown"
        >
          <a href="#">SHOP</a>
          {props.isShopHovered && (
            <ul className="dropdown-content">
              <li>
                <Link to="/shop/hair">for hair</Link>
              </li>
              <li>
                <Link to="/shop/neck">for neck</Link>
              </li>
              <li>
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
          <a href="#">BOARD</a>
          {props.isBoardHovered && (
            <ul className="dropdown-content">
              <li>
                <a href="#">notice</a>
              </li>
              <li>
                <a href="#">q / a</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
}

export default LeftSidebar;
