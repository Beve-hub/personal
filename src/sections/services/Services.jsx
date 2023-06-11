import './Services.css'
import {FaFigma} from 'react-icons/fa'
import {RiReactjsLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {AiFillAppstore} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h2>My Services</h2>
      <p>I give you the best in all the services below</p>
      <div className='container services_container'>
        <article className='service_card'>
          <FaFigma className='service_icon'/>
          <h3>UI/UX</h3>
          <p>My designs are modern and intuitive. I use industry-standard rules to make sure your users have fun using your products.</p>
        </article>

        <article className='service_card'>
          <RiReactjsLine className='service_icon'/>
          <h3>Frontend Development</h3>
          <p>Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop.</p>
        </article>

      <article className='service_card'>
        <FaServer className='service_icon'/>
        <h3>Backend Development</h3>
        <p>The security of your business/product is taken seriously right from the start of the project. I will make sure your website/app is secure from attack.</p>
      </article>

       <article className='service_card'>
        <AiFillAppstore className='service_icon'/>
        <h3>App Development</h3>
        <p>Unlike other developer in the market, I will be building an app that runs on both IOS and Android devices without any extra cost to you.</p>
      </article>
      </div>
    </section>
  )
}

export default Services
