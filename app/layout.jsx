import '@styles/globals.css'
import Home from '@app/page';
import About from '@app/pages/about/page';
import Projects from '@app/pages/projects/page';
import Technologies from '@app/pages/technologies/page';
import Contact from '@app/pages/contact/page';
import Footer from '@app/pages/footer/page';

export const metadata = {
    title: "Portfolio",
    description: "Damilare Tech Portfolio"
}

const RootLayout = () => {
  return (
    <html lang='en'>
      <body>
        <main className='app bg-gradient-to-r from-sky-200 to-sky-50'>
          <Home/>
          <About/>
          <Projects/>
          <Technologies/>
          <Contact/>
          <Footer/>
        </main>
      </body>
    </html>
  )
}

export default RootLayout;
