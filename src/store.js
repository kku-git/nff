import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // 상품 추가 및 수량 증가 - 이미 있으면 수량 증가, 없으면 상품 추가
    addItem: function (state, action) {
      const newItem = action.payload;
      const found = state.find((item) => item.id === newItem.id);

      if (found) {
        found.count++;
      } else {
        state.push(newItem);
      }
    },

    // 상품 삭제
    removeItem: function (state, action) {
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
    clearCart: function (state, action) {
      return [];
    },
  },
});

let wishlist = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    // 상품 추가 - 위시리스트 목록에 없으면 상품 추가 / 이미 있으면 무시 - 하트버튼
    // 상품 삭제
    removeItem: function (state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    // 위시리스트 비우기
    clearWishlist: function (state, action) {
      return [];
    },
    // 위시리스트에 있는 상품목록들 장바구니(cart)로 이동
  },
});
export default configureStore({
  reducer: { cart: cart.reducer },
});

export let { addItem, removeItem, decreaseItem, addCount, decreaseCount } =
  cart.actions;
