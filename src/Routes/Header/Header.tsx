import styles from "./Header.module.scss";

import icon_search from "/src/assets/icon_search.png";

const Header = () => {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}><span className={styles.code}>Code</span>lândia</h1>
        <div className={styles.box_search}>
            <img src={icon_search} alt="Search"/>
            <input type="text" placeholder="Pesquisar no blog"/>
        </div>
    </header>
  )
}

export default Header