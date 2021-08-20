import React, { Fragment } from "react"
import Maindata from '../../constants'
import config from './config'
import { Wrapper } from './styled'

const Models = (props) => {
    const { models, lang } = props
    return(models ?
        <p>
            {models.length > 1 ?
                config.manyModels[lang] :
                config.singleModel[lang]
            }
            {models.map((model,i) => (
                <Fragment key={i}>
                    <Model model={model} />
                    {models.length > 1 && i !== models.length - 1 ?
                        <>{i < models.length - 2 ? ',' : ' and'}</>
                    : ''}
                </Fragment>
                ))}
        </p>
        : null
    )
}

const Model = (props) => {
    const {
        model: {
            url,
            name
        }
    } = props
    return(
        <a href={url}>
            {config.space + name}
        </a>
    )
}

const AllByMe = (props) => {
    const { lang } = props
    return(
        <p>
            {config.allByMeText[lang]}
            <a href={Maindata.socials.instagram_nsfw}>
                {config.space + config.meText[props.lang]}
            </a>
        </p>
    )
}

const Nawashi = (props) => {
    const { lang } = props
    return(
    <p>
        {config.nawaText[lang]}
        <a href={Maindata.socials.instagram_nsfw}>
            {config.space + config.meText[props.lang]}
        </a>
    </p>
    )
}

const Photographer = (props) => {
    const { photographer, lang }  = props
    return( photographer ? 
        <p>
            {config.photographerText[lang]}
            <a href={photographer.url}>
                {config.space + photographer.name}
            </a>
        </p>
        : null
    )
}

const Muah = (props) => {
    const { muah, lang } = props
    return(muah ? 
        <p>
            {config.muahText[lang]}
            <a href={muah.url}>
                {config.space + muah.name}
            </a>
        </p>
        : null
    )
}

const Team = (props) => {
    const {
        models,
        lang,
        photographer,
        muah
    } = props
    return(
        <Wrapper>
            <Models models={models} lang={lang} />
            {photographer && photographer.name === Maindata.author ?
                <AllByMe lang={lang} />
            :
                <>
                    {photographer && 
                    <Photographer photographer={photographer}
                                  lang={lang} />}
                    <Muah muah={muah} 
                          lang={lang} />
                    <Nawashi lang={lang} />
                </>
            }
        </Wrapper>
    )
}

export default Team