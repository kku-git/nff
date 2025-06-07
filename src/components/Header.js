import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="ticker-wrap">
        <ul className="ticker">
          <li>
            <a href="/">3,000KRW off for new members</a>
          </li>
          <li>
            <Link to="/">Free shipping over 80,000KRW</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
