export default function FormButton({ buttonValue }){
    return (
        <div className="d-grid gap-3">
            <button className="btn btn-primary">{ buttonValue || "Submit" }</button>
        </div>
    );
};