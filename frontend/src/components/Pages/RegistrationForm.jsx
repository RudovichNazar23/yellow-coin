import FormHeader from "../FormComponents/FormHeader";
import FormGroup from "../FormComponents/FormGroup";
import FormButton from "../FormComponents/FormButton";

export default function RegistrationForm({ clickHandler }){
    return (
        <>
            <FormHeader headerValue={"Registration"}/>
            <hr className="container" style={{width: "350px"}}/>
            <form>
                <FormGroup labelValue={"Username"} inputType={"text"}/>
                <FormGroup labelValue={"Password"} inputType={"password"}/>
                <FormGroup  labelValue={"Repeat password"} inputType={"password"}/>
                <FormButton buttonValue={"Registration"} />
                <div className="mb-3 mt-3 ">
                    <div>Already have an account?</div>
                    <a href="" onClick={clickHandler}>Go to login</a>
                </div>
            </form>
        </>
    )
};