import React from 'react'
import { Wrapper } from './styled'

const Toggler = (props) => {
    const {
        state,
        changeState,
        onStateLabel,
        offStateLabel        
    } = props

    return (
        <Wrapper state={state}
                 className="toggler">
            <input  type="checkbox"
                    role="switch"
                    onChange={changeState}
                    defaultChecked={state}/>
            {state ? onStateLabel : offStateLabel}
        </Wrapper>
    )
}

export default Toggler