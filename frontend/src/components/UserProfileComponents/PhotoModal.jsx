import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PhotoCarousel from "./PhotoCarousel";

export default function PhotoModal(props){
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Your photos
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <PhotoCarousel/>
            </Modal.Body >
            <Modal.Footer>
                <Button variant="secondary" size="sm" onClick={() => props.onHide()}>Close</Button>
                <Button variant="danger" size="sm"onClick={props.deleteHandler}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
};