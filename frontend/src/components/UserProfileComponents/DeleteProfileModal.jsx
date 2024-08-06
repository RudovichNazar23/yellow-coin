import api from "../../utils/api";
import { useContext } from "react";
import { HomePageContext } from "../../context/HomePageContext";

import ModalContainer from "./ModalContainer";

export default function DeleteProfileModal(){
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
        <div className="modal fade" id="deleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <ModalContainer 
                modalTitle={"Delete profile"}
                modalBody={"Are sure that you want to delete your profile?"}
                modalButton={<button className="btn btn-danger" onClick={onDeleteHandler}>Delete</button>}
            />
        </div>
    );
}