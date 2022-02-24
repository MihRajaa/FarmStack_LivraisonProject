import React from "react";
import logo from "../delivery-logo.png";

const Headers = () => {
  return (
    <header>
      {/* <!-- Navbar --> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-white sticky">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarExample01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="logo">
                <img
                  src={logo}
                  style={{ height: 80, width: 100 }}
                  alt="not found"
                />
              </li>
              <li class="text h3 p-2 m-3">
                <text>Service Livraison</text>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar --> */}
    </header>
  );
};

export default Headers;
