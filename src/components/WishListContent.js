import Footer from "./Footer";
import Logo from "./Logo";

function WishListContent(props) {
  return (
    <main>
      <Logo
        setLeftSidebarToggle={props.setLeftSidebarToggle}
        setRightSidebarToggle={props.setRightSidebarToggle}
      />
      {/* 장바구니*/}
      <div className="wish-container">
        <div className="wish-header">
          <p className="wish-title">WISH LIST</p>
          <div className="wish-actions">
            <button className="deselect-all">전체삭제</button>
          </div>
        </div>

        <div className="wish-items">
          {/* 장바구니 아이템 1 */}
          <div className="wish-item">
            <div className="item-image">
              <img src="/black-ring.jpg" alt="black-ring" />
            </div>
            <div className="item-info">
              <p className="item-name">black-ring</p>
              <p className="item-price">KRW 48,000</p>
            </div>
            <div className="trash-cart">
              <button className="trash-button">
                <img src="/trash.svg"></img>
              </button>
              <button className="cart-button">
                <img src="/cart.svg"></img>
              </button>
            </div>
          </div>
          {/* 장바구니 아이템 2 */}
          <div className="wish-item">
            <div className="item-image">
              <img src="/black-ring.jpg" alt="black-ring" />
            </div>
            <div className="item-info">
              <p className="item-name">black-ring</p>
              <p className="item-price">KRW 48,000</p>
            </div>
            <div className="trash-cart">
              <button className="trash-button">
                <img src="/trash.svg"></img>
              </button>
              <button className="cart-button">
                <img src="/cart.svg"></img>
              </button>
            </div>
          </div>
        </div>

        {/* 장바구니 푸터 */}
        <div className="wish-footer">
          <button className="checkout-button">전체 상품 주문</button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default WishListContent;
