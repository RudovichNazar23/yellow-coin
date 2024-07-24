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
        <div class="container-fluid d-flex flex-column align-items-center justify-content-center">
            <div className="row w-100 h-100 d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center mt-4">
                    {
                        isOpened ? <LoginForm clickHandler={onClickHandler}/> : <RegistrationForm clickHandler={onClickHandler} />
                    }
                </div>
                <div class="col-12 col-md-1 d-none d-md-block d-flex flex-column align-items-center justify-content-center" style={{height: "900px"}}>
                    <div class="vr" style={{height: "100%"}}></div>
                </div>
                <IconDiv/>
            </div>
        </div>
    );
};