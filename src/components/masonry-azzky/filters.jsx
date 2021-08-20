import React from "react"
import  {i18n} from "../../constants"
import { FilterItem, FilterList } from './styled'

const Filters = (props) => {
    const uniqueArr = props.uniqueArr.length > 0 ? props.uniqueArr : []
    return(
        <FilterList>
        {uniqueArr.map((filter, index) => (
            <FilterItem type="button"
                        key={index}
                        onClick={() => props.handleFilterChange(filter)}
                        disabled={props.activeFilter === filter}>
                {props.lang !== 'ru' && filter? filter : i18n[filter]}
            </FilterItem>
            ))}
        </FilterList>
    )
}

export default Filters