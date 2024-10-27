import styles from './card.module.scss'

export default function Card() {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.card__decor}`}>
        <img src="/assets/images/decor-blue-ellipse.png" alt="decor blue ellipse" />
      </div>
      <div className={`${styles.card__inner}`}>
        <div className={`${styles.card__titleBox}`}>
          <div className={`${styles.titleBox__title}`}>Jarkies</div>
          <div className={`${styles.titleBox__iconWrapper}`}>
            <img
              className={`${styles.titleBox__icon}`}
              src="/assets/icon/jarkie.svg"
              alt="jarkie svg"
            />
          </div>
        </div>
        <div className={`${styles.card__description}`}>
          Messages are gone and sent to receiver immediately Jarkie is a synonym
          to “chat”
        </div>
        <div className={`${styles.card__btnBox}`}>
          <button className={`${styles.card__btn}`}>Try Out</button>
        </div>
      </div>
    </div>
  )
}
