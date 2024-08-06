import ModalContainer from "./ModalContainer";
import UploadPhotoForm from "./UploadPhotoForm";

export default function UploadModal(){
    return (
        <div className="modal fade" id="uploadModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <ModalContainer 
                modalTitle={"Upload photo"}
                modalBody={<UploadPhotoForm />}
                modalButton={<button className="btn btn-success">Upload</button>}
            />
        </div>
    );
};