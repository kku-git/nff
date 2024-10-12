import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pages">
      {/* 페이지 버튼 */}
      <span
        onClick={(e) => {
          e.preventDefault();
          if (currentPage > 1) {
            onPageChange(currentPage - 1);
          }
        }}
        style={{ cursor: "pointer" }}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </span>

      {/* 페이지 넘버 */}
      <ol>
        {Array.from({ length: totalPages }, (_, i) => (
          <li
            key={i}
            onClick={() => onPageChange(i + 1)}
            style={{
              cursor: "pointer",
              fontWeight: currentPage === i + 1 ? "bold" : "normal",
            }}
          >
            <span>{i + 1}</span>
          </li>
        ))}
      </ol>

      {/* 다음 페이지 버튼 */}
      <span
        onClick={(e) => {
          e.preventDefault();
          if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
          }
        }}
        style={{ cursor: "pointer" }}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </span>
    </div>
  );
}

export default Pagination;
