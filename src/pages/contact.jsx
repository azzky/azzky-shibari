import React, {useState} from "react"
import Layout from "../components/layout/layout"
import {MetaPage} from '../components/meta/meta'
import {PageData} from "../constants"
import { NsfwIcons } from "../components/sidebar/sidebar"

import * as styles from './contact.module.css'
import { getToken } from '../firebase'

const Contact = () => {
  const data = PageData.en.contact
  let savedSubsciption = false
  if(localStorage && localStorage.getItem('subscribed')) {
    savedSubsciption = true
  }
  const [isTokenFound, setTokenFound] = useState(savedSubsciption)
  const allowNotifications = () => {
    localStorage.setItem('subscribed', true)
    getToken(setTokenFound)
  }

  

  return(
  <Layout lang="en" url="/contact" classes="contact">
    <MetaPage data={data} type="contact" />
    <h1>{data.h1}</h1>
    <div className={styles.wrapper}>
      <section className={styles.column}>
        <div className={styles.flex}>
          <svg width="24" height="24">
          <use href="#marker"></use>
          </svg>
          <p> Minsk, Belarus</p>
        </div>
        <hr className={styles.hr}></hr>
        <p>If you need me as a shibari master for photo/video shooting or looking for shibari classes just contact me via form</p>
        <hr className={styles.hr}></hr>
        <p>Follow me on:</p>
        <div className={styles.links}>
          <NsfwIcons class={styles.svg} />
        </div>
        <hr className={styles.hr}></hr>
        {isTokenFound && <p>Notification permission enabled - thank you!</p>}
        {!isTokenFound && <p>Please, enable permission to get notifications about new posts</p>}
        {!isTokenFound && <button className={styles.submit} onClick={() => allowNotifications()}>Allow now</button>}
      </section>
      <section className={styles.column}>
        <form className={styles.form} method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" action="/success">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label className="visually-hidden" htmlFor="name">Name</label>
          <input className={styles.input} type="text" name="name" id="name" placeholder="Name" required />
          <label className="visually-hidden" htmlFor="email">Email</label>
          <input className={styles.input} type="email" name="email" id="email" inputMode="email" placeholder="Email" required />
          <label className="visually-hidden" htmlFor="message">Message</label>
          <textarea className={styles.message} name="message" id="message" rows="10" placeholder="Message" required />
          <button className={styles.submit} type="submit">Send</button>
        </form>
      </section>
    </div>
  </Layout>
)}

export default Contact