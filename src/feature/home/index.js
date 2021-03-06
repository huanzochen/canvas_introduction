import { Link } from 'react-router-dom'

import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.reactSection}>
        <Link to="/">Home</Link>
        <Link to="/canvas-in-react">canvas-in-react</Link>
        <Link to="/canvas-in-react-hook">canvas-in-react-hook</Link>
      </div>
      <div className={styles.staticSection}>
        <a href="/beginner">beginner</a>
        <a href="/animations">animations</a>
        <a href="/animations_2">animations_2</a>
        <a href="/particles">particles</a>
      </div>
    </div>
  )
}

export default Home
