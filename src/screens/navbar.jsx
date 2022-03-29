import React from "react";
import Logo from "../ui/SmartQ.png"

function Navbar() {
   
   return (<span className="Navb">
      <a href="#" className="logo lg">
         <img src={Logo} />
      </a>
      <input type="search" placeholder=" Search" name="search" className="srch srh">
      {/* <span class="icon-search"></span> */}
      </input>
   </span>)

}

export default Navbar