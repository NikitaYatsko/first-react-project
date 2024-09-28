import "./app.css"
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import AddForm from "../add-form/add-form";

export default function App() {
    return (
        <div className={"app"}>
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                < AppFilter/>
            </div>
            <EmployeesList/>
            <AddForm/>
        </div>
    );

}