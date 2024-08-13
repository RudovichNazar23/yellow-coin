export default function EditFormButton({ buttonColor, textValue, clickHandler }){
    return (
        <div className="col-xl-4 col-12 border d-flex flex-row justify-content-center">
            <button className={`col-9 btn btn-sm ${buttonColor ? buttonColor : `btn-primary`}`} onClick={clickHandler}>
                { textValue }
            </button>
        </div>
    );
};