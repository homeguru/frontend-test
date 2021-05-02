import React from "react";
import "./styles.css"
import {ReactComponent as Logo}  from "../../assets/images/Marvel_Logo.svg"

const Header = () =>{

  return(
    <header>
      <Logo id = "logo" onClick={()=>{window.location = "/"}} />
    </header>
  );

}

export default Header;
