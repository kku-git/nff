import Footer from "./Footer";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./../store/userSlice.js";
import { useState } from "react";

function LoginContent(props) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userInfo = useSelector((state) => state.user.info);

  return (
    <main>
      <Logo
        setLeftSidebarToggle={props.setLeftSidebarToggle}
        setRightSidebarToggle={props.setRightSidebarToggle}
      />
      {/* {isLoggedIn ? (
        <div>
          <p>회원정보</p>
          <input type="text" />
        </div>
      ) : (
        <div>
          <p>회원정보</p>
          <input type="text" />
        </div>
      )} */}

      <Footer />
    </main>
  );
}

export default LoginContent;
