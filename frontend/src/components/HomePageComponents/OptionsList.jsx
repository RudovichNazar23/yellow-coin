import OptionListItem from "./OptionListItem";

export default function OptionsList(){
    return (
        <div className="row g-3 m-2">
            <OptionListItem textValue={"Dashboard"}/>
            <OptionListItem textValue={"Portfolio"}/>
            <OptionListItem textValue={"Coin base"}/>
        </div>
    );
};