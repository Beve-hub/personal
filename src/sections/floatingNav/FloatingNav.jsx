import './FloatingNav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser} from 'react-icons/ai'
import { MdPortrait } from 'react-icons/md'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'



const FloatingNav = () => {
  const [activeBar, setActiveBar] = useState('#');
  return (
    <section id='floating' className='bar'>
      <a href='#' onClick={() => setActiveBar('#')} className={activeBar === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveBar('#about')} className={activeBar === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#services' onClick={() => setActiveBar('#services')} className={activeBar === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#portfolio' onClick={() => setActiveBar('#portfolio')} className={activeBar === '#portfolio' ? 'active' : ''}><MdPortrait/></a>
      <a href='#contact' onClick={() => setActiveBar('#contact')} className={activeBar === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </section>
  )
}

export default FloatingNav
