import React from "react";
import SignIn from "../signin/signin"
import SignUp from "../signup/signup"

import "./member-styles.scss";


const memberForm = () => (
    <div  className="member">
        <SignIn />
        <SignUp />
    </div>
)

export default memberForm;