import React from "react";

const LanguageSelector = ()=>{
  return (
      <li className="dropdown d-none d-lg-block">
          <a className="nav-link dropdown-toggle mr-0 waves-effect waves-light"
             data-toggle="dropdown" href="#"
             role="button" aria-haspopup="false" aria-expanded="false">
              <img src="assets/images/flags/us.jpg" alt="user-image" className="mr-1"
                   height="12"/> <span
              className="align-middle">English <i
              className="mdi mdi-chevron-down"></i> </span>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
              <a href="javascript:void(0);" className="dropdown-item notify-item">
                  <img src="assets/images/flags/germany.jpg" alt="user-image" className="mr-1"
                       height="12"/> <span
                  className="align-middle">German</span>
              </a>

              <a href="javascript:void(0);" className="dropdown-item notify-item">
                  <img src="assets/images/flags/italy.jpg" alt="user-image" className="mr-1"
                       height="12"/> <span
                  className="align-middle">Italian</span>
              </a>

              <a href="javascript:void(0);" className="dropdown-item notify-item">
                  <img src="assets/images/flags/spain.jpg" alt="user-image" className="mr-1"
                       height="12"/> <span
                  className="align-middle">Spanish</span>
              </a>

              <a href="javascript:void(0);" className="dropdown-item notify-item">
                  <img src="assets/images/flags/russia.jpg" alt="user-image" className="mr-1"
                       height="12"/> <span
                  className="align-middle">Russian</span>
              </a>
          </div>
      </li>
  )
};

export default LanguageSelector;