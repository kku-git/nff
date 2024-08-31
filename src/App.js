import { useState } from "react";
import "./style/main.scss";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  // 카테고리 버튼
  let [isShopHovered, setIsShopHovered] = useState(false);
  let [isBoardHovered, setIsBoardHovered] = useState(false);
  // 검색창 버튼
  let [Search, setSearch] = useState(false);

  return (
    <div className="wrapper">
      {/* <!-- 검색창 만들기 --> */}
      {Search == true ? (
        <div className="search-container">
          <div
            className="search-overlay"
            onClick={function () {
              setSearch(false);
            }}
          ></div>
          {/* <!-- 검색창 --> */}
          <div className="search">
            <input
              type="text"
              className="search-box"
              placeholder="Press Enter to Search"
            />
          </div>
        </div>
      ) : null}

      {/* 헤더 (뉴스티커) 시작 */}
      <header>
        <ul className="ticker">
          <li>
            <a href="http://nff.kr/member/join.html">
              3,000KRW off for new members
            </a>
          </li>
          <li>
            <a href="/member/join.html">Free shipping over 80,000KRW </a>
          </li>
        </ul>
      </header>
      {/* 컨테이너 시작 */}
      <div className="container">
        {/* 왼쪽 aside */}
        <aside className="sidebar">
          <ul className="category">
            <li
              onClick={function () {
                setSearch(true);
              }}
            >
              <a href="#">SEARCH</a>
            </li>
            <li
              onMouseOver={() => setIsShopHovered(true)}
              onMouseOut={() => setIsShopHovered(false)}
              className="dropdown"
            >
              <a href="#">SHOP</a>
              {isShopHovered && (
                <ul className="dropdown-content">
                  <li>
                    <a href="#">for hair</a>
                  </li>
                  <li>
                    <a href="#">for neck</a>
                  </li>
                  <li>
                    <a href="#">for fingers</a>
                  </li>
                </ul>
              )}
            </li>
            <li
              onMouseOver={() => setIsBoardHovered(true)}
              onMouseOut={() => setIsBoardHovered(false)}
              className="dropdown"
            >
              <a href="#">BOARD</a>
              {isBoardHovered && (
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
        {/* 중앙 메인 콘텐트 */}
        <main>
          <div className="image-container">
            <Link to="/">
              <img
                src="https://kku-git.github.io/nff_product/logo.svg"
                alt="로고"
                className="logo-image"
              />
            </Link>
          </div>
          <div className="image-container">
            <img
              src="https://kku-git.github.io/nff_product/nff_bg.svg"
              alt="배경"
              className="bg-image"
            />
          </div>
          <footer>
            <p>JY CEO.kwon jae yeon</p>
            <p>Business License.</p>
            <p>[777-23-01151] On-Line Register.</p>
            <p>2022-서울 용산-1407[사업자정보확인]</p>
            <p>04316 46-10,</p>
            <p>Wonhyo-ro 1-ga, Yongsan-gu, Seoul 6 Floor</p>
            <p>kakaotalk ID : nff</p>
            <p>11AM-17PM</p>
            <p>jy.nff.official@gmail.com</p>
            <p>개인정보관리책임자 kwon jae yeon</p>
            <p>기업은행 025-136582-04-018 kwon jaeyeon</p>
          </footer>
        </main>
        {/* 우측 aside */}
        <aside className="sidebar">
          <ul className="category">
            <li>
              <a href="#">LOGIN</a>
            </li>
            <li>
              <a href="#">CART</a>
            </li>
            <li>
              <a href="#">ORDER</a>
            </li>
            <li>
              <a href="#">MY PAGE</a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default App;
