import React from "react"
import Layout from "../components/layout/layout"
import {MetaPage} from '../components/meta/meta'
import {PageData} from "../constants"
import { NsfwIcons } from "../components/sidebar/sidebar"

import styles from './contact.module.css'

export default () => {
  const data = PageData.ru.contact
  return(
  <Layout lang="ru" url="/ru/contact" nsfw={false} classes="contact" light={true}>
    <MetaPage data={data} />
    <h1>{data.h1}</h1>
    <div className={styles.wrapper}>
      <section className={styles.column}>
        <form className={styles.form} method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label className="visually-hidden" htmlFor="name">Имя</label>
          <input className={styles.input} type="text" name="name" id="name" placeholder="Имя" required />
          <label className="visually-hidden" htmlFor="email">Email</label>
          <input className={styles.input} type="text" name="email" id="email" placeholder="Email" inputMode="email" required />
          <label className="visually-hidden" htmlFor="message">Сообщение</label>
          <textarea className={styles.message} name="message" id="message" rows="10" placeholder="Сообщение" required />
          <button className={styles.submit} type="submit">Отправить</button>
        </form>
      </section>
      <section className={styles.column}>
        <div className={styles.flex}>
          <svg width="24" height="24">
          <use href="#marker"></use>
          </svg>
          <p> Минск, Беларусь</p>
        </div>
        <hr className={styles.hr}></hr>
        <p>Если вам нужен шибари мастер для съемок или обучения, свяжитесь со мной через форму</p>
        <hr className={styles.hr}></hr>
        <p>Подпишись на меня в:</p>
        <div className={styles.links}>
          <NsfwIcons class={styles.svg} />
          </div>
      </section>
    </div>
  </Layout>
)}