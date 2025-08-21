import "./HeaderStyle.css";
import ShowDrop from "./ShowDrop";
import ProductDrop from "./PropductDrop";
import Navbar from "./Navbar";
import SearchDrop from "./SearchDrop";
import ProfileDrop from "./ProfileDrop";
import { useEffect, useState } from "react";
const Header = () => {
  const [Show, setShow] = useState(false);
  const [Product, setProduct] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [Search, SetSearchDrop] =useState(false)
  const [Profile, setProfileDrop] =useState(false)

  useEffect(() => {
    setShow(false);
  }, []);
  return (
    <div className="Header_Container">
      <div className="shop_name_wrapper">
        <div className="shop_name">
          <h1>shop</h1>
          <span>Right</span>
        </div>
      </div>

      <div className="navbar_container">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li onMouseEnter={() => setProduct(!Product)}>Products</li>
            <li onMouseEnter={() => setShow(!Show)}>Shop</li>
          </ul>
          {Show ? <ShowDrop /> : null}
          {Product ? <ProductDrop /> : null}
        </nav>
      </div>

      <div className="profile_with_icon">
        <div className="icon_with_count">
          <i className="fa-solid fa-cart-shopping"></i>
          <div className="icon_count">0</div>
        </div>
        <div className="icon_with_count">
          <i className="fa-solid fa-heart"></i>
          <div className="icon_count">0</div>
        </div>
        <i onClick={() => SetSearchDrop(!Search)} className="fa-solid fa-magnifying-glass"></i>
        <div className="search_drop">
          {
            Search ? <SearchDrop /> : null
          }
        </div>
        <i className="fa-solid fa-circle-user" onClick={()=> setProfileDrop(!Profile)}></i>
        <div className="circle_user_dropdown">
          {
            Profile ? <ProfileDrop /> : null
          }
        </div>
        <i
          className="fa-solid fa-bars"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        ></i>
        <div className="mobile_nav">{isNavbarOpen ? <Navbar /> : null}</div>
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};
export default Header;
