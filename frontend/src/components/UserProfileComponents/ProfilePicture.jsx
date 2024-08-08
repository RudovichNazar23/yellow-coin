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
        <div className="col-3 d-flex flex-column align-items-center">
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
                        <img src="/unknown_user.png" className="img-fluid rounded-2" width={"200"} height={"200"} alt="..." />
                    )
                }
                <div className="col-8 text-center d-grid mt-1">
                    <Button variant="primary" onClick={() => setShow(true)}>Upload</Button>
                </div>
                <UploadModal show={show} setShow={setShow} onHide={() => setShow(false)} />
            </ProfilePictureContext.Provider>
        </div>
    );
};