import OptionListItem from "./OptionListItem";

export default function OptionsList(){
    return (
        <div className="row g-3 m-1">
            <OptionListItem textValue={"Dashboard"} iconName={"dashboard.svg"}/>
            <OptionListItem textValue={"Portfolio"} iconName={"wallet.svg"}/>
            <OptionListItem textValue={"Coin base"} iconName={"coin_base.svg"}/>
        </div>
    );
};