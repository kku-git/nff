import Footer from "./Footer";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./../store/userSlice.js";
import { useState } from "react";

function LoginContent(props) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userInfo = useSelector((state) => state.user.info);
  const [username, setUsername] = useState(""); // 입력값 저장
  const handleLogin = () => {
    if (username.trim() === "") {
      alert("아이디를 입력해주세요!");
      return;
    }
    dispatch(login({ name: username })); // 입력한 값 저장
    alert(`${username}님 로그인 되었습니다!`);
  };

  const handleLogout = () => {
    dispatch(logout());
    alert("로그아웃 되었습니다!");
  };

  return (
    <main>
      <Logo
        setLeftSidebarToggle={props.setLeftSidebarToggle}
        setRightSidebarToggle={props.setRightSidebarToggle}
      />
      {isLoggedIn ? (
        <div>
          <h2>{userInfo?.name}님 환영합니다 🎉</h2>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <div>
          <h2>회원정보</h2>
          <input
            type="text"
            placeholder="아이디 입력"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // 입력될 때마다 username 업데이트
          />
          <button onClick={handleLogin}>로그인하기</button>
        </div>
      )}

      <Footer />
    </main>
  );
}

export default LoginContent;
