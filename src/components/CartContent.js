import Footer from "./Footer";
import Logo from "./Logo";

function CartContent(props) {
  return (
    <main>
      <Logo
        setLeftSidebarToggle={props.setLeftSidebarToggle}
        setRightSidebarToggle={props.setRightSidebarToggle}
      />
      {/* 장바구니*/}
      <div className="cart-container">
        <div className="cart-header">
          <p className="cart-title">CART</p>
          <div className="cart-actions">
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
              <div className="name-price">
                <p className="item-name">black-ring</p>
                <p className="item-price">KRW 48,000</p>
              </div>
              <div className="item-count">
                <button class="quantity-plus">
                  <img src="/plus.svg"></img>
                </button>
                <span class="quantity-number">0</span>
                <button class="quantity-minus">
                  <img src="/minus.svg"></img>
                </button>
              </div>
            </div>
            <div className="item-remove">
              <button className="remove-button">삭제</button>
            </div>
          </div>
          {/* 장바구니 아이템 1 */}
          <div className="cart-item">
            <div className="item-image">
              <img src="/black-ring.jpg" alt="black-ring" />
            </div>
            <div className="item-info">
              <div className="name-price">
                <p className="item-name">black-ring</p>
                <p className="item-price">KRW 48,000</p>
              </div>
              <div className="item-count">
                <button class="quantity-plus">
                  <img src="/plus.svg"></img>
                </button>
                <span class="quantity-number">0</span>
                <button class="quantity-minus">
                  <img src="/minus.svg"></img>
                </button>
              </div>
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
    </main>
  );
}
export default CartContent;
