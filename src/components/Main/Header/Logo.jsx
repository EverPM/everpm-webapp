import React from "react";

const Logo = () => {
    return (
        <div className="logo-box">
            <a href="index.html" className="logo text-center">
                            <span className="logo-lg">
                                <img src="assets/images/logo-dark.png" alt="" height="22"/>
                            </span>
                <span className="logo-sm">
                                    <img src="assets/images/logo-sm.png" alt="" height="26"/>
                            </span>
            </a>
        </div>
    );
};

export default Logo;