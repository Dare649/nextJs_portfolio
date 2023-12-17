import styles from "../styles/nav.module.css"
import Nav from '@components/Nav';
import Typing from '@components/Typing'

const Home = () => {
  return (
    <section className={styles.topnav} id="home">
      <Nav/>
      <div className='py-60 flex flex-col items-center justify-center text-center w-full'>
        <Typing/>
      </div>
    </section>
  )
}

export default Home
