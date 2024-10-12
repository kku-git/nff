function SearchOverlay(props) {
  return (
    <div className="search-container">
      <div
        className="search-overlay"
        onClick={function () {
          props.setSearch(false);
        }}
      ></div>
      {/* 검색창 */}
      <div className="search">
        <input
          type="text"
          className="search-box"
          placeholder="Press Enter to Search"
        />
      </div>
    </div>
  );
}

export default SearchOverlay;
