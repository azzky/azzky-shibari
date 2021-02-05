import React from "react"
import Layout from "../components/layout/layout"
import {MetaPage} from '../components/meta/meta'
import {PageData} from "../constants"
import { NsfwIcons } from "../components/sidebar/sidebar"

import styles from './contact.module.css'

export default () => {
  const data = PageData.en.contact
  return(
  <Layout lang="en" url="/contact" classes="contact">
    <MetaPage data={data} />
    <h1>{data.h1}</h1>
    <div className={styles.wrapper}>
      <section className={styles.column}>
        <form className={styles.form} method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label className="visually-hidden" htmlFor="name">Name</label>
          <input className={styles.input} type="text" name="name" id="name" placeholder="Name" />
          <label className="visually-hidden" htmlFor="email">Email</label>
          <input className={styles.input} type="email" name="email" id="email" inputMode="email" placeholder="Email" />
          <label className="visually-hidden" htmlFor="message">Message</label>
          <textarea className={styles.message} name="message" id="message" rows="10" placeholder="Message" />
          <button className={styles.submit} type="submit">Send</button>
        </form>
      </section>
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
      </section>
    </div>
  </Layout>
)}