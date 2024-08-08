import { useState, useContext } from "react";
import { HomePageContext } from "../../context/HomePageContext";
import { ProfilePictureContext } from "../../context/ProfilePictureContext";
import api from "../../utils/api";

import UploadPhotoForm from "./UploadPhotoForm";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function UploadModal(props){
    const { user } = useContext(HomePageContext);
    const { setUserPictures } = useContext(ProfilePictureContext);

    const [picture, setPicture] = useState({});

    const onChangeHandler = (event) => {
        setPicture(event.currentTarget.files[0]);
    };

    const onClickHandler = (event) => {
        event.preventDefault();
        if(!picture) return;

        const formData = new FormData();
        formData.append("picture", picture);
        formData.append("user", user.id);

        const response = api.post("/user_profile/picture/", formData);
        response
        .then((res) => {
            if(res.status === 201){
                setUserPictures((prev) => prev.concat([res.data,]));
                props.setShow(false);
            }
        })
        .catch((error) => console.log(error));
    };

    return (
        <Modal
            {...props} 
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Upload photo
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UploadPhotoForm onChange={onChangeHandler} inputValue={picture} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" size="sm" onClick={() => props.setShow(false)}>Close</Button>
                <Button variant="success" size="sm" onClick={onClickHandler}>Upload</Button>
            </Modal.Footer>
        </Modal>
    );
};