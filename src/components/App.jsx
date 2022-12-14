import {useEffect} from 'react'
import Awards from './home/Awards'
import Clients from './home/Clients'
import Contacts from './home/Contacts'
import Experience from './home/Experience'
import Footer from './Footer'
import Header from './header/Header'
import Intro from './home/Intro'
import Loader from './Loader'
import Modal from './Modal'
import Projects from './home/Projects'
import Services from './home/Services'
import Testimonials from './home/Testimonials'

const App = () => {

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "js/script.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <Loader />
      <div className="wrapper">
        <Header />
        <div id="content" className="content">
            <div className="homepage-personal a-pagepiling">
              <Intro />
              <Services />
              <Projects />
              <Awards />
              <Experience/>
              <Clients />
              <Testimonials />
              <Contacts />
            </div>
        </div>
        <Footer />
      </div>
      <Modal />
    </>
  )
}

export default App