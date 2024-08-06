export default function DropDownItem({ textValue, clickHandler }){
    const onClickHandler = (event) => {
        event.preventDefault()
        clickHandler && clickHandler(event);
    };

    return (
        <li>
            <a className="dropdown-item" href="#" onClick={onClickHandler}>{textValue}</a>
        </li>
    );
};