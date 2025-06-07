import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import MainContent from "../components/MainContent";
import SearchOverlay from "../components/SearchOverlay";

function MainPage(props) {
  return (
    <div className="wrapper">
      {/* 검색창 */}
      {props.Search === true && <SearchOverlay setSearch={props.setSearch} />}

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
        <MainContent />

        {/* 우측 aside */}
        <RightSidebar />
      </div>
    </div>
  );
}

export default MainPage;
