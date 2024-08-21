import { HOME_PAGE_ACTIONS } from "../../utils/homePageActions";

import OptionListItem from "./OptionListItem";

export default function OptionsList(){
    return (
        <div className="row g-3 m-1">
            <OptionListItem textValue={"Dashboard"} iconName={"dashboard.svg"} action={HOME_PAGE_ACTIONS.dasboard}/>
            <OptionListItem textValue={"Portfolio"} iconName={"wallet.svg"} action={HOME_PAGE_ACTIONS.portfolio}/>
            <OptionListItem textValue={"Coin base"} iconName={"coin_base.svg"} action={HOME_PAGE_ACTIONS.coinBase}/>
        </div>
    );
};