import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../utils/api";

import FormHeader from "../FormComponents/FormHeader";
import FormGroup from "../FormComponents/FormGroup";
import FormButton from "../FormComponents/FormButton";

export default function RegistrationForm({ clickHandler }){
    const [formErrors, setFormErrors] = useState({
        "username": [],
        "password": [],
        "repeatPassword": []
    });
    const navigate = useNavigate();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const currentTarget = event.currentTarget;
        const username = currentTarget.username.value;
        const password = currentTarget.password.value;
        const repeatPassword = currentTarget.repeatPassword.value;

        if(!username || !password || !repeatPassword) return;
        if(password !== repeatPassword){
            setFormErrors((prev) => { return {...prev, ["repeatPassword"]: ["Passwords don't match",]}});
            return;
        } 

        const response = api.post("/user_profile/user/", { "username": username, "password": password });
        response
        .then((res) => res.status === 201 && navigate("/"))
        .catch((error) => {
            for(const key in error.response.data){
                setFormErrors((prev) => { return {...prev, [key]: error.response.data[key]}});
            }
        });
    };

    return (
        <>
            <FormHeader headerValue={"Registration"}/>
            <hr className="container" style={{width: "350px"}}/>
            <form onSubmit={onSubmitHandler}>
                <FormGroup labelValue={"Username"} inputType={"text"} inputId={"username"} errors={formErrors.username}/>
                <FormGroup labelValue={"Password"} inputType={"password"} inputId={"password"} errors={formErrors.password}/>
                <FormGroup  labelValue={"Repeat password"} inputType={"password"} inputId={"repeatPassword"} errors={formErrors.repeatPassword}/>
                <FormButton buttonValue={"Registration"} />
                <div className="mb-3 mt-3 ">
                    <div>Already have an account?</div>
                    <a href="" onClick={clickHandler}>Go to login</a>
                </div>
            </form>
        </>
    )
};