import React,{useEffect,useState} from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar=() => {
 
  const [click, setClick] = useState(false);

 const handleClick = () => setClick(!click);
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 100 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }
 // const [isMenu, setisMenu] = useState(false);

//   const toggleClass = () => {
//     setisMenu(isMenu === false ? true : false);
// };
//   let boxClass = ["main-menu menu-right menuq1"];
//   if(isMenu) {
//       boxClass.push('menuq2');
//   }else{
//       boxClass.push('');
//   }
//   const [isMenuSubMenu, setMenuSubMenu] = useState(false);
//   const toggleSubmenu = () => {
//     setMenuSubMenu(isMenuSubMenu === false ? true : false);
//   };

//   const mouseLeave = () => {
//   setMenuSubMenu(isMenuSubMenu === true ? false : true);
//   console.log("leave");
// };


//   let boxClassSubMenu = ["sub__menus"];
//   if(isMenuSubMenu) {
//       boxClassSubMenu.push('sub__menus__Active');
//   }else {
//       boxClassSubMenu.push('');
//   }
  return (
    <>
    <header className={x.join(" ")}>
<nav className="navbar">
  <div className="nav-container">
    <NavLink exact to="/" className="nav-logo">
   jeel 
    </NavLink>

    <ul className={click ? "nav-menu active" : "nav-menu"}>
     
      {/* <li onMouseEnter={toggleSubmenu} onMouseLeave={mouseLeave} className="nav-links menu-item sub__menus__active" > SERVICES 
                            <ul className={ boxClassSubMenu.join(' ')} > 
                                <li> <NavLink onClick={toggleClass} className="nav-links"  to={`/Online`}> Online Shop </NavLink> </li>
                                <li><NavLink onClick={toggleClass} className="nav-links" to={`/Offline`}> Offline Shop </NavLink> </li>
                            </ul>
                        </li> */}
      <li className="nav-item">
        <NavLink
          exact
          to="/Popular"
          activeClassName="active"
          className="nav-links"
          onClick={handleClick}
        >
         Popular
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          exact
          to="/Pizza"
          activeClassName="active"
          className="nav-links"
          onClick={handleClick}
        >
         Pizza
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          to="/Fetchapi"
          activeClassName="active"
          className="nav-links"
          onClick={handleClick}
        >
         Fetchapi
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          exact
          to="/Checkout"
          activeClassName="active"
          className="nav-links"
          onClick={handleClick}
        >
        Checkout
        </NavLink>
      </li>
     
    </ul>
    <div className="nav-icon" onClick={handleClick}>
      <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
    </div>
  </div>
</nav>
   </header>   
</>
  )
};

export default Navbar;

// import React, { useState,useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import "./NavBar.css";

// // function NavBar() {
  

//   const Navbar=() => {
//     const [click, setClick] = useState(false);

//     const handleClick = () => setClick(!click); 
//     const [scrolled,setScrolled]=React.useState(true);
//   const handleScroll=() => {
//       const offset=window.scrollY;
//       console.log(offset);
//       if(offset > 20 ){
//         setScrolled(true);
//       }
//       else{
//         setScrolled(false);
//       }
//     }
  
//     useEffect(() => {
//       window.addEventListener('scroll',handleScroll)
//     })

//   let navbarClasses=['navbar'];
//     if(scrolled){
//       navbarClasses.push('scrolled');
//     }

//   return (
   
//   );
// }

// export default Navbar;