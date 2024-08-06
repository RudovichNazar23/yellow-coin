import { useContext, useState } from "react";
import { HomePageContext } from "../../context/HomePageContext";
import api from "../../utils/api";
import InfoGroup from "./InfoGorup";
import EditFormButton from "./EditFormButton";

export default function InfoGroupContainer({ user, isEdit, setIsEdit }){
    const { setUserInfo } = useContext(HomePageContext);
    const [fieldErrors, setFieldErrors] = useState({
        "username": [],
        "email": [],
        "first_name": [],
        "last_name": []
    });

    const onSubmit = (event) => {
        event.preventDefault();
        const currentTarget = event.currentTarget;
        
        const username = currentTarget.username.value;
        const email = currentTarget.email.value;
        const firstName = currentTarget.first_name.value;
        const lastName = currentTarget.last_name.value;
        
        const response = api.patch(`/user_profile/user/${user.id}/`, { 
            "username": username,
            "email": email,
            "first_name": firstName,
            "last_name": lastName
        });
        response
        .then((res) => {
            if(res.status === 200){
                setUserInfo(res.data);
                setIsEdit(false);
            }
        })
        .catch((error) => {
            if(error.response.status === 400){
                for(const key in error.response.data){
                    setFieldErrors(
                        (prev) => { return {...prev, [key]: error.response.data[key]} }
                    );
                }
            }
        });
    };

    return (
        <form className="row align-items-center justify-content-center" onSubmit={onSubmit}>
            <InfoGroup labelValue={"Username"} fieldValue={user.username} inputId={"username"} errors={fieldErrors.username}/>
            <InfoGroup labelValue={"Email"} fieldValue={user.email} inputId={"email"} errors={fieldErrors.email}/>
            <InfoGroup labelValue={"First name"} fieldValue={user.first_name} inputId={"first_name"} errors={fieldErrors.first_name}/>
            <InfoGroup labelValue={"Last name"} fieldValue={user.last_name} inputId={"last_name"} errors={fieldErrors.last_name}/>
            {
                isEdit && (
                    <div className="row mt-3 p-3 align-items-center justify-content-center">
                        <EditFormButton textValue={"Update"} buttonColor={"btn-success"}/>
                        <EditFormButton textValue={"Cancel"} buttonColor={"btn-secondary"} clickHandler={() => setIsEdit(false)}/>
                    </div>
                )
            }
        </form>
    );
};