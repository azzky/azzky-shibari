import React from 'react'
import { Wrapper } from './styled'

const Toggler = (props) => {
  const {
    state,
    changeState
  } = props
  return (
    <Wrapper state={state}>
      <input  type="checkbox"
              onChange={changeState}
              defaultChecked={state}/>
      {state ? 'nsfw' : 'sfw'}
    </Wrapper>
  )
}

export default Toggler