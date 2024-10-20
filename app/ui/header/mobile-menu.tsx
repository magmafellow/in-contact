import styles from './mobile-menu.module.scss'

export default function MobileMenu() {
  return (
    <div id='mobile-menu' className={`${styles.mobile}`}>
      <ul className={styles.mobile__list}>
        <li className={`${styles.mobile__item}`}>
          <a className={`${styles.mobile__link}`} href="#">
            Jerkies
          </a>
        </li>
        <li className={`${styles.mobile__item}`}>
          <a className={`${styles.mobile__link}`} href="#">
            Groups
          </a>
        </li>
        <li className={`${styles.mobile__item}`}>
          <a className={`${styles.mobile__link}`} href="#">
            Profile
          </a>
        </li>
        <li className={`${styles.mobile__item}`}>
          <a className={`${styles.mobile__link}`} href="#">
            Finder
          </a>
        </li>
      </ul>
    </div>
  )
}
