import Burger from './burger'
import styles from './main.module.scss'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <>
      <header id="header" className={`${styles.header}`}>
        <div className={`${styles.header__container} container`}>
          <div className={`${styles.logo}`}>
            <div className={styles.logo__svgBox}>
              <img
                className={styles.logo__svgBoxImg}
                src="/assets/images/logo.svg"
                alt="logotype svg icon"
              />
            </div>
            <div className={styles.logo__text}>In Contact</div>
          </div>

          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="#">
                  Jarkies
                </a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="#">
                  Groups
                </a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="#">
                  Profile
                </a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="#">
                  Finder
                </a>
              </li>
            </ul>
          </nav>

          <Burger />
        </div>
      </header>
    </>
  )
}
