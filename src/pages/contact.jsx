import React from "react"
import Layout from "../components/layout/layout"
import {MetaPage} from '../components/meta/meta'
import {PageData} from "../constants"
import { NsfwIcons } from "../components/sidebar/sidebar"

import './contact.scss'

export default () => {
  const data = PageData.en.contact
  return(
  <Layout lang="en" url="/contact" classes="contact" light={true}>
    <MetaPage data={data} />
    <h1>{data.h1}</h1>
    <div className="column__wrapper">
      <section className="column">
        <p>if you need me as a shibari master find me here:</p>
        {NsfwIcons}
      </section>
      <section className="column">
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className="contact__form">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="10" />
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  </Layout>
)}