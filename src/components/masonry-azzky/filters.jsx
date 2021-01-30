import React from "react"
import  {i18n} from "../../constants"

const Filters = (props) => {
    const uniqueArr = props.uniqueArr.length > 0 ? props.uniqueArr : []
    return(
        <div className="filters__list filters">
        {uniqueArr.map((filter, index) => (
            <button type="button" key={index} data-filter={filter}
            onClick={(e) => props.changeFilter(e)}
            className="filters__item">{props.lang !== 'ru' && filter? filter : i18n[filter]}</button>
            ))}
        </div>
    )
}

export default Filters