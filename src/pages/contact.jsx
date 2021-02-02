import React from "react"
import Layout from "../components/layout/layout"
import {MetaPage} from '../components/meta/meta'
import {PageData} from "../constants"
import { NsfwIcons } from "../components/sidebar/sidebar"

import './contact.scss'

export default () => {
  const data = PageData.en.contact
  return(
  <Layout lang="en" url="/contact" classes="contact">
    <MetaPage data={data} />
    <h1>{data.h1}</h1>
    <div className="column__wrapper">
      <section className="column">
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className="contact__form">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label className="contact__label" htmlFor="name">Name</label>
          <input className="contact__input" type="text" name="name" id="name" placeholder="Name" />
          <label className="contact__label" htmlFor="email">Email</label>
          <input className="contact__input" type="text" name="email" id="email" placeholder="Email" />
          <label className="contact__label" htmlFor="message">Message</label>
          <textarea className="contact__message" name="message" id="message" rows="10" placeholder="Message" />
          <button className="contact__submit" type="submit">Send</button>
        </form>
      </section>
      <section className="column">
        <div class="contact__flex">
          <svg width="24" height="24">
          <use href="#marker"></use>
          </svg>
          <p> Minsk, Belarus</p>
        </div>
        <hr className="contact__hr"></hr>
        <p>If you need me as a shibari master for photo/video shooting or looking for shibari classes just contact me via form</p>
        <hr className="contact__hr"></hr>
        <p>Follow me on:</p>
        <div className="contact__links">{NsfwIcons}</div>
      </section>
    </div>
  </Layout>
)}