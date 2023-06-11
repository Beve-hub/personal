import './Header.css'
import HeaderImage from '../../assets/Frame 1.png'
import data from './data'
import CV from '../../assets/cv.pdf'




const Header = () => {
  return (
    <header id='header'>
     <div className='container header_container'>
      <div className='header_profile'>
       <img src={HeaderImage} alt='' className='file'/>
      </div>
      <h3>OKEKE VICTOR CHINEMERE</h3>
      <p>
      You are a click away from building your dream website pr web app, 
      send me the details of your project for a modern, mobile responsive, 
      highly performant website today! 
      </p>
      <div className='header_cta'>
       <a href={CV} className='btn primary'>Download cv</a>
       <a href='#contact' className='btn light'>Let Talk</a>
      </div>
      <div className='header_socials'>
       {
        data.map(item => <a key={item.id} href={item.link} target="_blank" 
        rel="noopener noreferrer"> {item.icon} </a>)
       }
      </div>
     </div>
    </header>
  )
}

export default Header
