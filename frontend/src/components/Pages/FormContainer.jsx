import { useState } from "react";
import { useNavigate } from "react-router-dom";

import IconDiv from "../IconDiv";

import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

export default function FormContainer({ initial }){
    const [isOpened, setIsOpened] = useState(initial);
    const navigate = useNavigate();

    const onClickHandler = (event) => {
        event.preventDefault();
        isOpened ? navigate("/registration") : navigate("/login");
        setIsOpened(!isOpened); 
    };

    return (
        <div className="d-flex flex-row align-items-center justify-content-between" 
            style={{height: 925}}
        >
            <IconDiv/>
            <div className="vr"/>
            <div className="d-flex flex-column align-items-center" style={{width: "50%"}}>
                {
                    isOpened ? <LoginForm clickHandler={onClickHandler}/> : <RegistrationForm clickHandler={onClickHandler} />
                }
            </div>
        </div>
    );
};