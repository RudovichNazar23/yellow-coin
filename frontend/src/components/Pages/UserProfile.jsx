import { useContext, useState } from "react";
import { HomePageContext } from "../../context/HomePageContext";
import { InfoGroupContext } from "../../context/InfoGroupContext";

import ProfilePicture from "../UserProfileComponents/ProfilePicture";
import Banner from "../UserProfileComponents/Banner";
import InfoGroupContainer from "../UserProfileComponents/InfoGroupContainer";
import DeleteButton from "../UserProfileComponents/DeleteButton";
import EditButton from "../UserProfileComponents/EditButton";
import DeleteProfileModal from "../UserProfileComponents/DeleteProfileModal";
import ModalContainer from "../UserProfileComponents/ModalContainer";
import UploadPhotoForm from "../UserProfileComponents/UploadPhotoForm";

export default function UserProfile(){
    const [isEdit, setIsEdit] = useState(false);

    const { user } = useContext(HomePageContext);

    const onSetIsEdit = (event) => {
        event.preventDefault();
        setIsEdit(!isEdit);
    };

    return (
        <>
            <div className="row p-2 justify-content-center">
                <ProfilePicture />
                <Banner userName={user.username}/>
            </div>
            <div className="row p-5">
                <InfoGroupContext.Provider value={{"isEdit": isEdit}}>
                    <InfoGroupContainer user={user} isEdit={isEdit} setIsEdit={setIsEdit}/>
                </InfoGroupContext.Provider>
                <div className="row mt-3 p-3 justify-content-center">
                    {
                        !isEdit && (
                            <>
                                <EditButton clickHandler={onSetIsEdit}/>
                                <DeleteButton/>
                                <DeleteProfileModal />
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
};