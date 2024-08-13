import { useContext, useState } from "react";
import { HomePageContext } from "../../context/HomePageContext";
import { InfoGroupContext } from "../../context/InfoGroupContext";

import ProfilePicture from "../UserProfileComponents/ProfilePicture";
import Banner from "../UserProfileComponents/Banner";
import InfoGroupContainer from "../UserProfileComponents/InfoGroupContainer";
import DeleteProfileModal from "../UserProfileComponents/DeleteProfileModal";
import InfoGroupButton from "../UserProfileComponents/InfoGroupButton";

export default function UserProfile(){
    const [isEdit, setIsEdit] = useState(false);
    const [show, setShow] = useState(false);

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
            <div className="row p-xl-3 p-1 justify-content-center">
                <InfoGroupContext.Provider value={{"isEdit": isEdit}}>
                    <InfoGroupContainer user={user} isEdit={isEdit} setIsEdit={setIsEdit}/>
                </InfoGroupContext.Provider>
                <div className="row mt-2 p-3 justify-content-center">
                    {
                        !isEdit && (
                            <>
                                <InfoGroupButton variant="success" className="col-xl-6 col-12 mt-1" size="sm" onClick={onSetIsEdit} value="Edit"/>
                                <InfoGroupButton variant="danger" className="col-xl-6 col-12 mt-1 " size="sm" onClick={() => setShow(true)} value="Delete"/>
                                <DeleteProfileModal show={show} setShow={setShow} />
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
};