'use client';

import { useEffect } from 'react'
import styles from './burger.module.scss'

export default function Burger() {
  useEffect(effect, [])
  
  return (
    <div id='burger' className={`${styles.burger}`}>
          <div className={`${styles.burger__area}`}>
            <div className={`${styles.burger__dot}`}></div>
          </div>
          <div className={`${styles.burger__area}`}>
            <div className={`${styles.burger__dot}`}></div>
          </div>
          <div className={`${styles.burger__area}`}>
            <div className={`${styles.burger__dot}`}></div>
          </div>
          <div className={`${styles.burger__area}`}>
            <div className={`${styles.burger__dot}`}></div>
          </div>
        </div>
  )
}

const onBurgerClick = () => {
  const mobileMenu = document.querySelector('#mobile-menu') as any
  const htmlElement = document.documentElement
  htmlElement?.classList.toggle('mobile-menu-active')
}

const effect = () => {
  const burger = document.querySelector('#burger')
  burger?.addEventListener('click', onBurgerClick)
}
