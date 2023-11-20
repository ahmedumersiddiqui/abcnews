import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            ABCNews
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="business" className="nav-link">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link to="entertainment" className="nav-link">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link to="health" className="nav-link">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link to="science" className="nav-link">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link to="sports" className="nav-link">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link to="technology" className="nav-link">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-1 mx-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
          <Link to={`/search/${searchQuery}`}>
            <button className="btn btn-outline-light mx-2">Search</button>
          </Link>
        </form>
      </nav>
    </div>
  );
};

export default NavBar;
