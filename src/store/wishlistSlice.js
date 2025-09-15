import { createSlice } from "@reduxjs/toolkit";

let wishlist = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    // 상품 추가 - 위시리스트 목록에 없으면 상품 추가 / 이미 있으면 무시 - 하트버튼
    addWishlistItem: function (state, action) {
      const found = state.find((item) => item.id === action.payload.id);
      if (!found) {
        state.push(action.payload);
      }
    },

    // 상품 삭제
    removeWishlistItem: function (state, action) {
      return state.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.category !== action.payload.category
      );
    },

    // 위시리스트 비우기
    clearWishlist: function () {
      return [];
    },

    // 위시리스트에 있는 상품목록들 장바구니(cart)로 이동
    //컴포넌트에서 dispatch 두 번으로 처리
  },
});

export const { addWishlistItem, removeWishlistItem, clearWishlist } =
  wishlist.actions;

export default wishlist.reducer;
