import Footer from "./Footer";
import Logo from "./Logo";
function DetailContent(props) {
  return (
    <main>
      <Logo
        setLeftSidebarToggle={props.setLeftSidebarToggle}
        setRightSidebarToggle={props.setRightSidebarToggle}
      />
      <div className="detail-container">
        <div className="product-summary">
          <div className="product-image">
            <img src="/black-ring.jpg" alt="chess ring_khaki" />
          </div>
          <div className="product-info">
            <p className="product-name">chess ring_khaki</p>
            <p className="product-price">KRW 32,000</p>
            <p className="product-material">Material: pvc + resin</p>
            <p>
              해당 상품은 주문 제작 상품으로 <br />
              제작 기간 영업일 기준 3~7일 소요됩니다.
              <br />
              핸드메이드 특성상 컬러, 패턴 및 형태가 <br />
              일정하지 않은 점 참고 바랍니다.
            </p>{" "}
            <div className="select-wrapper">
              <select className="size-select">
                <option value="">사이즈를 선택해주세요</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
              <img src="/dropdown-icon.svg" alt="" className="select-icon" />
            </div>
            <div className="action-buttons">
              <button className="wishlist-button">
                <img src="/heart-outline.svg" alt="" />
              </button>
              <button className="buy-button">BUY</button>
              <button className="add-button">ADD TO CART</button>
            </div>
          </div>
        </div>
        <div className="product-detail">
          <img src="/detail1.svg" alt="상세 이미지 1" />
          <img src="/detail2.svg" alt="상세 이미지 2" />
          <img src="/detail3.svg" alt="상세 이미지 3" />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default DetailContent;
