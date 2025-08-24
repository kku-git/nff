import axios from "axios";
import Footer from "./Footer";
import Logo from "./Logo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DetailContent(props) {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://kku-git.github.io/nff_product/${category}.json`)
      .then((res) => {
        const item = res.data.find((item) => String(item.id) === id);
        setProduct(item);
      })
      .catch(() => {
        console.log("상품 데이터 불러오기 실패");
      });
  }, [category, id]);

  if (!product) return <p>로딩중...</p>;

  return (
    <main>
      <Logo
        setLeftSidebarToggle={props.setLeftSidebarToggle}
        setRightSidebarToggle={props.setRightSidebarToggle}
      />
      <div className="detail-container">
        <div className="product-summary">
          <div className="product-image">
            <img
              src={`https://kku-git.github.io/nff_product/${category}/${category}${product.id}.jpg`}
              alt={product.title}
            />
          </div>
          <div className="product-info">
            <p className="product-name">{product.title}</p>
            <p className="product-price">{product.price}</p>
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
              <button className="wishlist-button" onClick={() => {}}>
                <img src="/heart-outline.svg" alt="wishlist" />
              </button>
              <button className="buy-button" onClick={() => {}}>
                BUY
              </button>
              <button className="add-button" onClick={() => {}}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="product-detail">
          <img
            src={`https://kku-git.github.io/nff_product/${category}/${category}${id}_detail.jpg`}
            alt={`상세 이미지 ${id}`}
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default DetailContent;
