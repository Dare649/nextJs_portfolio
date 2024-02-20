import styles from "../styles/nav.module.css"
import Typing from "@components/Typing"

const Home = () => {
  return (
    <section className= {`${styles.topnav} -mt-10`}>
      <div className='py-60 flex flex-col items-center justify-center text-center w-full'>
        <Typing/>
      </div>
    </section>
  )
}

export default Home
