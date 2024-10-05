import axios from "axios";
import { useEffect, useState } from "react";

function HairItems({ currentPage, itemsPerPage }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://kku-git.github.io/nff_product/hair.json")
      .then((response) => {
        setItems(response.data);
      })
      .catch(() => {
        console.log("실패함");
      });
  }, []);

  if (items.length === 0) {
    return <p>LOADING...</p>;
  }

  // Calculate the index range for current page
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
            src={`https://kku-git.github.io/nff_product/hair/hair${
              startIndex + i + 1
            }.jpg`}
            alt={`hair ${startIndex + i + 1}`}
          />
        </div>
      ))}
    </div>
  );
}

export default HairItems;
