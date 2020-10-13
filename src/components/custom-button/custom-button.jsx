import React from "react";

import "./custom-button-styles.scss";

const CustomButton = ({children, isGoogleSignIn ,...others}) => (
    <div>
    <button className = {`${isGoogleSignIn ? "google-signin" : ""} custom-button`} {...others} >
    {children}
    </button>
    </div>
)

export default CustomButton;