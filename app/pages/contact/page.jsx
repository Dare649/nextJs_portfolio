import linkedin from '@public/assets/images/linkedinlogo.png';
import call from '@public/assets/images/calllogo.png';
// import email from "@public/assets/images/emaillogo.png";
import gitHub from '@public/assets/images/github.png';
import Image from 'next/image';

const Contact = () => {
  return (
    <section className='py-20' id='contact'>
      <h1 className='text-center capitalize font-bold text-4xl mb-10'>contact & social</h1>
            <div className="flex flex-row item-center justify-between p-10">
                <a href="tel:+234 810 0000 1427" target='_blank'>
                    <Image
                        className="w-20 h-20 rounded-full"
                        src={call}
                        alt='damilare portfolio'
                        width={"fill"}
                    />
                </a>
                <a href="https://www.linkedin.com/in/damilare-ajayi-00105214b/" target='_blank'>
                    <Image
                        className="w-20 h-20 rounded-full"
                        src={linkedin}
                        alt='damilare portfolio'
                        width={"fill"}
                    />
                </a>
                {/* <a href="damilareajayi01@gmail.com" target='_blank'>
                    <Image
                        className="w-20 h-20 rounded-full"
                        src={email}
                        alt='damilare portfolio'
                        width={"fill"}
                    />
                </a> */}
                <a href="https://github.com/Dare649?tab=repositories" target='_blank'>
                    <Image
                        className="w-20 h-20 rounded-full"
                        src={gitHub}
                        alt='damilare portfolio'
                        width={"fill"}
                    />
                </a>
            </div>
    </section>
  )
}

export default Contact
