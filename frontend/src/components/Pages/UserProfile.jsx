import { useContext, useState } from "react";
import { HomePageContext } from "../../context/HomePageContext";

import ProfilePicture from "../UserProfileComponents/ProfilePicture";
import Banner from "../UserProfileComponents/Banner";
import InfoGroup from "../UserProfileComponents/InfoGorup";
import ProfileButton from "../UserProfileComponents/ProfileButton";


export default function UserProfile(){
    const { user } = useContext(HomePageContext);

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
                    <ProfileButton textValue={"Edit profile"} color={"btn-primary"}/>
                    <ProfileButton textValue={"Delete account"} color={"btn-danger"}/>
                </div>
            </div>
        </>
    );
};