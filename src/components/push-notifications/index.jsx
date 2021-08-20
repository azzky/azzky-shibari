import React, {useState} from "react"
import { getToken } from '../../firebase'
import config from "./config"

import { SubscriptionButton, Subscription } from './styled'

const Push = (props) => {
    const { isVisible, lang } = props
    let savedSubsciption = false
    if(typeof window !== 'undefined' && localStorage !== 'undefined' && localStorage.getItem('subscribed')) {
        savedSubsciption = true
    }
    const [isTokenFound, setTokenFound] = useState(savedSubsciption)
    const allowNotifications = () => {
        localStorage.setItem('subscribed', true)
        getToken(setTokenFound)
    }

    return (
        <Subscription isVisible={isVisible}>
            {isTokenFound &&
                <p>
                {config.successMessage[lang]}
                </p>
            }
            {!isTokenFound &&
                <p>
                {config.defaultMessage[lang]}
                </p>
            }
            {!isTokenFound &&
                <SubscriptionButton onClick={() => allowNotifications()}>
                                    {config.buttonText[lang]}
                </SubscriptionButton>
            }
        </Subscription>
    )
}

export default Push