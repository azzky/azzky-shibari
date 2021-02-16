import React from "react"
import Maindata from '../../constants'
import './team.scss'

const Models = (props) => {
    const models = props.models
    if(models) {
        return(
            <div className="people-card">
                <p>
                    {models.length > 1 ?
                    props.lang === 'ru' ? 'Модели: ' : 'Models: ' :
                    props.lang === 'ru' ? 'Модель: ' : 'Model: '}
                    {models.map((model,i) => (
                        <span key={i}>
                            <Model model={model}  />
                            {models.length > 1 && i !== models.length - 1 ?
                            <span>{i < models.length - 2 ? ', ' : ' and '}</span>
                            : ''}
                        </span>
                        ))}
                </p>
            </div>
        )
    } else {
        return null
    }
}

const Model = (props) => {
    const model = props.model
    return(
        <a href={model.url}> {model.name}</a>
    )
}

const AllByMe = (props) => (
    <div className="people-card">
        <p>{props.lang === 'ru' ? 'Фото и шибари: ' : 'Photo and shibari by '}
            <a href={Maindata.socials.instagram_nsfw}>{props.lang === 'ru' ? ' я' : ' me'}</a>
        </p>
    </div>
)

const Nawashi = (props) => (
    <div className="people-card">
        <p>{props.lang === 'ru' ? 'Шибари: ' : 'Shibari by '}
            <a href={Maindata.socials.instagram_nsfw}>{props.lang === 'ru' ? ' я' : ' me'}</a>
        </p>
    </div>
)

const Photographer = (props) => {
    const photographer = props.photographer
    if(photographer) {
        return(
            <div className="people-card">
                <p>{props.lang === 'ru' ? 'Фотограф:' : 'Photo:'}
                    <a href={photographer.url}> {photographer.name}</a>
                </p>
            </div>
        )
    } else {
        return null
    }
}

const Muah = (props) => {
    const muah = props.muah
    if(muah) {
        return(
            <div className="people-card">
                <p>{props.lang === 'ru' ? 'Визажист: ' : 'Muah: '}
                    <a href={muah.url}> {muah.name}</a>
                </p>
            </div>
        )
    } else {
        return null
    }
}

const Team = (props) => {
    return(
        <div className="people-card__list">
            <Models models={props.models} lang={props.lang} />
            {props.photographer && props.photographer.name === Maindata.author ?
            <AllByMe lang={props.lang} />
            : <>
            {props.photographer && <Photographer photographer={props.photographer} lang={props.lang} />}
            <Muah muah={props.muah} lang={props.lang} />
            <Nawashi lang={props.lang} />
            </>}
            
        </div>
    )
}

export default Team