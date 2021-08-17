import React from "react"
import Layout from "../components/layout/layout"
import {MetaPage} from '../components/meta/meta'
import {PageData} from "../constants"
import { Sidebar } from "../components/sidebar/sidebar"
import Push from "../components/push-notifications"
import { configContact } from '../constants'

import {
  Form,
  Wrapper,
  Submit,
  IconGroup,
  Column,
  Message,
  Input,
  Hr
} from '../styles/contact.styled'

const lang = 'ru'

const Contact = () => {
  const data = PageData.ru.contact

  return(
  <Layout lang={lang} url="/ru/contact" classes="contact">
    <MetaPage data={data} type="contact" />
    <h1>{data.h1}</h1>
    <Wrapper>
      <Column>
        <IconGroup>
          <svg width="24" height="24">
          <use href="#marker"></use>
          </svg>
          <p>{configContact.regionText[lang]}</p>
        </IconGroup>
        <Hr/>
        <p>{configContact.promoText[lang]}</p>
        <Hr/>
        <p>{configContact.followMeText[lang]}</p>
        <Sidebar isBig={true}/>
        <Hr/>
        <Push isVisible={true}
        lang={lang} />
      </Column>
      <Column>
        <Form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" action="/success">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label className="visually-hidden" htmlFor="name">{configContact.nameLabel[lang]}</label>
          <Input type="text" name="name" id="name" placeholder={configContact.nameLabel[lang]} required aria-required="true" />
          <label className="visually-hidden" htmlFor="email">{configContact.emailLabel[lang]}</label>
          <Input type="email" name="email" id="email" inputMode="email" placeholder={configContact.emailLabel[lang]} required aria-required="true" />
          <label className="visually-hidden" htmlFor="message">{configContact.messageLabel[lang]}</label>
          <Message name="message" id="message" rows="10" placeholder={configContact.messageLabel[lang]} required aria-required="true" />
          <Submit type="submit">{configContact.sendbutton[lang]}</Submit>
        </Form>
      </Column>
    </Wrapper>
  </Layout>
)}

export default Contact