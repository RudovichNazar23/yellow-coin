import { useState } from "react";

import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { ACCESS, REFRESH } from "../../utils/constants";

import FormHeader from "../FormComponents/FormHeader";
import FormGroup from "../FormComponents/FormGroup";
import FormButton from "../FormComponents/FormButton";
import LoginErrorContainer from "../FormComponents/LoginErrorContainer";

export default function LoginForm({ clickHandler }){
    const [formError, setFormError] = useState(null);
    const navigate = useNavigate();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const currentTarget = event.currentTarget;
        const username = currentTarget.username.value;
        const password = currentTarget.password.value;
        
        if(!username || !password) return;

        const response = api.post("/auth/token/", { "username": username, "password": password });
        response
        .then((res) => {
            if(res.status === 200){
                localStorage.setItem(ACCESS, res.data.access);
                localStorage.setItem(REFRESH, res.data.refresh);
                navigate("/");
            }
        })
        .catch((error) => setFormError(error.response.data.detail));
    };

    return (
        <>
            <FormHeader headerValue={"Login"} />
            <hr className="container" style={{width: "350px"}}/>
            <form className="" onSubmit={onSubmitHandler}>
                <FormGroup labelValue={"Username"} inputType={"text"} inputId={"username"}/>
                <FormGroup labelValue={"Password"} inputType={"password"} inputId={"password"}/>
                <LoginErrorContainer errorMessage={formError}/>
                <FormButton buttonValue={"Login"} />
                <div className="mb-3 mt-3 ">
                    <div>Don't have an account?</div>
                    <a href="" onClick={clickHandler}>Go to registration</a>
                </div>
            </form>
        </>
    );
};