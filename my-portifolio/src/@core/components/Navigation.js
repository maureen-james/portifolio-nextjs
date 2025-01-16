import React from "react";

const NavigationBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#343a40", // Dark gray background
        padding: "10px 20px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="container-fluid">
        {/* Brand Name */}
        <a
          className="navbar-brand"
          href="#"
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
         Maureen Portifolio
        </a>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          {/* Centered Links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#page"
                style={{ color: "#fff", margin: "0 15px" }}
              >
                Introduction
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                style={{ color: "#fff", margin: "0 15px" }}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                style={{ color: "#fff", margin: "0 15px" }}
              >
               Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                style={{ color: "#fff", margin: "0 15px" }}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Download CV Button */}
          <a
            href="/static/cv.pdf"
            className="btn btn-warning"
            style={{
              fontWeight: "bold",
              borderRadius: "20px",
              padding: "5px 15px",
            }}
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
