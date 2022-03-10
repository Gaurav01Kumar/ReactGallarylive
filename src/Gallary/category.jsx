import React from 'react';
import { NavLink } from 'react-router-dom';
const category = () => {
  return (
    <div>
       <div className="main_Body_Category_page">
       <div className="category_Card">
       
       
       <NavLink to="#"  className="img"> <img src="12.png" alt="Category" /></NavLink>
       <div className="category_details">
        <h1>Nature</h1>
        <p>Click for seeMore</p>
       </div>
       </div>
       </div>
    </div>
  )
}

export default category;
