import FormHeader from "../FormComponents/FormHeader";
import FormGroup from "../FormComponents/FormGroup";
import FormButton from "../FormComponents/FormButton";

export default function LoginForm({ clickHandler }){
    return (
        <>
            <FormHeader headerValue={"Login"} />
            <hr className="container" style={{width: "350px"}}/>
            <form className="">
                <FormGroup labelValue={"Username"} inputType={"text"}/>
                <FormGroup labelValue={"Password"} inputType={"password"} />
                <FormButton buttonValue={"Login"} />
                <div className="mb-3 mt-3 ">
                    <div>Don't have an account?</div>
                    <a href="" onClick={clickHandler}>Go to registration</a>
                </div>
            </form>
        </>
    );
};