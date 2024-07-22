import { useReducer } from "react";

import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { ACCESS, REFRESH } from "../../utils/constants";

import FormHeader from "../FormComponents/FormHeader";
import FormGroup from "../FormComponents/FormGroup";
import FormButton from "../FormComponents/FormButton";
import LoginErrorContainer from "../FormComponents/LoginErrorContainer";
import Loading from "../Loading";

const ACTIONS = {
    initial: "initial",
    loading: "loading",
    error: "error",
    complete: "complete"
};

const INITIAL_STATE = {
    action: ACTIONS.initial,
    data: undefined,
    error: undefined
};

function reducer(state, { type, payload }){
    switch (type) {
        case ACTIONS.loading: 
            return { action: ACTIONS.loading, data: payload, error: undefined }
        case ACTIONS.complete:
            return { action: ACTIONS.complete, data: payload, error: undefined }
        case ACTIONS.error:
            return { action: ACTIONS.error, data: undefined, error: payload }
        default:
            return state;
    }
};

export default function LoginForm({ clickHandler }){
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const navigate = useNavigate();

    if(state.action === ACTIONS.loading){
        return <Loading />
    };

    if(state.action === ACTIONS.complete){
        return navigate("/");
    };
    
    const onSubmitHandler = (event) => {
        event.preventDefault();

        const currentTarget = event.currentTarget;
        const username = currentTarget.username.value;
        const password = currentTarget.password.value;
        
        if(!username || !password) return;

        dispatch({ type: ACTIONS.loading, payload: undefined });
        const response = api.post("/auth/token/", { "username": username, "password": password });
        response
        .then((res) => {
            if(res.status === 200){
                localStorage.setItem(ACCESS, res.data.access);
                localStorage.setItem(REFRESH, res.data.refresh);
                dispatch({ type: ACTIONS.complete, payload: undefined })
            }
        })
        .catch((error) => dispatch({ type: ACTIONS.error, payload: error.response.data.detail }));
    };

    return (
        <>
            <FormHeader headerValue={"Login"} />
            <hr className="container" style={{width: "350px"}}/>
            <form className="" onSubmit={onSubmitHandler}>
                <FormGroup labelValue={"Username"} inputType={"text"} inputId={"username"}/>
                <FormGroup labelValue={"Password"} inputType={"password"} inputId={"password"}/>
                <LoginErrorContainer errorMessage={state.error}/>
                <FormButton buttonValue={"Login"} />
                <div className="mb-3 mt-3 ">
                    <div>Don't have an account?</div>
                    <a href="" onClick={clickHandler}>Go to registration</a>
                </div>
            </form>
        </>
    );
};