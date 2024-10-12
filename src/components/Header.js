import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul className="ticker">
        <li>
          <a href="http://nff.kr/member/join.html">
            3,000KRW off for new members
          </a>
        </li>
        <li>
          <Link to="/member/join.html">Free shipping over 80,000KRW </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
