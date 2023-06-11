import './Contact.css'
import {IoLogoWhatsapp} from 'react-icons/io'
import {FaLinkedin} from 'react-icons/fa'

const Contact = () => {
  return (
   <section id='contact'> 
     <h2>contact</h2>
     <p>Let get in touch</p>

     <div className='container contact_container'>
       <div className='contact_options'>
        <article className='contact_option'>
          <h3>Email</h3>
          <h4 className='letters'>victor.interface23@gmail.com</h4>
          <a href='mailto:victor.interface23@gmail.com'>Send a message</a>
        </article>
        <article className='contact_option'>
         <FaLinkedin className='contact_icon'/>
         <h3>Linkden</h3>
         <h4 className='letters'>victor okeke</h4>
         <a href='https://www.linkedin.com/in/victor-okeke-66a576218'>Send a message</a>
        </article>
        <article className='contact_option'>
         <IoLogoWhatsapp  className='contact_icon'/>
         <h3>Whatsapp</h3>
         <h4 className='letters'>+2348184207181</h4>
         <a href='https://whatsapp.com/dl/'>Send a message</a>
        </article>
       </div>

       <form action="">
        <input type='text' name='name' placeholder='full name' required/>
        <input type='email' name='email' placeholder='email' required />
        <textarea name='message' rows='/' placeholder='messages' required ></textarea>
        <button type='submit' className='btn primary'>Send message</button>
       </form>
     </div>
   </section>
  )
}

export default Contact
