import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

export default function Logo() {
return (
  <Link to="/orders/new"><img className={styles.Logo} src='https://i.imgur.com/ZKmyeOW.png' alt='COFFEE SHOP' /></Link>

)
}