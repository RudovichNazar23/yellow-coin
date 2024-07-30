export default function OptionListItem({ textValue, iconName }){
    return(
        <a className="col-lg-7 col-md-12 text-decoration-none text-dark d-flex" href="#">
            <img src={`/${iconName}`} width={"30"} height={"30"}/>
            <span className="d-none d-sm-inline ms-1">{textValue}</span>
        </a>
    );
};