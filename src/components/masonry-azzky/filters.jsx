import React from "react"
import  {i18n} from "../../constants"

const Filters = (props) => {
    const uniqueArr = props.uniqueArr.length > 0 ? props.uniqueArr : []
    return(
        <section className="filters__list filters">
        {uniqueArr.map((filter, index) => (
            <button type="button" key={index}
            // data-filter={filter}
            onClick={() => props.handleFilterChange(filter)}
            className="filters__item" disabled={props.activeFilter === filter}>{props.lang !== 'ru' && filter? filter : i18n[filter]}</button>
            ))}
        </section>
    )
}

export default Filters