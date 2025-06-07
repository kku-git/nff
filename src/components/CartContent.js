import { Link } from "react-router-dom";
import Footer from "./Footer";

function CartContent() {
  return (
    <div className="cart-content">
      <div className="image-container">
        <Link to="/">
          <img
            src="https://kku-git.github.io/nff_product/logo.svg"
            alt="로고"
            className="logo-image"
          />
        </Link>
      </div>
      {/* 장바구니*/}
      <div className="cart-container">
        <div className="cart-header">
          <h2 className="cart-title">CART</h2>
          <div className="cart-actions">
            <button className="select-all">전체선택</button>
            <button className="deselect-all">전체삭제</button>
          </div>
        </div>

        <div className="cart-items">
          {/* 장바구니 아이템 1 */}
          <div className="cart-item">
            <div className="item-image">
              <img src="/black-ring.jpg" alt="black-ring" />
            </div>
            <div className="item-info">
              <p className="item-name">black-ring</p>
              <p className="item-price">KRW 48,000</p>
            </div>
            <div className="item-remove">
              <button className="remove-button">삭제</button>
            </div>
          </div>

          {/* 장바구니 아이템 2 */}
          <div className="cart-item">
            <div className="item-image">
              <img src="/black-ring.jpg" alt="black-ring" />
            </div>
            <div className="item-info">
              <p className="item-name">black- ring</p>
              <p className="item-price">KRW 48,000</p>
            </div>
            <div className="item-remove">
              <button className="remove-button">삭제</button>
            </div>
          </div>
        </div>

        <div className="cart-summary">
          <div className="summary-row">
            <span>배송비</span>
            <span>KRW 0</span>
          </div>
          <div className="summary-row">
            <span>총 상품금액</span>
            <span>KRW 48,000</span>
          </div>
        </div>
        {/* 장바구니 푸터 */}
        <div className="cart-footer">
          <button className="checkout-button">주문하기</button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
export default CartContent;
