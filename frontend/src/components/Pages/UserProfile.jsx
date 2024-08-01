import api from "../../utils/api";
import { useContext, useState } from "react";
import { HomePageContext } from "../../context/HomePageContext";

import ProfilePicture from "../UserProfileComponents/ProfilePicture";
import Banner from "../UserProfileComponents/Banner";
import InfoGroup from "../UserProfileComponents/InfoGorup";
import DeleteButton from "../UserProfileComponents/DeleteButton";
import EditButton from "../UserProfileComponents/EditButton";
import ModalContainer from "../UserProfileComponents/ModalContainer";


export default function UserProfile(){
    const { user } = useContext(HomePageContext);

    const onDeleteHandler = (event) => {
        event.preventDefault();
        const response = api.delete(`/user_profile/user/${user.id}/`);
        response
        .then((res) => {
            if(res.status === 204){
                localStorage.clear();
                window.location.reload();
            }
        })
        .catch((error) => console.log(error));
    };

    return (
        <>
            <div className="row p-2 justify-content-center">
                <ProfilePicture />
                <Banner userName={user.username}/>
            </div>
            <div className="row p-5 align-items-center justify-content-center">
                <InfoGroup labelValue={"Username"} fieldValue={user.username}/>
                <InfoGroup labelValue={"Email"} fieldValue={user.email}/>
                <InfoGroup labelValue={"First name"} fieldValue={user.first_name}/>
                <InfoGroup labelValue={"Last name"} fieldValue={user.last_name}/>
                <div className="row mt-3 p-3 justify-content-center">
                    <EditButton/>
                    <DeleteButton/>
                    <ModalContainer modalTitle={"Delete profile?"} 
                                    modalBody={"Are you sure that you want to delete your profile ?"} 
                                    modalButton={<button className="btn btn-danger" onClick={onDeleteHandler}>Delete</button>}
                    />
                </div>
            </div>
        </>
    );
};