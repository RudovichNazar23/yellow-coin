import { useState, useContext } from "react";
import { ProfilePictureContext } from "../../context/ProfilePictureContext";
import { PictureContainerContext } from "../../context/PictureContainerContext";

import api from "../../utils/api";

import MainProfilePhoto from "./MainProfilePhoto";
import PhotoModal from "./PhotoModal";

export default function PictureContainer(){
    const { userPictures, setUserPictures } = useContext(ProfilePictureContext);
    const [currentPictureIndex, setCurrentPictureIndex] = useState(userPictures.length - 1);
    const [show, setShow] = useState(false);

    const onNextHandler = () => {
        setCurrentPictureIndex(
            (prev) => userPictures[prev + 1] ? prev + 1 : 0
        );
    };

    const onPreviousHandler = () => {
        setCurrentPictureIndex(
            (prev) => userPictures[prev - 1] ? prev - 1 : userPictures.length - 1
        );
    };

    const onDeleteHandler = (event) => {
        event.preventDefault();
        const response = api.delete(`user_profile/picture/${userPictures[currentPictureIndex].id}/`);
        response
        .then((res) => { 
                if(res.status === 204){
                    setCurrentPictureIndex((prev) => prev - 1 || 0);
                    setUserPictures(
                            (prev) => { 
                                return prev.filter((picture) => picture.id !== prev[currentPictureIndex].id); 
                            }
                    )
                }
            }
        )
        .catch((error) => console.log(error));
    };

    return (
        <>
            <PictureContainerContext.Provider value={
                    {
                        "previousHandler": onPreviousHandler, 
                        "nextHandler": onNextHandler, 
                        "deleteHandler": onDeleteHandler,
                        "currentPicture": userPictures[currentPictureIndex].picture
                    }
                }>
                <MainProfilePhoto photoPath={userPictures[userPictures.length - 1].picture} setShow={setShow} />
                <PhotoModal 
                    show={show}
                    onHide={() => setShow(false)}
                    deleteHandler={onDeleteHandler}
                />
            </PictureContainerContext.Provider>
        </>
    );
};