import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./navbar.scss";
import LoginUser from "../../login/Login-user";

function Navbar() {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/");
  };
  const goToLogin = () => {
    navigate("/Login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-uppercase">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-3">
            <div className="navbar-brand">Momprixx</div>
          </div>
        </div>

        <div className="col-8 menu">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active" onClick={goToProducts}>
                <a className="nav-link active">Relojes</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link active ">Carteras</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link active ">Joyas</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1 user">
          <div className="user-icon">
            <FaUser onClick={goToLogin} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

{
  /* <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top "   >
<div class="container">
  <div class="row align-items-center">
    <div class="col">
      <div class="navbar-brand">Momprixx</div>
    </div>
    <div  class="col">
      <div class="navbar-menu">
      </div>

    </div>
    </div>
   
  </div>
 */
}
