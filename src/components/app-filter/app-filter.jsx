import "./app-filter.css"

const AppFilter = () => {
    return (
        <div className={"btn-group"}>
            <button className="btn button-light" type="button">
                Все сотрудники
            </button>
            <button className="btn button-outline-light" type="button">
                На повышение
            </button>
            <button className="btn button-outline-light" type="button">
                По зарплате больше 1000$
            </button>

        </div>
    )
}
export default AppFilter;