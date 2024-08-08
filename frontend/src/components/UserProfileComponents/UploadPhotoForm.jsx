export default function UploadPhotoForm({ onChange, inputValue }){
    return (
        <div className="md-3">
            <label>Photo</label>
            <input type="file" className="form-control" id="photo" onChange={onChange} filename={inputValue}/>
        </div>
    );
};