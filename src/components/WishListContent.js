import Footer from "./Footer";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { removeWishlistItem, clearWishlist, addCartItem } from "./../store.js";

function WishListContent(props) {
  const wishListItems = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <main>
      <Logo
        setLeftSidebarToggle={props.setLeftSidebarToggle}
        setRightSidebarToggle={props.setRightSidebarToggle}
      />
      {/*위시리스트*/}
      <div className="wish-container">
        <div className="wish-header">
          <p className="wish-title">WISH LIST</p>
          <div className="wish-actions">
            <button
              className="delete-all"
              onClick={() => {
                dispatch(clearWishlist());
              }}
            >
              전체삭제
            </button>
          </div>
        </div>

        {/* 위시리스트 아이템 */}
        {wishListItems.length === 0 ? (
          <p className="empty-item">위시리스트가 비어있어요.</p>
        ) : (
          <div className="wish-items">
            {wishListItems.map((item) => {
              return (
                <div className="wish-item">
                  <div className="item-image">
                    <img
                      src={`https://kku-git.github.io/nff_product/${item.category}/${item.category}${item.id}.jpg`}
                      alt={item.title}
                    />
                  </div>
                  <div className="item-info">
                    <p className="item-name">{item.title}</p>
                    <p className="item-price">{item.price}</p>
                  </div>
                  <div className="trash-cart">
                    <button
                      className="trash-button"
                      onClick={() => {
                        dispatch(removeWishlistItem(item));
                      }}
                    >
                      <img src="/trash.svg"></img>
                    </button>
                    <button
                      className="cart-button"
                      onClick={() => {
                        dispatch(addCartItem({ ...item, count: 1 }));
                        dispatch(removeWishlistItem(item.id));
                      }}
                    >
                      <img src="/cart.svg"></img>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 위시리스트 푸터 */}
        <div className="wish-footer">
          <button
            className="checkout-button"
            onClick={() => {
              wishListItems.forEach((item) => {
                dispatch(addCartItem({ ...item, count: 1 }));
                dispatch(clearWishlist());
              });
            }}
          >
            전체 상품 주문
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default WishListContent;
