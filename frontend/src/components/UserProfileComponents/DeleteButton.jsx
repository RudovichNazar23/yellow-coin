export default function DeleteButton(){
    return (
        <div className="col-4 text-center">
            <button type="button" className="btn btn-danger col-7 btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal">
                Delete account
            </button>
        </div>
    );
};