import React from "react"

import {
    Wrapper,
    SettingsBlock,
    Trigger
} from './styled'

const Settings = (props) => {
    const {
        toggleSettings,
        showSettings,
        children
    } = props
    return (
        <Wrapper>
            <Trigger type="button"
            aria-label="setings button"
            onClick={() => toggleSettings((prev) => !prev)}>
                <svg width="24" height="24">
                    <use href="#settings"></use>
                </svg>
            </Trigger>
            <SettingsBlock active={showSettings}>
                {children}
            </SettingsBlock>
        </Wrapper>
    )
}

export default Settings