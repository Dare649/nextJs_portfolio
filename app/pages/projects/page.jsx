import Slide from "@components/Slide"
import { projects} from "@components/dummy"

const Projects = () => {
    const slide = projects
  return (
    <section className="lg:px-5 sm:px-2">
      <h1 className="text-red-500 text-2xl font-bold mb-10 capitalize">projects</h1>
      <div className="lg:mx-40 sm:mx-2">
        <Slide slide={slide} click={"click here"} autoSlide={true} autoSlideInterval = {7000}/>
      </div>
    </section>
  )
}

export default Projects
