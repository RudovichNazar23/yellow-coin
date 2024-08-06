export default function EditFormButton({ buttonColor, textValue, clickHandler }){
    return (
        <div className="col-4 text-center">
            <button className={`col-7 btn btn-sm ${buttonColor ? buttonColor : `btn-primary`}`} onClick={clickHandler}>
                { textValue }
            </button>
        </div>
    );
};