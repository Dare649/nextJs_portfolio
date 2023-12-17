import Image from 'next/image';
import vite from "@public/assets/images/vite.png"
import react from "@public/assets/images/reactjsimg.png"
import js from "@public/assets/images/jsImg.jpg"
import git from "@public/assets/images/git.png"
import github from "@public/assets/images/github.png"
import html from "@public/assets/images/html.png"
import bootstrap from "@public/assets/images/bootstrap.png"
import tailwind from "@public/assets/images/tailwind.png"
import css from "@public/assets/images/cssLogo.png"
import next from "@public/assets/images/next.png"


const Technologies = () => {
  return (
    <section className='py-20' id='technologies'>
        <h1 className='text-center capitalize font-bold text-4xl mb-10'>technologies</h1>
        <div className="technologies p-5">
            <div className='flex flex-col'>
                <div className='flex lg:flex-row sm:flex-col gap-5 items-center justify-between'>
                    <div className="w-40 h-40">
                        <Image
                            src={react}
                            width={"fill"}
                            alt="damilare portfolio"
                        />
                    </div>
                    <div className="w-40 h-40">
                        <Image
                            src={js}
                            width={"fill"}
                            alt="damilare portfolio"
                        />
                    </div>
                    <div className="w-40 h-40">
                        <Image
                            src={html}
                            width={"fill"}
                            alt="damilare portfolio"
                        />
                    </div>
                    <div className="w-40 h-40">
                        <Image
                            src={css}
                            width={"fill"}
                            alt="damilare portfolio"
                        />
                    </div>
                    <div className="w-40 h-40">
                        <Image
                            src={git}
                            width={"fill"}
                            alt="damilare portfolio"
                        />
                    </div>
                </div>
                <div className='flex lg:flex-row sm:flex-col gap-5 mt-8 items-center justify-between'>
                    <div className="w-40 h-40">
                        <Image
                            src={github}
                            width={"fill"}
                            alt="damilare portfolio"
                        />
                    </div>
                    <div className="w-40 h-40">
                        <Image
                            src={vite}
                            width={"fill"}
                            alt="damilare portfolio"
                        />
                    </div>
                    <div className="w-40 h-40">
                        <Image
                            src={tailwind}
                            width={"fill"}
                            alt="damilare portfolio"
                        />
                    </div>
                    <div className="w-40 h-40">
                        <Image
                            src={bootstrap}
                            width={"fill"}
                            alt="damilare portfolio"
                        />
                    </div>
                    <div className="w-40 h-40">
                        <Image
                            src={next}
                            width={"fill"}
                            alt="damilare portfolio"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Technologies
