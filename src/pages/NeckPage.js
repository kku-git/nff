import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import SearchOverlay from "../components/SearchOverlay";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import NeckItems from "../components/NeckItems";

function NeckPage(props) {
  return (
    <div className="wrapper">
      {/* 검색창 */}
      {props.Search === true ? (
        <SearchOverlay setSearch={props.setSearch} />
      ) : null}

      {/* 헤더 */}
      <Header />

      {/* 컨테이너 시작 */}
      <div className="container">
        {/* 왼쪽 aside */}
        <LeftSidebar
          setSearch={props.setSearch}
          setIsShopHovered={props.setIsShopHovered}
          isShopHovered={props.isShopHovered}
          setIsBoardHovered={props.setIsBoardHovered}
          isBoardHovered={props.isBoardHovered}
          handleCategoryChange={props.handleCategoryChange}
        />

        {/* 중앙 메인 콘텐츠 */}
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
          {/* items */}
          <NeckItems
            currentPage={props.currentPage}
            itemsPerPage={9}
            updateTotalPages={props.updateTotalPages}
          />
          {/* pages */}
          <Pagination
            currentPage={props.currentPage}
            totalPages={props.totalPages}
            onPageChange={props.onPageChange}
          />
          {/* Footer */}
          <Footer />
        </main>

        {/* 우측 aside */}
        <RightSidebar />
      </div>
    </div>
  );
}

export default NeckPage;
