import React, {useState, useEffect} from 'react'
import { Wrapper } from './styled'

const Toggler = () => {
  let localState = false
  if (typeof window !== 'undefined') {
    localState = localStorage.getItem('nsfw') === 'true' ? true : false
  }
  const [pageNsfw, setToggle] = useState(localState)

  const toggleNsfw = () => {
    setToggle((prev) => {
      localStorage.setItem('nsfw', !prev)
      return !prev
    })
  }

  useEffect(() => {
    if(pageNsfw) {
      document.body.classList.add('nsfw')
    } else {
      document.body.classList.remove('nsfw')
    }
  })

  return (
    <Wrapper nsfw={pageNsfw}>
      <input  type="checkbox"
              onChange={toggleNsfw}
              defaultChecked={pageNsfw}/>
      {pageNsfw ? 'nsfw' : 'sfw'}
    </Wrapper>
  )
}

export default Toggler