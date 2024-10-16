import axios from "axios";
import { useEffect, useState } from "react";

function FingerItems({ currentPage, itemsPerPage, updateTotalPages }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://kku-git.github.io/nff_product/fingers.json")
      .then((response) => {
        const fetchedItems = response.data;
        setItems(fetchedItems);

        // 총 페이지 수 계산 및 업데이트
        const totalPages = Math.ceil(fetchedItems.length / itemsPerPage);
        updateTotalPages(totalPages); // 부모 컴포넌트에 페이지 수 업데이트
      })
      .catch(() => {
        console.log("실패함");
      });
  }, [itemsPerPage, updateTotalPages]);

  if (items.length === 0) {
    return <p>LOADING...</p>;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div className="item-container">
      {currentItems.map((a, i) => (
        <div key={i} className="item">
          <div className="overlay-wrap">
            <div className="overlay">
              <p>{a.title}</p>
              <p>{a.price}</p>
            </div>
          </div>
          <img
            src={`https://kku-git.github.io/nff_product/fingers/ring${
              startIndex + i + 1
            }.jpg`}
            alt={`ring ${startIndex + i + 1}`}
          />
        </div>
      ))}
    </div>
  );
}

export default FingerItems;
