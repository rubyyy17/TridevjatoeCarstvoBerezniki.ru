import React from 'react'

function Footer() {
  return (
    
    
        <div className='footer' >
            <div className='amed'>
        <div className='kutular' style={{marginRight:"40px"}}>
            
                <div className='betweenspace' style={{width:"390.53px"}}>
                    <p className='footeryazi1'>Больше фото наших праздников в соцсетях</p>
                    <a href="https://vk.com/tridevatoetsarstvo" target='_blank'><img src="../src/pictures/Vector.png" alt="" /></a>
                </div>

            
            <div>
                <div className='betweenspace'>
                    <p className='footeryazi1' style={{display:"flex"}}>Хочешь к нам в команду? Отправь свое резюме </p>
                    <a href="http://t.me/Nastya_expert" target='_blank'><img src="../src/pictures/telegram.png" alt="" /></a>
                </div>
            </div>

        
        
        </div>

        <div  className='kutular' >
            <div div className='footertelefonidiv' >
                <div className='row'>
                    <img src="../src/pictures/Group.png" alt="" />
                    <p className='yazi' style={{fontSize:"16px"}}>+7 (992) 202-08-88</p>
                </div>

            </div>
            <div div className='footertelefonidiv'>
                <div className='row'>
                <img src="../src/pictures/harita.png" alt="" />
                <p className='adres'>Набережная, 41/1, г. Березники</p>
                </div>
            </div>
                    
        </div>
    
        <div >
            <button className='button' style={{width:"320px"}}>
              <p className='footerbtnyazi'>
              Заказать праздник
              </p>
            </button>
        </div>
        </div>

        <div className='amed1'>

        <p className='footeryazi1'>Больше фото наших праздников в соцсетях</p>
        <div className='row' style={{margin:"20px 0 20px 0"}}>
        <img src="../src/pictures/Vector.png" alt="" />
        <img src="../src/pictures/telegram.png" alt="" />
        </div>
        <div className='column'>
            <button className='button' >
              <p className='footerbtnyazi'>
              Заказать праздник
              </p>
            </button>
         </div>
            <p className='footeryazi1' style={{display:"flex"}}>Хочешь к нам в команду? Отправь свое резюме </p>

        </div>
        </div>
    

    

  )
}

export default Footer