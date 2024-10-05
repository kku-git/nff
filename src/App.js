import { useState } from "react";
import "./style/main.scss";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  Navigate,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import FingerPage from "./pages/FingerPage";
import NeckPage from "./pages/NeckPage";
import HairPage from "./pages/HairPage";

function App() {
  // 카테고리 버튼
  let [isShopHovered, setIsShopHovered] = useState(false);
  let [isBoardHovered, setIsBoardHovered] = useState(false);
  // 검색창 버튼
  let [Search, setSearch] = useState(false);

  // 페이지 상태 정의
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const totalPages = 3; // 총 페이지 수 (예시로 3페이지로 설정)
  // 페이지 변경 핸들러
  function handlePageChange(page) {
    setCurrentPage(page); // 페이지를 변경할 때 상태를 업데이트
  }
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
          />
        }
      />
      <Route path="/shop" element={<Navigate to="/shop/fingers" replace />} />
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
          />
        }
      />
      <Route
        path="/shop/neck"
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
          />
        }
      />
      <Route path="*" element={<div>없는페이지</div>} />
    </Routes>
  );
}

export default App;
