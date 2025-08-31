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
      return 
    },

    // 단순한 수량 증가 + 버튼
    addCount: function (state, action) {},

    // 단순한 수량 감소 - 버튼
    decreaseCount: function (state, action) {},

    // 장바구니 비우기
  },
});

let wishlist = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    // 상품 추가 - 위시리스트 목록에 없으면 상품 추가 / 이미 있으면 무시 - 하트버튼
    // 상품 삭제
    // 상품 장바구니로 이동
    // 위시리스트 비우기
    // 위시리스트에 있는 목록들 장바구니로 이동
  },
});
export default configureStore({
  reducer: { cart: cart.reducer },
});

export let { addItem, removeItem, decreaseItem, addCount, decreaseCount } =
  cart.actions;
