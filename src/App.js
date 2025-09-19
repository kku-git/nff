import { useEffect, useState } from "react";
import "./style/main.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FingerPage from "./pages/FingerPage";
import NeckPage from "./pages/NeckPage";
import HairPage from "./pages/HairPage";
import CartPage from "./pages/CartPage";
import WishListPage from "./pages/WishListPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";

function App() {
  // 사이드바 열고 닫기
  const [leftSidebarToggle, setLeftSidebarToggle] = useState(false);
  const [rightSidebarToggle, setRightSidebarToggle] = useState(false);

  // 카테고리 버튼
  let [isShopHovered, setIsShopHovered] = useState(false);
  let [isBoardHovered, setIsBoardHovered] = useState(false);

  // 검색창 버튼
  let [Search, setSearch] = useState(false);

  // 페이지 상태 정의
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [totalPages, setTotalPages] = useState(1);

  // 페이지 변경 핸들러
  function handlePageChange(page) {
    setCurrentPage(page); // 페이지를 변경할 때 상태를 업데이트
  }

  // 총 페이지 수 업데이트
  function updateTotalPages(pages) {
    setTotalPages(pages);
  }

  // 페이지
  const [currentCategory, setCurrentCategory] = useState("fingers");

  // 카테고리 변경 시 페이지를 1로 리셋하는 useEffect
  useEffect(() => {
    setCurrentPage(1); // 카테고리 변경 시 첫 페이지로 리셋
  }, [currentCategory]);

  // 카테고리 변경 핸들러
  function handleCategoryChange(category) {
    setCurrentCategory(category);
  }
  const LoggedIn = useSelector((state) => state.user.LoggedIn);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPage
            Search={Search}
            setSearch={setSearch}
            isShopHovered={isShopHovered}
            setIsShopHovered={setIsShopHovered}
            isBoardHovered={isBoardHovered}
            setIsBoardHovered={setIsBoardHovered}
            handleCategoryChange={handleCategoryChange}
            leftSidebarToggle={leftSidebarToggle}
            setLeftSidebarToggle={setLeftSidebarToggle}
            rightSidebarToggle={rightSidebarToggle}
            setRightSidebarToggle={setRightSidebarToggle}
          />
        }
      />
      <Route path="/shop" element={<Navigate to="/" replace />} />
      <Route
        path="/shop/fingers"
        element={
          <FingerPage
            Search={Search}
            setSearch={setSearch}
            isShopHovered={isShopHovered}
            setIsShopHovered={setIsShopHovered}
            isBoardHovered={isBoardHovered}
            setIsBoardHovered={setIsBoardHovered}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            updateTotalPages={updateTotalPages}
            handleCategoryChange={handleCategoryChange}
            leftSidebarToggle={leftSidebarToggle}
            setLeftSidebarToggle={setLeftSidebarToggle}
            rightSidebarToggle={rightSidebarToggle}
            setRightSidebarToggle={setRightSidebarToggle}
          />
        }
      />
      <Route
        path="/shop/hair"
        element={
          <HairPage
            Search={Search}
            setSearch={setSearch}
            isShopHovered={isShopHovered}
            setIsShopHovered={setIsShopHovered}
            isBoardHovered={isBoardHovered}
            setIsBoardHovered={setIsBoardHovered}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            updateTotalPages={updateTotalPages}
            handleCategoryChange={handleCategoryChange}
            leftSidebarToggle={leftSidebarToggle}
            setLeftSidebarToggle={setLeftSidebarToggle}
            rightSidebarToggle={rightSidebarToggle}
            setRightSidebarToggle={setRightSidebarToggle}
          />
        }
      />
      <Route
        path="/shop/necklace"
        element={
          <NeckPage
            Search={Search}
            setSearch={setSearch}
            isShopHovered={isShopHovered}
            setIsShopHovered={setIsShopHovered}
            isBoardHovered={isBoardHovered}
            setIsBoardHovered={setIsBoardHovered}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            updateTotalPages={updateTotalPages}
            handleCategoryChange={handleCategoryChange}
            leftSidebarToggle={leftSidebarToggle}
            setLeftSidebarToggle={setLeftSidebarToggle}
            rightSidebarToggle={rightSidebarToggle}
            setRightSidebarToggle={setRightSidebarToggle}
          />
        }
      />
      <Route
        path="/cart"
        element={
          <CartPage
            Search={Search}
            setSearch={setSearch}
            isShopHovered={isShopHovered}
            setIsShopHovered={setIsShopHovered}
            isBoardHovered={isBoardHovered}
            setIsBoardHovered={setIsBoardHovered}
            handleCategoryChange={handleCategoryChange}
            leftSidebarToggle={leftSidebarToggle}
            setLeftSidebarToggle={setLeftSidebarToggle}
            rightSidebarToggle={rightSidebarToggle}
            setRightSidebarToggle={setRightSidebarToggle}
          />
        }
      />
      <Route
        path="/wishlist"
        element={
          LoggedIn ? (
            <WishListPage
              Search={Search}
              setSearch={setSearch}
              isShopHovered={isShopHovered}
              setIsShopHovered={setIsShopHovered}
              isBoardHovered={isBoardHovered}
              setIsBoardHovered={setIsBoardHovered}
              handleCategoryChange={handleCategoryChange}
              leftSidebarToggle={leftSidebarToggle}
              setLeftSidebarToggle={setLeftSidebarToggle}
              rightSidebarToggle={rightSidebarToggle}
              setRightSidebarToggle={setRightSidebarToggle}
            />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/detail/:category/:id"
        element={
          <DetailPage
            Search={Search}
            setSearch={setSearch}
            isShopHovered={isShopHovered}
            setIsShopHovered={setIsShopHovered}
            isBoardHovered={isBoardHovered}
            setIsBoardHovered={setIsBoardHovered}
            handleCategoryChange={handleCategoryChange}
            leftSidebarToggle={leftSidebarToggle}
            setLeftSidebarToggle={setLeftSidebarToggle}
            rightSidebarToggle={rightSidebarToggle}
            setRightSidebarToggle={setRightSidebarToggle}
          />
        }
      />

      <Route
        path="/login"
        element={
          <LoginPage
            Search={Search}
            setSearch={setSearch}
            isShopHovered={isShopHovered}
            setIsShopHovered={setIsShopHovered}
            isBoardHovered={isBoardHovered}
            setIsBoardHovered={setIsBoardHovered}
            handleCategoryChange={handleCategoryChange}
            leftSidebarToggle={leftSidebarToggle}
            setLeftSidebarToggle={setLeftSidebarToggle}
            rightSidebarToggle={rightSidebarToggle}
            setRightSidebarToggle={setRightSidebarToggle}
          />
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
