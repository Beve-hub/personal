import Abouti from '../../assets/Frame 113.png'
import './About.css'
import Css from '../../assets/css.png'
import Html   from '../../assets/html 1.png'
import Reacto   from '../../assets/react 1.png'
import Git  from '../../assets/git 1.png'
import Github  from '../../assets/Github 1.png'
import Javascript from '../../assets/js 1.png'
import Figma   from '../../assets/figma 1.png'
import Tai   from '../../assets/tailwindcss.png'
import Php  from '../../assets/photoshop.png'
import illustrator  from '../../assets/illustrator.png'


const About = () => {
  return (
    <section id="about">
      <div className='container about_container'>
        <div className='about_left'>
          <div className='about_portrait'>
             <img src={Abouti} alt="Abouti"/>
          </div>
        </div>
        <div className='about_right'>
          <h2>About me</h2>
          <p>
          I'm a Frontend developer based in Nigeria with 2 years of experience in the development industry. My core strengths are Frontend development (React), UI/UX(Figma), Graphics Design and illustration (Photoshop). if you' re not here for that, you'll probably find me building projects and having fun on Twitter, or networking badly on LinkedIn. My top priority is to get your business online the right way, giving  you industry-standard design and all the functionality you need to operate smoothly online. Get in touch today with the details of your project let's get started! check out my resume below!
          </p>
          
          <h1 className='skill'>Skill And Experience</h1>

          <div className='about_cards'>
            <img src={Html} alt=''/>
            <img src={Css} alt=''/>
            <img src={Javascript} alt=''/>
            <img src={Git} alt=''/>
            <img src={Reacto} alt=''/>
            <img src={Tai} alt=''/>
            <img src={Github} alt=''/>
            <img src={Figma} alt=''/>
            <img src={Php} alt=''/>
            <img src={illustrator} alt='' className='w-[50px] h-[50px]'/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About