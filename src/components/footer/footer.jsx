import React from "react"
import config from './config'
import getDate from '../../hooks/useDate'

import { Wrapper, DesignerText } from './styled'

const Footer = (props) => {
    const { lang, is404 } = props
    const date = getDate()

    return(
        <Wrapper is404={is404}>
            <p>
                {config.copyRight + date + config.mainText[lang]}
            </p>
            <div>
                <DesignerText>
                    {config.designerText[lang]}
                    <a href={config.designerLink}
                       rel="noreferrer"
                       target="_blank">
                        {config.designerName}
                    </a>
                </DesignerText>
            </div>
        </Wrapper>
)}

export default Footer