import Navbar from './sections/navbar/Navbar'
import Header from './sections/header/Header'
import About  from './sections/About/About'
import Contact  from './sections/contact/Contact'
import Portfolio from './sections/porfolio/Portfolio'
import Services from './sections/services/Services'
import FloatingNav from './sections/floatingNav/FloatingNav'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <FloatingNav/>
    </main>
  )
}

export default App;