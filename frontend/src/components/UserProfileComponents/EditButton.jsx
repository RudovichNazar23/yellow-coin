export default function EditButton({ clickHandler }){
    return (
        <div className="col-4 text-center">
            <button className="btn btn-primary btn-sm col-7" onClick={clickHandler}>
                Edit
            </button>
        </div>
    );
};