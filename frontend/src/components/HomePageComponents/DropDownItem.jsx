export default function DropDownItem({ textValue, clickHandler }){
    return (
        <li><a className="dropdown-item" href="#" onClick={clickHandler}>{textValue}</a></li>
    );
};