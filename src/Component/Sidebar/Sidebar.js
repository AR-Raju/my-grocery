import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div class="sidenav">
      <a href="#manage">Manage Products</a>
      <a href="/admin/addProducts">Add Products</a>
      <a href="#edit">Edit Products</a>
    </div>
  );
};

export default Sidebar;
