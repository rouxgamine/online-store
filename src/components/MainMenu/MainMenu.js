import styles from './MainMenu.module.scss';

export default function MainMenu({ mainMenus, activeMenu, setActiveMenu }) {
  const menus = mainMenus.map(menu =>
    <li
      key={menu}
      className={menu === activeMenu ? styles.active : ''}
      // below code will also work, but will give a warning
      // className={cat === activeMenu && 'active'}
      onClick={() => setActiveMenu(menu)}
    >
      {menu}
    </li>
  );
  return (
    <ul className={styles.MainMenu}>
      {menus}
    </ul>
  );
}