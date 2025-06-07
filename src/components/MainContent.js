import { Link } from "react-router-dom";
import Footer from "./Footer";

function MainContent() {
  return (
    <main>
      <div className="image-container">
        <Link to="/">
          <img
            src="https://kku-git.github.io/nff_product/logo.svg"
            alt="로고"
            className="logo-image"
          />
        </Link>
      </div>
      <div className="image-container">
        <img
          src="https://kku-git.github.io/nff_product/nff_bg.svg"
          alt="배경"
          className="bg-image"
        />
      </div>{" "}
      {/* Footer */}
      <Footer />
    </main>
  );
}

export default MainContent;
