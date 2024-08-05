import styles from './Header.module.scss'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>idk-fi</div>
      <a className={styles.header__link} href=''>
        <Image
          src='/icons/github.svg'
          alt='GitHubLogo'
          className={styles.link__img}
          width={40}
          height={40}
        />
      </a>
    </header>
  )
}

export default Header
