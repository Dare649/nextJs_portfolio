import '@styles/globals.css'
import Nav from '@components/Nav'


export const metadata = {
    title: "Portfolio",
    description: "Damilare Tech Portfolio"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body className='bg-black text-white font-serif'>
        <Nav/>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;
