import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

export default function Logo() {
return (
  <Link to="/orders/new" className={styles.Logo}>COFFEE SHOP</Link>

  // <div className={styles.Logo}>
  //   <div>Coffee</div>
  //   <div>Shop</div>
  // </div>
)
}