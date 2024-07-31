export default function ProfilePicture(){
    return (
        <div className="col-3 d-flex flex-column align-items-center">
            <img src="/unknown_user.png" className="img-fluid rounded-2" width={"200"} height={"200"} alt="..." />
            <div className="col-8 text-center d-grid mt-1">
                <button className="btn btn-primary">
                    Upload
                </button>
            </div>
        </div>
    );
};