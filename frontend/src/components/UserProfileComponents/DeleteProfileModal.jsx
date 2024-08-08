import api from "../../utils/api";
import { useContext } from "react";
import { HomePageContext } from "../../context/HomePageContext";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function DeleteProfileModal({ show, setShow }){
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
        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size="lg"
            show={show}
            onHide={() => setShow(false)}
        >  
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete profile
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure that you want to delete your profile ?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" size="sm" onClick={() => setShow(false)}>Close</Button>
                <Button variant="danger" size="sm" onClick={onDeleteHandler}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
}