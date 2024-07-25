import OptionListItem from "./OptionListItem";

export default function OptionsList(){
    return (
        <div className="row g-3 m-1">
            <OptionListItem textValue={"Dashboard"} iconName={"home.png"}/>
            <OptionListItem textValue={"Portfolio"} iconName={"portfolio.png"}/>
            <OptionListItem textValue={"Coin base"} iconName={"coin_base.png"}/>
        </div>
    );
};