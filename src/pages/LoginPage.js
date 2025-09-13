import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Header from "../components/Header";
import SearchOverlay from "../components/SearchOverlay";
import LoginContent from "../components/LoginContent";

function LoginPage(props) {
  return (
    <div className="wrapper">
      {props.Search && <SearchOverlay setSearch={props.setSearch} />}
      <Header />

      <div className="container">
        <LeftSidebar
          className={props.leftSidebarToggle ? "open" : ""}
          setSearch={props.setSearch}
          setIsShopHovered={props.setIsShopHovered}
          isShopHovered={props.isShopHovered}
          setIsBoardHovered={props.setIsBoardHovered}
          isBoardHovered={props.isBoardHovered}
          handleCategoryChange={props.handleCategoryChange}
          setLeftSidebarToggle={props.setLeftSidebarToggle}
        />

        <LoginContent
          setLeftSidebarToggle={props.setLeftSidebarToggle}
          setRightSidebarToggle={props.setRightSidebarToggle}
        />

        <RightSidebar
          className={props.rightSidebarToggle ? "open" : ""}
          setRightSidebarToggle={props.setRightSidebarToggle}
        />
      </div>
    </div>
  );
}
export default LoginPage;
