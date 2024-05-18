import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { Button } from "primereact/button";
import { FaSearchLocation } from "react-icons/fa";


import { InputText } from "primereact/inputtext";

const Header = () => {
  return (

    <div className="main_header">
      <div className="main_header_logo">Travel Advisor </div>
      <div className="main_header2">
        <div className="main_header_search">Explore new places</div>
        <i></i>
        
        <InputText class="input-search"  placeholder="Search here"></InputText>
        <label><div className="search-box"><FaSearchLocation /></div></label>
      
      </div>
    </div>

  );
};

export default Header;
