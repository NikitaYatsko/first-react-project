import "./app.css"
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import AddForm from "../add-form/add-form";

export default function App() {

    const data = [
        {name: "Maria", salary: "800",increase:false, id: 1},
        {name: "John", salary: "1200",increase: true, id: 2},
        {name: "Maria", salary: "9000", increase: false, id: 3},

    ]

    return (
        <div className={"app"}>
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                < AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <AddForm/>
        </div>
    );

}