import { useState } from "react";

import IconDiv from "../IconDiv";

import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

export default function FormContainer(){
    const [isOpened, setIsOpened] = useState(true);

    return (
        <div className="d-flex flex-row align-items-center justify-content-between" 
            style={{height: 925}}
        >
            <IconDiv/>
            <div className="vr"/>
            <div className="d-flex flex-column align-items-center" style={{width: "50%"}}>
                {
                    isOpened ? <LoginForm /> : <RegistrationForm />
                }
            </div>
        </div>
    );
};