import Link from 'next/link';

const Footer = () => {
  return (
    <section className='py-20 border-t-2 border-blue-500'>
      <p className='text-center text-xl font-bold capitalize'> &copy; damilare ajayi 2023</p>
      <Link href={"home"} className='flex float-right text-lg font-bold text-white bg-blue-600 rounded-lg px-3 py-1'>back to the top</Link>
    </section>
  )
}

export default Footer
