import HomeLogo from "../HomePageComponents/HomeLogo";
import OptionsList from "../HomePageComponents/OptionsList";
import DropUpMenu from "../HomePageComponents/DropUpMenu";
import VerticalLine from "../HomePageComponents/VerticalLine";

export default function HomePage(){
    return (
        <div className="row vh-100">
            <div className="col-3 h-100">
                <HomeLogo />
                <OptionsList />
                <DropUpMenu />
            </div>
            <VerticalLine />
        </div>
    );
};