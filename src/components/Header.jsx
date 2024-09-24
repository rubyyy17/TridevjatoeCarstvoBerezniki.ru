import React from 'react'
import { IoReorderThreeSharp } from "react-icons/io5";


function Header() {
  return (
    <div className='header'> 
      
      <nav className='header1'>
      <img src="../pictures/asd.png" height={108} width={100}/>

      <h1 className='yazi'>3/9 Царство</h1> 
      <img className='iconharita' src="../pictures/iconharita.png" />
      <h1 className='adres'>Набережная, 41/1, г. Березники</h1>
      <img className='telefonicon' src="../pictures/Group.png" alt="" />
      <h1 className='telefon'>+7 (992) 202-08-88</h1>
      <h1 className='linkyazi'>Написать нам:</h1>
      <a href="https://vk.com/tridevatoetsarstvo" target='_blank'><img src="../pictures/Vector.png" alt="" /></a>
      <a href="http://t.me/Nastya_expert" target='_blank'><img src="../pictures/telegram.png" alt="" /></a>
      </nav>

      <nav className='header2'>
      <img src="../src/pictures/arama.png" />

      <h1 className='yazi1'>3/9 Царство</h1> 

      <IoReorderThreeSharp style={{color:"#8A169A", height:"2em", width:"2em"}} />
      </nav>

    </div>
  )
}

export default Header