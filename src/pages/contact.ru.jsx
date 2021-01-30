import React from "react"
import Layout from "../components/layout/layout"
import {MetaPage} from '../components/meta/meta'
import {PageData} from "../constants"

import './contact.scss'

export default () => {
  const data = PageData.ru.contact
  return(
  <Layout lang="ru" url="/ru/contact" nsfw={false} classes="contact" light={true}>
    <MetaPage data={data} />
    <h1>{data.h1}</h1>
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className="contact__form">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label>
        Имя
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label>
        Текст
        <textarea name="message" id="message" rows="5" />
      </label>
      <button type="submit">Отправить</button>
    </form>
  </Layout>
)}