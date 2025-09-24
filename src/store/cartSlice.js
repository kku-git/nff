import { createSlice } from "@reduxjs/toolkit";

// 장바구니
let cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // 상품 추가 및 수량 증가 - 이미 있으면 수량 증가, 없으면 상품 추가
    addCartItem: function (state, action) {
      const found = state.find((item) => item.id === action.payload.id);

      if (found) {
        found.count++;
      } else {
        state.push(action.payload);
      }
    },

    // 상품 삭제
    removeCartItem: function (state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    // 단순한 수량 증가 + 버튼
    addCount: function (state, action) {
      let 번호 = state.findIndex((item) => item.id === action.payload);
      state[번호].count++;
    },

    // 단순한 수량 감소 - 버튼
    decreaseCount: function (state, action) {
      let 번호 = state.findIndex((item) => item.id === action.payload);

      if (state[번호].count > 1) {
        state[번호].count--;
      }
    },

    // 장바구니 비우기
    clearCart: function () {
      return [];
    },

    // 반지 사이즈 상태 업데이트
    updateItemSize: (state, action) => {
      const { id, size } = action.payload;
      const found = state.find((item) => item.id === id);

      if (found) {
        found.size = size;
      }
    },
  },
});

export const {
  addCartItem,
  addCount,
  decreaseCount,
  removeCartItem,
  clearCart,
  updateItemSize,
} = cart.actions;

export default cart.reducer;
