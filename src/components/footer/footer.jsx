import React from "react"
import * as styles from './footer.module.scss'

const Footer = (props) => {
  const getYear = new Date().getFullYear()
  const lang = props.lang

  return(
      <footer className={styles.footer}>
        <p>© { getYear === 2020 ? getYear : '2020 - ' + getYear }
        {lang === 'ru' ?
        ' AZZKY. Все права защищены. Использование фотографий в коммерческих целях и любые фотоманипуляции запрещены. Перепост разрешён при условии указания авторства и ссылок.' :
        ' AZZKY. All website images are copyright of mine and attending photographers. All rights reserved. Do not commercial use or edit any of my images without my permission. Do not use my images without authorship attribution and original linking.'}</p>
        <div>
          <p className={styles.p}>{lang === 'ru' ? 'дизайн от' : 'designed by'} <a href="https://www.behance.net/m0ther_0f_memes" rel="noreferrer" target="_blank">Taghiyeva Anna</a></p>
          <p>Developed by me via <a href="https://www.gatsbyjs.com" rel="noreferrer" target="_blank">Gatsby</a></p>
        </div>
      </footer>
)}

export default Footer