import './Portfolio.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.png'
import IMG5 from '../../assets/project5.png'
import IMG6 from '../../assets/project6.png'
import IMG8 from '../../assets/Project8.jpg'
import IMG7 from '../../assets/Project7.jpg'




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>portfolio</h2>
      <p>This is a portfolio item title</p>
      <div className='container portfolio_container'>
       <article className='portfolio_item'>
        <div >
          <img src={IMG1} alt='' className='portfolio_item-image'/>
        </div>
        <div className='portfolio_item-cta'>
          <a href='https://github.com/Beve-hub/certvalut' className='btn primary' target='_blank'>Github</a>
          <a href='https://www.behance.net/gallery/172290425/Certvault-website?' className='btn btn-primary' target='_blank'>Design</a>
        </div>
       </article>

       <article className='portfolio_item'>
        <div >
          <img src={IMG2} alt='' className='portfolio_item-image'/>
        </div>
        <div className='portfolio_item-cta'>
          <a href='https://github.com/Beve-hub/ecommerce-page' className='btn primary' target='_blank'>Github</a>
          <a href='https://www.behance.net/gallery/152582117/afri-tone/modules/861238061' className='btn btn-primary' target='_blank'>Design</a>
        </div>
       </article>

       <article className='portfolio_item'>
        <div >
          <img src={IMG3} alt='' className='portfolio_item-image'/>
        </div>
        <div className='portfolio_item-cta'>
          <a href='https://github.com/Beve-hub/ecommerce-page' className='btn primary' target='_blank'>Github</a>
          <a href='https://www.behance.net/gallery/152582117/afri-tone/modules/861238061' className='btn btn-primary' target='_blank'>Design</a>
        </div>
       </article>

       <article className='portfolio_item'>
        <div >
          <img src={IMG4} alt='' className='portfolio_item-image'/>
        </div>
        <div className='portfolio_item-cta'>
          <a href='https://github.com/Beve-hub/ecommerce-page' className='btn primary' target='_blank'>Github</a>
          <a href='https://www.behance.net/gallery/155607287/aviation-tracker' className='btn btn-primary' target='_blank'>Design</a>
        </div>
       </article>

       <article className='portfolio_item'>
        <div >
          <img src={IMG5} alt='' className='portfolio_item-image'/>
        </div>
        <div className='portfolio_item-cta'>
          <a href='https://github.com/Beve-hub/ecommerce-page' className='btn primary' target='_blank'>Github</a>
          <a href='https://www.behance.net/gallery/152290669/case-study-for-Ideal-Roommate-applake-house' className='btn btn-primary' target='_blank'>Design</a>
        </div>
       </article>

       <article className='portfolio_item'>
        <div >
          <img src={IMG6} alt='' className='portfolio_item-image'/>
        </div>
        <div className='portfolio_item-cta'>
          <a href='https://github.com/Beve-hub/ecommerce-page' className='btn primary' target='_blank'>Github</a>
          <a href='https://www.behance.net/gallery/149683359/designed-a-landing-page' className='btn btn-primary' target='_blank'>Design</a>
        </div>
       </article>

       <article className='portfolio_item'>
        <div >
          <img src={IMG7} alt='' className='portfolio_item-image'/>
        </div>
        <div className='portfolio_item-cta'>
          <a href='https://github.com/Beve-hub/ecommerce-page' className='btn primary' target='_blank'>Github</a>
          <a href='https://www.behance.net/gallery/152582117/afri-tone/modules/861238061' className='btn btn-primary' target='_blank'>Design</a>
        </div>
       </article>


       <article className='portfolio_item'>
        <div >
          <img src={IMG8} alt='' className='portfolio_item-image'/>
        </div>
        <div className='portfolio_item-cta'>
          <a href='https://github.com/Beve-hub/ecommerce-page' className='btn primary' target='_blank'>Github</a>
          <a href='https://www.behance.net/gallery/152582117/afri-tone/modules/861238061' className='btn btn-primary' target='_blank'>Design</a>
        </div>
       </article>
       
       
      </div>
    </section>
  )
}

export default Portfolio
