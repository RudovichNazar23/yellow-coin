export default function UploadPhotoForm(){
    return (
        <form>
            <div className="md-3">
                <label>Photo</label>
                <input type="file" className="form-control" />
            </div>
        </form>
    );
};