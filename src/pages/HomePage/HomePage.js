import styles from './HomePage.module.scss';
import MainMenu from '../../components/MainMenu/MainMenu'



export default function HomePage() {
  return (
    <div className="HomePage">
      <MainMenu />
      <h1>Welcome to our Coffee-Shop</h1>
      <h2>Please, make your selection</h2>
    </div>
  )
}



