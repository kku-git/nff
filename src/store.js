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
    removeItem: function (state, action) {},

    // 수량 감소 및 수량 1일 경우 상품 삭제
    decreaseItem: function (state, action) {},

    // 단순한 수량 증가 + 버튼
    addCount: function (state, action) {},

    // 단순한 수량 감소 - 버튼
    decreaseCount: function (state, action) {},
  },
});

export default configureStore({
  reducer: { cart: cart.reducer },
});

export let { addItem, removeItem, decreaseItem, addCount, decreaseCount } =
  cart.actions;
