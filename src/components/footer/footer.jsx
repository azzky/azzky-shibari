import React from "react"
import config from './config'
import { Wrapper, DesignerText } from './styled'

const Footer = (props) => {
  const getYear = new Date().getFullYear()
  const lang = props.lang
  return(
      <Wrapper>
        <p>© { getYear === 2020 ? getYear : '2020 - ' + getYear } {config.mainText[lang]}</p>
        <div>
          <DesignerText>{config.designerText[lang]} <a href={config.designerLink} rel="noreferrer" target="_blank">{config.designerName}</a></DesignerText>
        </div>
      </Wrapper>
)}

export default Footer