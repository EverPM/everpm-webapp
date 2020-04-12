import React from "react";

const UserSettings = () => {
    return (
        <li className="dropdown notification-list">
            <a className="nav-link dropdown-toggle nav-user mr-0 waves-effect"
               data-toggle="dropdown" href="#"
               role="button" aria-haspopup="false" aria-expanded="false">
                <img src="assets/images/users/avatar-1.jpg" alt="user-image"
                     className="rounded-circle"/>
                <span className="pro-user-name ml-1">
                                            Maxine K  <i className="mdi mdi-chevron-down"></i>
                                    </span>
            </a>
            <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                <div className="dropdown-item noti-title">
                    <h6 className="text-overflow m-0">Welcome !</h6>
                </div>

                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <i className="fe-user"></i> <span>My Account</span>
                </a>

                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <i className="fe-settings"></i> <span>Settings</span>
                </a>

                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <i className="fe-help-circle"></i> <span>Support</span>
                </a>

                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <i className="fe-lock"></i> <span>Lock Screen</span>
                </a>

                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <i className="fe-log-out"></i> <span>Logout</span>
                </a>

            </div>
        </li>
    )
};

export default UserSettings;