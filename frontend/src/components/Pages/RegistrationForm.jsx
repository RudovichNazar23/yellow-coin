import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS } from "../../utils/actions";

import api from "../../utils/api";

import FormHeader from "../FormComponents/FormHeader";
import FormGroup from "../FormComponents/FormGroup";
import FormButton from "../FormComponents/FormButton";
import Loading from "../Loading";

import registrationReducer from "../../reducers/registrationReducer";

const INITIAL_STATE = {
    action: ACTIONS.initial,
    data: undefined,
    errors: {
        "username": [],
        "password": [],
        "repeatPassword": []
    }
};

export default function RegistrationForm({ clickHandler }){
    const [state, dispatch] = useReducer(registrationReducer, INITIAL_STATE);
    const navigate = useNavigate();

    if(state.action === ACTIONS.loading){
        return <Loading />;
    };
    
    if(state.action === ACTIONS.complete){
        return navigate("/");
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const currentTarget = event.currentTarget;
        const username = currentTarget.username.value;
        const password = currentTarget.password.value;
        const repeatPassword = currentTarget.repeatPassword.value;

        if(!username || !password || !repeatPassword) return;
        if(password !== repeatPassword){
            dispatch({ type: ACTIONS.error, payload: {...INITIAL_STATE, ["repeatPassword"]: ["Passwords don't match"]}});
            return;
        }; 
        dispatch({ type: ACTIONS.loading, payload: undefined });
        const response = api.post("/user_profile/user/", { "username": username, "password": password });
        response
        .then((res) => res.status === 201 && dispatch({ type: ACTIONS.complete, payload: undefined }))
        .catch((error) => {
            const errors = {};
            for(const key in error.response.data){
                errors[key] = error.response.data[key];
            };
            dispatch({ type: ACTIONS.error, payload: errors });
        });
    };

    const { username, password, repeatPassword } = state.errors;

    return (
        <>
            <FormHeader headerValue={"Registration"}/>
            <hr className="container" style={{width: "350px"}}/>
            <form onSubmit={onSubmitHandler}>
                <FormGroup labelValue={"Username"} inputType={"text"} inputId={"username"} errors={username}/>
                <FormGroup labelValue={"Password"} inputType={"password"} inputId={"password"} errors={password}/>
                <FormGroup  labelValue={"Repeat password"} inputType={"password"} inputId={"repeatPassword"} errors={repeatPassword}/>
                <FormButton buttonValue={"Registration"} />
                <div className="mb-3 mt-3 ">
                    <div>Already have an account?</div>
                    <a href="" onClick={clickHandler}>Go to login</a>
                </div>
            </form>
        </>
    )
};