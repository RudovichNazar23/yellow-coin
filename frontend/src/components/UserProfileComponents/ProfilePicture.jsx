import { useContext, useState } from "react";
import { HomePageContext } from "../../context/HomePageContext";
import { ProfilePictureContext } from "../../context/ProfilePictureContext";

import PictureContainer from "./PictureContainer";
import UploadModal from "./UploadModal";

import Button from "react-bootstrap/Button";


export default function ProfilePicture(){
    const { user } = useContext(HomePageContext);
    const { pictures } = user;
    const [userPictures, setUserPictures] = useState(pictures);
    const [show, setShow] = useState(false);
    
    return (
        <div className="col-xl-3 col-md-12 d-flex p-lg-0 p-md-0 p-4 flex-column align-items-center order-xl-1 order-2">
            <ProfilePictureContext.Provider value={
                    {
                        "userPictures": userPictures, 
                        "setUserPictures": setUserPictures, 
                    }
                }>
                {
                    userPictures.length > 0 ? (
                        <PictureContainer /> 
                    ): (
                        <img src="/unknown_user.png" className="img-fluid rounded-2 p-lg-0 p-md-0 p-2" alt="..."/>
                    )
                }
                <div className="col-xl-12 col-md-8 col-12 text-center d-grid mt-1 p-1">
                    <Button variant="primary" onClick={() => setShow(true)}>Upload</Button>
                </div>
                <UploadModal show={show} setShow={setShow} onHide={() => setShow(false)} />
            </ProfilePictureContext.Provider>
        </div>
    );
};