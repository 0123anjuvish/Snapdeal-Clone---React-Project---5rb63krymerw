import React from "react";
import img1 from '../Images/img2.png';
import { FaMobileAlt } from "react-icons/fa";
import { FaSearch,FaUserCircle,FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
//import {HiOutlineShoppingCart } from "react-icons/fa";
//import { FaUserCircle } from "react-icons/fa";
const Header = ()=>{
    return(
<>
<div className="navbar-header">
    <section className="header-top">
        <div className="header-top-wraper" >
            <span className="left-side-header">Brand Waali Quality, Bazaar Waali Deal! </span>
                <div className="right-side-header">
<span className="a1"> Impact@Snapdeal </span>
<span className="a2"> Gift Cards </span>
<span className="a3"> Help Center</span>
<span className="a4"> Sell On Snapdeal</span>
<span className="a5"> 

<span className="dnld"><FaMobileAlt /> Download App</span>
</span>             
            </div>
        </div>
    </section>
    <div className="main-navbar">
        <div className="logo">
        <a href="">
        <img className="image" src={img1} height="60px" width="150px"></img>
        </a>
        </div>
    <div className="search-box">
        <input type="text" className="search-input" placeholder="Search products & brands"/>
    </div>
    
        <button type="button" className="btn">
            <FaSearch />
        Search</button>
    
    <div className="cart">
    <Link to="/cart">Add to Cart 
    <FaCartArrowDown />
    </Link> 
    </div>
    <div className="signin">
       <Link to="/account">Sign In 
    <FaUserCircle />
    </Link> 
    </div>
    </div>
</div>
</>
    )
}
export default Header;