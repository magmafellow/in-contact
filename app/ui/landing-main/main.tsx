import Cards from './cards'
import styles from './main.module.scss'

export default function LandingMain() {
  return (
    <>
      <main className={`${styles.main}`}>
        <div className={`${styles.main__container} container`}>
          <h1 className={`${styles.main__title} title`}>
            Handle Contacts - Other is already done
          </h1>
          <p className={`${styles.main__para} para`}>
            Create Your first chat and invite a member. You do not need phone
            number or something else. Your account is only GitHub or credentials
          </p>
        </div>
      </main>
      
      <Cards />
    </>
  )
}
