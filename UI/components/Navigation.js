import { NavLink } from "react-router-dom";
import React from "react";

function navigation(){
    return (
        <div className="navigation">
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
            <NavLink className="navbar-brand" to="/">
            <button><h4>Home</h4></button>
            </NavLink>
              <div>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/available_scholarships">
                    <><h1>Available Scholarships <span className="sr-only">(current)</span></h1>
                      </>
                    </NavLink>
                  </li>
                  
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Student_profile">
                      <><h1>Student Profile</h1></>
                    </NavLink>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
}

export default navigation;