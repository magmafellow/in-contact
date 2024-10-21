'use client'

import { useEffect } from 'react'
import styles from './burger.module.scss'

export default function Burger() {
  useEffect(effect, [])

  return (
    <div id="burger" className={styles.burger}>
      <div id="burger__inner" className={`${styles.burgerInner}`}>
        <div className={`${styles.burgerInner__area}`}>
          <div className={`${styles.burgerInner__dot}`}></div>
        </div>
        <div className={`${styles.burgerInner__area}`}>
          <div className={`${styles.burgerInner__dot}`}></div>
        </div>
        <div className={`${styles.burgerInner__area}`}>
          <div className={`${styles.burgerInner__dot}`}></div>
        </div>
        <div className={`${styles.burgerInner__area}`}>
          <div className={`${styles.burgerInner__dot}`}></div>
        </div>
      </div>
    </div>
  )
}

const onBurgerClick = () => {
  const htmlElement = document.documentElement
  htmlElement?.classList.toggle('mobile-menu-active')
}

const effect = () => {
  const burger = document.querySelector('#burger')
  burger?.addEventListener('click', onBurgerClick)
}
