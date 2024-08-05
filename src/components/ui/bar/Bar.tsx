import Image from 'next/image'
import styles from './Bar.module.scss'

const Bar = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.player}>
        <div className={styles.player__controls}>
          <div className={styles.player__control}>
            <Image
              src='/icons/prev.svg'
              alt='Prev track'
              width={24}
              height={24}
            />
          </div>
          <div className={styles.player__control}>
            <Image src='/icons/pause.svg' alt='Pause' width={24} height={24} />
          </div>
          <div className={styles.player__control}>
            <Image
              src='/icons/next.svg'
              alt='Next track'
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className={styles.player__track}>
          <span className={styles.track__name}>
            Kurt Cobain - And i love her
          </span>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.menu__item}>
          <Image
            src='/icons/sound.svg'
            alt='Open sound level settings menu'
            width={24}
            height={24}
          />
        </div>
        <div className={styles.menu__item}>
          <Image
            src='/icons/scenes.svg'
            alt='Open scenes select menu'
            width={24}
            height={24}
          />
        </div>
        <div className={styles.menu__item}>
          <Image
            src='/icons/settings.svg'
            alt='Open scene settings menu'
            width={24}
            height={24}
          />
        </div>
        <div className={styles.menu__item}>
          <Image
            src='/icons/burger.svg'
            alt='Open app settings menu'
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  )
}

export default Bar
