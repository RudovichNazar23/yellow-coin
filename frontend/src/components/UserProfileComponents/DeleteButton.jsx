import Button from "react-bootstrap/Button";

export default function DeleteButton({ onClick }){
    return (
        <div className="col-4 text-center">
            <Button variant="danger" size="sm" className="col-7" onClick={onClick}>
                Delete
            </Button>
        </div>
    );
};