import React, {useState} from "react"
import { getToken } from '../../firebase'
import config from "./config"

import { SubscriptionButton, Subscription } from './styled'

const Push = () => {
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
        <Subscription>
            {isTokenFound &&
              <p>
                {config.successMessage}
              </p>
            }
            {!isTokenFound &&
              <p>
                {config.defaultMessage}
              </p>
            }
            {!isTokenFound &&
              <SubscriptionButton className="subscription__button"
                                  onClick={() => allowNotifications()}>
                                    {config.buttonText}
              </SubscriptionButton>
            }
        </Subscription>
    )
}

export default Push