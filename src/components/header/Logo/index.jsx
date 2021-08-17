import React from "react"

import {
    LogoWrapper,
    LogoImage,
} from './styled'

const Logo = (props) => {
    const { langStr } = props

    return (
        <LogoWrapper to={`${langStr}/`}>
            <LogoImage src="/logo.svg"
                alt="logo"
                width="81"
                height="17" />
        </LogoWrapper>
    )
}

export default Logo