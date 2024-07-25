import HomeLogo from "../HomePageComponents/HomeLogo";
import OptionsList from "../HomePageComponents/OptionsList";
import DropUpMenu from "../HomePageComponents/DropUpMenu";

export default function HomePage(){
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 min-vh-100 border-end">
                    <HomeLogo />
                    <OptionsList />
                    <DropUpMenu />
                </div>
            </div>
        </div>
    );
};