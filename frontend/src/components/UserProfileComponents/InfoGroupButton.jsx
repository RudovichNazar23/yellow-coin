import Button from "react-bootstrap/Button";

export default function InfoGroupButton(props){
    return (
        <div className="col-xl-6 col-11 d-flex flex-row justify-content-center">
            <Button {...props}>
                { props.value }
            </Button>
        </div>
    );
};