import Card from './card'
import styles from './cards.module.scss'

export default function Cards() {
  return (
    <div className={styles.cards}>
      <div className={`${styles.cards__container} container`}>
        <div className={`${styles.cards__inner}`}>
          <Card />
        </div>
      </div>
    </div>
  )
}
