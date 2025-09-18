import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function RightSidebar(props) {
  const LoggedIn = useSelector((state) => state.user.LoggedIn);
  const navigate = useNavigate();

  return (
    <aside
      className={`sidebar sidebar-right ${props.className}`}
      onMouseEnter={() => props.setRightSidebarToggle(true)}
      onMouseLeave={() => props.setRightSidebarToggle(false)}
    >
      <ul className="category">
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <Link to="/cart">CART</Link>
        </li>
        <li>
          <Link to="/">ORDER</Link>
        </li>
        <li>
          <button
            onClick={() => {
              if (!LoggedIn) {
                alert("로그인 후 이용해주세요");
                navigate("/login");
              } else {
                navigate("/wishlist");
              }
            }}
          >
            WISH LIST
          </button>
        </li>
        <li>
          <Link to="/">MY PAGE</Link>
        </li>
      </ul>
    </aside>
  );
}

export default RightSidebar;
