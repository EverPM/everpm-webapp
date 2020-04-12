import LanguageSelector from "./LanguageSelector";
import NotificationList from "./NotificationList";
import UserSettings from "./UserSettings";
import Logo from "./Logo";
import Menu from "./Menu";
import React from "react";

const Header = () => {

    return (
        <header id="topnav">
            <div className="navbar-custom">
                <div className="container-fluid">
                    <ul className="list-unstyled topnav-menu float-right mb-0">

                        <LanguageSelector/>

                        <NotificationList/>

                        <UserSettings/>

                        <li className="dropdown notification-list">
                            <a href="javascript:void(0);" className="nav-link right-bar-toggle waves-effect">
                                <i className="fe-settings noti-icon"></i>
                            </a>
                        </li>

                    </ul>

                    <Logo/>

                </div>
            </div>

            <Menu/>

        </header>
    );
};

export default Header;