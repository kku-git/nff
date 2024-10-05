import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pages">
      {/* Previous Page Button */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (currentPage > 1) {
            onPageChange(currentPage - 1);
          }
        }}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </a>

      {/* Page Numbers */}
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
            <a href="#">{i + 1}</a>
          </li>
        ))}
      </ol>

      {/* Next Page Button */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
          }
        }}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </a>
    </div>
  );
}

export default Pagination;
