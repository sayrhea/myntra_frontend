import { createRoot } from "react-dom/client";
import "./main.css";
import { ProductGrid } from "./src/pages/product-grid";

const root = createRoot(document.getElementById("app"));
const App = () => {
  return (
    <div className="shell">
      <div className="header">
        <div className="website-logo">
          <a className="sprite myntra-logo" href="/"></a>
        </div>
        <nav className="site-nav">
          <ul>
            <li className="site-nav-item">
              <a href="#">MEN</a>
            </li>
            <li className="site-nav-item">
              <a href="#">WOMEN</a>
            </li>
            <li className="site-nav-item">
              <a href="#">KIDS</a>
            </li>
            <li className="site-nav-item">
              <a href="#">HOME & LIVING</a>
            </li>
            <li className="site-nav-item">
              <a href="#">BEAUTY</a>
            </li>
            <li className="site-nav-item">
              <a href="#">STUDIO</a>
            </li>
          </ul>
        </nav>
        <div className="site-search">
          <input
            type="text"
            placeholder="Search for products, brands or more..."
          ></input>
        </div>
        <nav className="site-nav">
          <ul>
            <li className="site-nav-item account-nav-item">
              <span className="sprite profile-icon"></span>
              <span className="item-description">Profile</span>
            </li>
            <li className="site-nav-item account-nav-item">
              <span className="sprite wishlist-icon"></span>
              <span className="item-description">Wishlist</span>
            </li>
            <li className="site-nav-item account-nav-item">
              <span className="sprite bag-icon"></span>
              <span className="item-description">Bag</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navigation"></div>
      <div className="listing">
        <div className="filters"></div>
        <div className="product-grid">
          <ProductGrid></ProductGrid>
        </div>
      </div>
    </div>
  );
};
root.render(<App />);
