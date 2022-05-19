import { Link } from 'react-router-dom'

import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.reactSection}>
        <Link to="/">Home</Link>
        <Link to="/canvas-in-react">canvas-in-react</Link>
      </div>
      <div className={styles.staticSection}>
        <a href="/beginner">beginner</a>
      </div>
    </div>
  )
}

export default Home
