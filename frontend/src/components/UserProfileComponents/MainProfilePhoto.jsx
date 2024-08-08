import Button from "react-bootstrap/Button";

export default function MainProfilePhoto({ photoPath, setShow }){
    return (
        <Button variant="" className="p-0 border-0"  onClick={() => setShow(true)}>
            <img className="img-fluid rounded-3" src={photoPath} alt="..." width={"250px"} height={"250px"}/>
        </Button>
    );
};