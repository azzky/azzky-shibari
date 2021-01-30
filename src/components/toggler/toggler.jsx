import React, {useState, useEffect} from 'react'
import './toggler.scss'

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
    <label className="switch nsfw-switch">
      <input type="checkbox" className="nsfw--trigger" onChange={toggleNsfw} defaultChecked={pageNsfw}/>
      <span className="slider round"></span>
      <span className="label-off label">sfw</span>
      <span className="label-on label">nsfw</span>
    </label>
  )
}

export default Toggler