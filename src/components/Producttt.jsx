import React, { useState } from 'react'
import '../App.css'
import { TfiPlus } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";
import { Slide,Zoom,Fade } from 'react-slideshow-image';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import 'react-slideshow-image/dist/styles.css'
import  { Component } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';




function Ymap() {
  const defaultState = {
    center: [59.392943, 56.847323],
    zoom: 17,
    
    
    
  };

  return (
    <YMaps>
      <Map style={{width:"1000px",height:"578px"}} defaultState={defaultState}>
        <Placemark geometry={[59.392943, 56.847323] } />
      </Map>
    </YMaps>
  );
}






class Moruk extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {current: 0 };
  }

  back() {this.slideRef.current.slickPrev();}

  next() {
    this.slideRef.current.slickNext(); }

  render() {
    const properties = {
      duration: 1000,
      autoplay: false,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: "ease",
      
      
    };
    const slideImages = [
      "../src/pictures/varya1.png",
      "https://s3-alpha-sig.figma.com/img/922a/3efe/1203f48d6b031290ad007f9072b582b0?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0oo7LR3T5Vt6ZVK2cGFXZA1IkY1~kNZG-NGmYISUO~j1KL7Y8ysYe~I8ojVf0G-q1dXvvtfeY8yQJK3LNWCX5hbIYTFCNZYy9rJfPMR7sAjs8FSvZ~JSh~PFDAnoFbs2ggfyDE4iLFdMz~nBYlyWLy50uHwW4UqwhQzbCGHc4opwaP1m4RSxmoVk6fDWdhcNsUORy2wSYNqNt1eYFudMbfoU~UHm9GpgusX6XeTXGzdbDIWfYtDvnpaSQh5MDM~y80DFJWBEF3BIQDr-Q~NIkUMdhkLBqUixPS9n6tk7urlRhx2nBhQomhweVXwRQT4WpwecirYMZfUioYrlX19UA__",
      "https://s3-alpha-sig.figma.com/img/514f/d1bc/09479256ffe97021ba8de0d738b75b81?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RDn7pG46TPxgEJ1p1P8f2mgA7LCWgGMtlsgGvdsEqxdHg4J08axjLvEPulyzbqiMy4IKgSDAqe0OiX3HFX0A9Z1p6aMrjG956aYpwDyMZjcnFsqfd8n56yojK3X1SeE6rDrQ7zMzPeYKHxH~EftY2Ky5jgsUlnjthqSKKaG1-F4L0t7zGPvYJNfqpkejjnJpJfrU5lY~rLYqokUkFRAp3UmA3OBfg1dxKC6w7YprPg-Ojw6E5WjCpKQM6I-kqSEQDOvGf091yQg43sZEDRpoeFFLAv8gMcqGlTyxObR2M0kJRv8U8TFQ6MCQmPnyaqOkp1bxl6dn1q6wOzxL-oK4AQ__"
      
      ];
    return (
      <div className="moruk">
        <div className='leftok'>
          
          <MdChevronLeft className='arrowbox' onClick={this.back} style={{width:"2em",height:"2em"}} />
          
        </div>
        <div className="slide-container">
          <Slider ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="lazy" src={each} alt="sample" />
              </div>
            ))}
          </Slider>
        </div>

        <div>
          <MdKeyboardArrowRight className='arrowbox' onClick={this.next} style={{width:"2em",height:"2em"}}/>
        </div>
      </div>
    );
  }
}


class Moruk1 extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {current: 0 };
  }

  back() {this.slideRef.current.goBack();}

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 5000,
      autoplay: false,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: "ease"
    };
    const slideImages = [
      {Number:"1",Text1:"Позвонить или написать нам",image:"../src/pictures/telefon1.png",Text2:"Позвоните нам по телефону, напишите в мессенджерах или оставьте заявку на сайте. Расскажите какой праздник хотите, какой возраст  детей, их любимые герои, сколько вас человек "},

      {Number:"2",Text1:"Выбрать программу праздника",image:"../src/pictures/paint.png",Text2:"Администратор по телефону сориентирует вас о программах, дополнениях и поможет выбрать наилучшую для ваших детей тематику и программу праздника."},

      {Number:"3",Text1:"Выбрать дату праздника",image:"../src/pictures/takvim.png",Text2:"Выбрать дату и время и место праздника"},

      {Number:"4",Text1:"Внести предоплату",image:"../src/pictures/cuzdan.png",Text2:"Внесите предоплату в размере 1000 рублей любым удобным способом: обычным переводом с помощью СБП либо наличными"},

      {Number:"5",Text1:"Готово!",image:"../src/pictures/ok.png",Text2:"Отлично, вам остается лишь  наслаждаться праздником"}
      
      ];
    return (
      <div className="moruk1">
        <div>
          
          <MdChevronLeft className='arrowbox' onClick={this.back} style={{width:"2em",height:"2em"}} />
          
        </div>
        <div className="slide-container1">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide1">
                <div className='box1'><h1>{each.Number}</h1></div>
                <h1 className='Text1' >{each.Text1}</h1>
                <img className="lazy1" src={each.image} alt="sample" />
                <h2 className='Text2'>{each.Text2}</h2>
              </div>
            ))}
          </Slide>
        </div>

        <div>
          <MdKeyboardArrowRight className='arrowbox' onClick={this.next} style={{width:"2em",height:"2em"}}/>
        </div>
      </div>
    );
  }
}

class Moruk2 extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {current: 0 };
  }

  back() {this.slideRef.current.slickPrev();}

  next() {
    this.slideRef.current.slickNext();
  }

  render() {
    const properties = {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      infinite: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    const slideData = [
      {
        name: "Алексей Вахрушев",
        imagewk:"../src/pictures/Vector.png",
        image: "../src/pictures/varya1.png",
        text: "Etkinlik açıklaması 1.",
      },
      {
        name: "Алексей Вахрушев",
        imagewk:"../src/pictures/Vector.png",
        image: "../src/pictures/cuzdan.png",
        text: "Etkinlik açıklaması 2.",
      },
      {
        name: "Алексей Вахрушев",
        imagewk:"../src/pictures/Vector.png",
        image: "../src/pictures/varya2.png",
        text: "Etkinlik açıklaması 3.",
      },
    ];
    
    return (
      <div className="moruk2">
        <div>
          
          <MdChevronLeft className='arrowbox' onClick={this.back} style={{width:"2em",height:"2em"}} />
          
        </div>
        <div className="slide-container2">
          <Slider className='row' ref={this.slideRef} {...properties}>
            
          {slideData.map((slide, index) => (
              <div className='each-slide2' key={index}>
                <div className='colon'>
                  <div className='row'>
                    <h2>{slide.name}</h2>
                    <img style={{marginLeft:"15px"}} src={slide.imagewk} alt="" />
                  </div>
                  <img className='moruk2img' src={slide.image} alt="Etkinlik resmi" />
                  <p className='cardyazu'>Праздновали день рождение 5 лет у сына, ведущие зажигательные и харизматичные, герои все реалистичные. Было все как в сказке по настоящему. Администратор во всем помогала. На Следующий день рождения вернемся</p>
                  <div className='row'>
                    
                    {[...Array(5)].map((_, starIndex) => (
                      <img key={starIndex} style={{ width: "30px", height: "30px" }} src="../src/pictures/star.png" alt="Yıldız derecelendirmesi" />
                    ))}
                  </div>
                </div>
              </div>
            ))}

              
              
           
          </Slider>
        </div>

        <div>
          <MdKeyboardArrowRight className='arrowbox' onClick={this.next} style={{width:"2em",height:"2em"}}/>
        </div>
      </div>
    );
  }
}



class Moruk3 extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {current: 0 };
  }

  back() {this.slideRef.current.slickPrev();}

  next() {
    this.slideRef.current.slickNext();
  }

  render() {
    const properties = {
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      infinite: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    const slideData = [
      {image1:"../src/pictures/image101.png",
      image2:"../src/pictures/image102.png",
      image3:"../src/pictures/image103.png"},
      {image1:"../src/pictures/image104.png",
      image2:"../src/pictures/image105.png",
      image3:"../src/pictures/image106.png"},
      {image1:"../src/pictures/image107.png",
      image2:"../src/pictures/image108.png",
      image3:"../src/pictures/image109.png"},
      {image1:"../src/pictures/image110.png",
      image2:"../src/pictures/image111.png",
      image3:"../src/pictures/image112.png"},
      {image1:"../src/pictures/image113.png",
      image2:"../src/pictures/image114.png",
      image3:"../src/pictures/image115.png"},
      {image1:"../src/pictures/image116.png"},

    ];



    
    return (
      <div className="moruk3">
        <div>
          
          <MdChevronLeft className='arrowbox' onClick={this.back} style={{width:"2em",height:"2em"}} />
          
        </div>
        <div className="slide-container3">
          <Slider className='row' ref={this.slideRef} {...properties}>
            
          {slideData.map((slide, index) => (
              <div className='each-slide3' key={index}>
                <div className='colon1'>

                
                <img className='pictures' src={slide.image1} alt="Etkinlik resmi" />
                <img className='pictures' src={slide.image2} alt="Etkinlik resmi" />
                <img className='pictures' src={slide.image3} alt="Etkinlik resmi" />
                </div>

                
               
                    
                    
                  
                  
                 
                    
                    
                  
                
              </div>
            ))}

              
              
           
          </Slider>
        </div>

        <div>
          <MdKeyboardArrowRight className='arrowbox' onClick={this.next} style={{width:"2em",height:"2em"}}/>
        </div>
      </div>
    );
  }
}



function Producttt() {
  const [hideshow,sethideshow]=useState(false);
  const [hideshow1,sethideshow1]=useState(false);
  const [hideshow2,sethideshow2]=useState(false); 
  const [hideshow3,sethideshow3]=useState(false); 
  const [hideshow4,sethideshow4]=useState(false);
  const [hideshow5,sethideshow5]=useState(false);  



  return (
    <div className='mid'>
      <div className='maindiv2'>
        
          <div className='beyaz'>
            
            <article >
              <div className='birdivdahavar'>

              
              <h1 className='giris' >Детские праздники<br /> 
              под ключ </h1>
          
              <div className='column' style={{width:"100%"}}>
              <div className='soltaraf'>
                <img className='ev' src="../src/pictures/ev.png" alt="" />
                <p className='soltaraf1'>У вас дома или в кафе</p>
              </div>
              
              
              <div className='soltaraf'>
                <img className='palace' src="../src/pictures/palace.png" alt="" />
                <p className='soltaraf2'>В нашем пространстве</p>
              </div>
              <div className='soltaraf'>
                <img className='park' src="../src/pictures/park.png" alt="" />
                <p className='soltaraf3'>В детском саду или школе</p>
              </div>
              <div className='soltaraf'>
                <img className='atli' src="../src/pictures/atli.png" alt="" />
                <p className='soltaraf4'>На улице, в парке или во дворе </p>
              </div>
              </div>
              
            
              <div className='buttondiv'>
              <button  className='button'><h1 className='buttonyazi'>Заказать праздник</h1></button>
              </div>
              </div>
              
            </article>
          </div>
                  
             <Moruk />
                                
          </div>
      
       
        <div className='maindiv1' style={{marginBottom:"40px"}}>

        <div className='maindiv1'style={{width:"100%"}}>
          <h1 className='baslik'>
          Наши услуги
          </h1>
        </div>

          <div className="groupdivweb">
          <div className='groupdiv'>
          <div >
          <img className='foto1' src="../src/pictures/pale.png" alt="" />
          </div>
          <h2 className='icbaslik1'>
            Тематические <br />
            вечеринки

            <a ></a>
                <a   ></a>


          </h2>
          <h3 className='text1'>
           Хотите вечеринку в стиле Гарри Поттера? 
           А может ваш ребенок мечтает стать супергероем или побывать на бале принцесс? Наше агенство ораганизует тематическую вечеринку под ключ
          </h3>
          <button className='button1'>
            <p className='buttonyazi1'>
            ПОДРОБНЕЕ
            </p>
          </button>
          </div>


          <div className='groupdiv'>
          <div >
          <img className='foto1' src="../src/pictures/pale1.png" alt="" />
          </div>
          <h2 className='icbaslik1'>
          Любимый герой проведет<br /> незабываемый праздник 
          </h2>
          <h3 className='text1'>
            Наши профессиональные аниматоры в костюмах любимых героев ваших детей подарит праздник, который запомнится навсегда! Выбирайте любимых героев для вашего праздника
          </h3>
          <button className='button1'>
            <p className='buttonyazi1'>
            ПОДРОБНЕЕ
            </p>
          </button>
          </div>




          <div className='groupdiv'>
          <div >
          <img className='foto1' src="../src/pictures/pale2.png" alt="" />
          </div>
          <h2 className='icbaslik1'>
          Разнообразные <br />
          шоу-программы 
          </h2>
          <h3 className='text1'>
          Приключение со спецэффектами, эксклюзивным реквизитом и необычными заданиями. Наши шоу-программы сделают ваш праздник незабываемым
          </h3>
          <button className='button1'>
            <p className='buttonyazi1'>
            ПОДРОБНЕЕ
            </p>
          </button>
          </div>


          <div className='groupdiv'>
          <div >
          <img className='foto1' src="../src/pictures/pale3.png" alt="" />
          </div>
          <h2 className='icbaslik1'>
            Живая <br />
            открытка 
          </h2>
          <h3 className='text1'>
          Ищите оригинальный подарок для своих родных и близких? Наши герои поздравят с днем рождения,  встретят маму из Роддома, зажигательные танцы и много другое
          </h3>
          <button className='button1'>
            <p className='buttonyazi1'>
            ПОДРОБНЕЕ
            </p>
          </button>
          </div>



          <div className='groupdiv'>
          <div >
          <img className='foto1' src="../src/pictures/pale4.png" alt="" />
          </div>
          <h2 className='icbaslik1'>
          Развивающие <br />
          мастер-классы
          </h2>
          <h3 className='text1'>
            Развивающие мастер-классы понравятся спокойным и шустрым малышам. Это прекрасная возможность хорошо отпраздновать день рождения или с пользой провести утренник в школе
          </h3>
          <button className='button1'>
            <p className='buttonyazi1'>
            ПОДРОБНЕЕ
            </p>
          </button>
          </div>



          <div className='groupdiv'>
          <div >
          <img className='foto1' src="../src/pictures/pale5.png" alt="" />
          </div>
          <h2 className='icbaslik1'>
          Приятные дополнения к<br /> празднику
          </h2>
          <h3 className='text1'>
           Хотите вечеринку в стиле Гарри Поттера? 
           А может ваш ребенок мечтает стать супергероем или побывать на бале принцесс? Наше агенство ораганизует тематическую вечеринку под ключ
          </h3>
          <button className='button1'>
            <p className='buttonyazi1'>
            ПОДРОБНЕЕ
            </p>
          </button>
          </div>




          <div className='groupdiv'>
          <div >
          <img className='foto1' src="../src/pictures/pale6.png" alt="" />
          </div>
          <h2 className='icbaslik1'>
          Праздничный <br />
          декор 
          </h2>
          <h3 className='text1'>
          Мы относимся к каждой детали вашего события очень трепетно.  Если у Вас во время подготовки, возникает масса вопросов и тысяча хлопот, то наша дружная команда с радостью Вам поможет
          </h3>
          <button className='button1'>
            <p className='buttonyazi1'>
            ПОДРОБНЕЕ
            </p>
          </button>
          </div>



          <div className='groupdiv'>
          <div >
          <img className='foto1' src="../src/pictures/pale7.png" alt="" />
          </div>
          <h2 className='icbaslik1'>
          Дневной детский <br />
          лагерь 
          </h2>
          <h3 className='text1'>
            Чем занять ребенка на каникулах? Наш центр предлагает познавательно-развлекательный детский лагерь дневного пребывания  
          </h3>
          <button className='button1'>
            <p className='buttonyazi1'>
            ПОДРОБНЕЕ
            </p>
          </button>
          </div>


          <div className='groupdiv'>
          <div >
          <img className='foto1' src="../src/pictures/pale8.png" alt="" />
          </div>
          <h2 className='icbaslik1'>
          Аренда <br />
          зала
          </h2>
          <h3 className='text1'>
          Наше просторное помещение позволит пригласить на ваш праздник большее количество гостей. В нашем центре вы сможете комфортно провести время на празднике детям и их родителям. 
          </h3>
          <button className='button1'>
            <p className='buttonyazi1'>
            ПОДРОБНЕЕ
            </p>
          </button>
          </div>
          </div>

          <div className="groupdivtel">
          <div className='groupdiv'>
          <div >
          <img className='foto1' src="../src/pictures/pale.png" alt="" />
          </div>
          <h2 className='icbaslik1'>
            Тематические <br />
            вечеринки
          </h2>
          <h3 className='text1'>
           Хотите вечеринку в стиле Гарри Поттера? 
           А может ваш ребенок мечтает стать супергероем или побывать на бале принцесс? Наше агенство ораганизует тематическую вечеринку под ключ
          </h3>
          <button className='button1'>
            <p className='buttonyazi1'>
            ПОДРОБНЕЕ
            </p>
          </button>
          </div>


          <div className='groupdiv'>
          <div >
          <img className='foto1' src="../src/pictures/pale1.png" alt="" />
          </div>
          <h2 className='icbaslik1'>
          Любимый герой проведет<br /> незабываемый праздник 
          </h2>
          <h3 className='text1'>
            Наши профессиональные аниматоры в костюмах любимых героев ваших детей подарит праздник, который запомнится навсегда! Выбирайте любимых героев для вашего праздника
          </h3>
          <button className='button1'>
            <p className='buttonyazi1'>
            ПОДРОБНЕЕ
            </p>
          </button>
          </div>




          <div className='groupdiv'>
          <div >
          <img className='foto1' src="../src/pictures/pale2.png" alt="" />
          </div>
          <h2 className='icbaslik1'>
          Разнообразные <br />
          шоу-программы 
          </h2>
          <h3 className='text1'>
          Приключение со спецэффектами, эксклюзивным реквизитом и необычными заданиями. Наши шоу-программы сделают ваш праздник незабываемым
          </h3>
          <button className='button1'>
            <p className='buttonyazi1'>
            ПОДРОБНЕЕ
            </p>
          </button>
          
          </div>  

          <div className='containerRelative' >
            
            <button  className='btntel'><p className='angleyazi'>ПОКАЗАТЬ ЕЩЕ</p></button>
          </div> 
          </div>
          

          


        </div>


        <div className='maindiv3'>
          <h1 className='baslik'>Как заказать праздник?</h1>
          <div className='telpaint' >
            
            
              
              <div className='tel1'>
                <div className='box'><h1>1</h1></div>
                <div>
                     <img className='telefon1'  src="../src/pictures/telefon1.png" alt="" />
                </div>  
                <div className='yazilartop'>
                    <h1 className='telyazi1'>Позвонить или написать нам</h1>
                    <h2 className='telyazi2'>Позвоните нам по телефону, напишите в мессенджерах или оставьте заявку на сайте. Расскажите какой праздник хотите, какой возраст  детей, их любимые герои, сколько вас человек </h2>
                </div>
              </div>
              

              
              <div className='paint1'>
              <div className='box'><h1>2</h1></div>
                <div>
                     <img className='telefon1'  src="../src/pictures/paint.png" alt="" />
                </div>  
                <div div className='yazilartop' >
                    <h1 className='telyazi1'>Выбрать программу праздника</h1>
                    <h2 className='telyazi2'>Администратор по телефону сориентирует вас о программах, дополнениях и поможет выбрать наилучшую для ваших детей тематику и программу праздника.</h2>
                </div>
              </div>
          </div>


          
          <div className='telpaint1'>

              <div className='takvim1'>
              <div className='box'><h1>3</h1></div>
                <div style={{marginLeft:"20px"}}>
                <h1 className='telyazi1'>Выбрать дату <br />праздника</h1>
                </div>  
                <div className='takvimrow'>
                    
                    <img className='telefon1'  src="../src/pictures/takvim.png" alt="" />
                    <h2 className='telyazi2'>Выбрать дату и время и место праздника </h2>
                </div>
              </div>


              <div className='takvimorta' >
              <div className='box'><h1>4</h1></div>
                <div className='box3'>
                <h1 className='takvimyazi1'>Внести предоплату</h1>
                </div>  
                <div className='wrap' style={{marginTop:"70px"}}>
                <div className='takvimrow'>
                    
                    <img className='telefon1'  src="../src/pictures/cuzdan.png" alt="" />
                    <h2  className='telyazi2'>Внесите предоплату в размере 1000 рублей любым удобным способом:  обычным переводом с помощью СБП либо наличными </h2>
                </div>
                </div>
              </div>


              <div className='takvim1'>
              <div className='box'><h1>5</h1></div>
                <div className='gotovo' >
                <h1 className='telyazi1'>Готово! </h1>
                </div>  
                <div className='takvimrow'>
                    
                    <img className='telefon1'  src="../src/pictures/ok.png" alt="" />
                    <h2 className='telyazi2'>Отлично, вам остается лишь  наслаждаться праздником  </h2>
                </div>
              </div>
          </div>

          <Moruk1/> 

          
          <div className='column' style={{margin:"40px",width:"100%"} }>
          <button className='button'><h1 className='buttonyazi'>Заказать праздник</h1></button>
          </div>

          
        </div>


        
                 
        

        


        <div className='maindiv1' style={{marginTop:"20px"}}>
          
          <div className='palyacoweb'>
          <div className='baslik' >
            Клиенты выбирают нас, потому что...
          </div>
          <div className='maindiv1'>
            <div >
              <img className='resim1_1' style={{margin:"0px 20px 0px 20px"}} src="../src/pictures/ruby.png" alt="" />
            </div>
            <div style={{height:"300px",margin:"0px 20px 0px 20px"}}>
              <div>
                <p className='kard1'>Мы   организуем самые    классные    детские праздник под ключ в любой точке Пермского края</p>
              </div>
              <div>
                <p className='kard2'>Наши аниматоры могут приехать в любое удобное для вас место и провести самую незабываемую детскую вечеринку: квартира, дача, кафе, детский сад, школа, улица, парк. <br /><br />

                В восторге будут не только дети, но и взрослые, а также бабушки и дедушки. </p>
              </div>
            </div>
          </div>

          <div className='maindiv1' style={{marginTop:"20px"}}>
            
            <div style={{margin:"0px 20px 0px 20px",height:"300px"}}>
              <div>
                <p style={{height:"73px"}} className='kard1'>Комфортное помещение для проведения праздника в городе Березники</p>
              </div>
              <div>
                <p className='kard2'>Родители на праздниках своих детей отдыхают и получают максимальное удовольствие от праздника, потому что в нашем комфортном центре есть всё необходимое.  А наши заботливые сотрудники сделают все, чтобы каждый гость был доволен. <br /><br />

                У нас найдется место даже для самой большой компании. И конечно, не надо мыть посуду после гостей :-)  </p>
              </div>
            </div>

            <div style={{height:"300px",margin:"0px 20px 0px 20px"}}>
              <img className='resim2_1'  src="../src/pictures/ruby2.png" alt="" />
            </div>
          </div>


          <div className='maindiv1' style={{marginTop:"20px"}}>
            <div>
              <img className='resim3_1' style={{margin:"0px 20px 0px 20px"}} src="../src/pictures/ruby3.png" alt="" />
            </div>
            <div style={{height:"300px",margin:"0px 20px 0px 20px"}}>
              <div >
                <p className='kard1' style={{height:"33px",marginBottom:"0px"}}>Безопасные для детей шоу-программы</p>
              </div>
              <div>
                <div className='kard2'>Наше 3/9 Царство представляет разнообразные шоу-программы. Например:
                  <ul>
                  <li>
                крио-кухня научит детей, как можно создать мороженное своими руками:  с помощью жидкого азота, волшебного дыма и молока дети приготовят самое вкусное мороженое;</li>
                <li>
                Молекулярная кухня позволит детям попробовать спагетти со вкусом апельсина или икру со вкусом мяты. Детки смогут похимичить вместе с нашими кулинарными экспертами. </li>
                </ul> 
                Эти и многие другие программы абсолютно безопасны для детей и их родителей.
                  </div>
              </div>
            </div>
          </div>


          <div className='maindiv1' style={{marginTop:"20px"}}>
            
            <div style={{margin:"0px 20px 0px 20px"}}>
              
                <p className='kard1' style={{height:"33px",}}>Мы развиваем развлекая</p>
              
              
                <p className='kard2'>Мы создаем не только развлекающий, но и познавательный контент. В Игровой форме доносим до детей важные ценности: дружба, здоровье, семья, уважение и пр. 
                Мы проводит различные познавательные шоу-программы, где ваши дети узнают много нового и интересного.<br /><br />

                Также организовываем сказочную терапию для самым маленьких наших гостей. В сказке и игровой форме избавляемся от детских страхов.
                </p>
              
            </div>

            <div style={{margin:"0px 20px 0px 20px"}}>
              <img className='resim4_1' src="../src/pictures/ruby4.png" alt="" />
            </div>
          </div>
          </div>


          <div className='palyacotel'>
          <div className='baslik' >
            Клиенты выбирают нас, потому что...
          </div>
          <div className='maindiv1'>
            <div >
              <img className='resim1_11' style={{margin:"0px 20px 0px 20px"}} src="../src/pictures/ruby11.png" alt="" />
            </div>
            <div style={{height:"auto",margin:"20px "}}>
              <div>
                <p className='kard1'>Мы   организуем самые    классные    детские праздник под ключ в любой точке Пермского края</p>
              </div>
              <div>
                <p className='kard2'>Наши аниматоры могут приехать в любое удобное для вас место и провести самую незабываемую детскую вечеринку: квартира, дача, кафе, детский сад, школа, улица, парк. <br /><br />

                В восторге будут не только дети, но и взрослые, а также бабушки и дедушки. </p>
              </div>
            </div>
          </div>

          <div className='maindiv1'>

          <div style={{margin:"0px 20px 0px 20px"}}>
              <img className='resim2_22'  src="../src/pictures/ruby22.png" alt="" />
            </div>
            
            <div style={{margin:" 20px",height:"auto"}}>
              <div>
                <p style={{height:"73px"}} className='kard1'>Комфортное помещение для проведения праздника в городе Березники</p>
              </div>
              <div>
                <p className='kard2'>Родители на праздниках своих детей отдыхают и получают максимальное удовольствие от праздника, потому что в нашем комфортном центре есть всё необходимое.  А наши заботливые сотрудники сделают все, чтобы каждый гость был доволен. <br /><br />

                У нас найдется место даже для самой большой компании. И конечно, не надо мыть посуду после гостей :-)  </p>
              </div>
            </div>

            
          </div>


          <div className='maindiv1'>
            <div>
              <img className='resim3_33' style={{margin:"0px 20px 0px 20px"}} src="../src/pictures/ruby33.png" alt="" />
            </div>
            <div style={{height:"auto",margin:" 20px"}}>
              <div >
                <p className='kard1' style={{height:"66px",marginBottom:"0px"}}>Безопасные для детей шоу-программы</p>
              </div>
              <div>
                <div className='kard2'>Наше 3/9 Царство представляет разнообразные шоу-программы. Например:
                  <ul>
                  <li>
                крио-кухня научит детей, как можно создать мороженное своими руками:  с помощью жидкого азота, волшебного дыма и молока дети приготовят самое вкусное мороженое;</li>
                <li>
                Молекулярная кухня позволит детям попробовать спагетти со вкусом апельсина или икру со вкусом мяты. Детки смогут похимичить вместе с нашими кулинарными экспертами. </li>
                </ul> 
                Эти и многие другие программы абсолютно безопасны для детей и их родителей.
                  </div>
              </div>
            </div>
          </div>


          <div className='maindiv1'  style={{marginTop:"60px"}}>
                       

            <div style={{margin:"60px 20px 0px 20px"}}>
              <img className='resim4_44' src="../src/pictures/ruby44.png" alt="" />
            </div>

            <div style={{margin:"20px"}}>
                <p className='kard1' style={{height:"33px",}}>Мы развиваем развлекая</p>
              
              
                <p className='kard2'>Мы создаем не только развлекающий, но и познавательный контент. В Игровой форме доносим до детей важные ценности: дружба, здоровье, семья, уважение и пр. 
                Мы проводит различные познавательные шоу-программы, где ваши дети узнают много нового и интересного.<br /><br />

                Также организовываем сказочную терапию для самым маленьких наших гостей. В сказке и игровой форме избавляемся от детских страхов.
                </p>
              
            </div>

            
          </div>
          </div>
        </div>

        <div className="maindiv3">
          
            <h1 className='baslik' >Скидки и акции</h1>
          

          <div className='maindivmoney'>
            <div className='moneydiv'>
              <p className='moneyyazi'>Скидка 10% на второй праздник в течение года!</p>
              <img className='money' src="../src/pictures/money.png" alt="" />

            </div>
            <div className='moneydiv'>
              <p className='moneyyazi'>При заказе на сумму от 15 тыс.  рублей подарок каждому ребенку</p>
              <img className='money' src="../src/pictures/gift.png" alt="" />

            </div>
            <div className='moneydiv'>
              <p className='moneyyazi'>При заказе на сумму от 20 тыс.  рублей пиньята в подарок</p>
              <img className='money' src="../src/pictures/star.png" alt="" />

            </div>

          </div>


          <div className='maindivmoney1'>
            <div className='moneydiv1'>
              <img className='money' src="../src/pictures/money.png" alt="" />
              <p className='moneyyazi'>Скидка 10% на второй праздник в течение года!</p>
              

            </div>
            <div className='moneydiv1'>
              <p className='moneyyazi'>При заказе на сумму от 15 тыс.  рублей подарок каждому ребенку</p>
              <img className='money' src="../src/pictures/gift.png" alt="" />

            </div>
            <div className='moneydiv1'>
            <img className='money' src="../src/pictures/star.png" alt="" />
              <p className='moneyyazi'>При заказе на сумму от 20 тыс.  рублей пиньята в подарок</p>
              

            </div>

          </div>

          <div className='column' style={{marginBottom:"40px",width:"100%"}}>
            <button className='button'>
              <p className='buttonyazi'>
              Заказать праздник
              </p>
            </button>
          </div>

        </div>

        <div className='maindiv1' >

          <div className="baslik" style={{width:"100%"}}>
          Фото наших праздников
          </div>
          

          <Moruk3/>
         
         



          


          <div className='column' style={{margin:"40px 0 40px 0",width:"100%"}}>
            <button className='button'>
              <p className='buttonyazi'>
              Заказать праздник
              </p>
            </button>
            </div>
          

          
        </div>

        <div className="maindiv3_slider">
          <div className="baslik">

          Отзывы наших клиентов

          </div>
            
            <Moruk2/>
            
                      
         </div>


            
            
          
        

        <div className='maindiv1' style={{width:"100%"}}>
          <div className="baslik"  >
          Часто задаваемые вопросы
          </div>
          
          <div style={{borderTop:"1px solid #BFBFBF"}} className='widith'>
          
           <div id='bordershadow' >
           <div className='betweenspace' >
            <h1  className='kayanyazih1'>ВОПРОС ИНТЕРЕСНЫЙ НОМЕР 1?</h1>
            {hideshow?
            < RxCross1 onClick={()=>sethideshow(!hideshow)} style={{fontSize:"30px",fontWeight:"normal",cursor:"pointer"}} />:
                < TfiPlus onClick={()=>sethideshow(!hideshow)} style={{fontSize:"30px",fontWeight:"normal",cursor:"pointer"}} />
                
            }
            
            </div>
            <div  className='jsdiv'>

              {hideshow &&
                <p className='mydiv' id='mydiv' style={{width:"961px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              }
            </div>
                
          
            </div>

          
        </div>

        <div className='widith'>
          
           <div id='bordershadow' >
           <div className='betweenspace'>
            <h1 className='kayanyazih1'>ВОПРОС ИНТЕРЕСНЫЙ НОМЕР 2?</h1>
            {hideshow?
            < RxCross1 onClick={()=>sethideshow1(!hideshow1)} style={{fontSize:"30px",fontWeight:"normal",cursor:"pointer"}} />:
                < TfiPlus onClick={()=>sethideshow1(!hideshow1)} style={{fontSize:"30px",fontWeight:"normal",cursor:"pointer"}} />
                
            }
            </div>
            <div className='jsdiv'>

              {hideshow1 &&
                <p className='mydiv' id='mydiv' style={{width:"961px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              }
            </div>
                
          
            </div>

          
        </div>
        


        <div className='widith'>
          
           <div id='bordershadow' style={{marginTop:"0px"}}>
           <div className='betweenspace'>
            <h1 className='kayanyazih1'>ВОПРОС ИНТЕРЕСНЫЙ НОМЕР 3?</h1>
            {hideshow?
            < RxCross1 onClick={()=>sethideshow2(!hideshow2)} style={{fontSize:"30px",fontWeight:"normal",cursor:"pointer"}} />:
                < TfiPlus onClick={()=>sethideshow2(!hideshow2)} style={{fontSize:"30px",fontWeight:"normal",cursor:"pointer"}} />
                
            }
            </div>
            <div className='jsdiv'>

              {hideshow2 &&
                <p className='mydiv' id='mydiv' style={{width:"961px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              }
            </div>
            </div>

          
        </div>

        <div className='widith'>
           <div id='bordershadow' style={{marginTop:"0px"}}>
            <div className='betweenspace'>
              <h1 className='kayanyazih1'>ВОПРОС ИНТЕРЕСНЫЙ НОМЕР 4?</h1>
              {hideshow?
            < RxCross1 onClick={()=>sethideshow3(!hideshow3)} style={{fontSize:"30px",fontWeight:"normal",cursor:"pointer"}} />:
                < TfiPlus onClick={()=>sethideshow3(!hideshow3)} style={{fontSize:"30px",fontWeight:"normal",cursor:"pointer"}} />
                
            }
            </div>
            <div className='jsdiv'>

              {hideshow3 &&
                <p className='mydiv' id='mydiv' style={{width:"961px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              }
            </div>
            </div>
        </div>

        <div className='widith'>
           <div id='bordershadow' >
            <div className='betweenspace'>
              <h1 className='kayanyazih1'>ВОПРОС ИНТЕРЕСНЫЙ НОМЕР 5?</h1>
              < TfiPlus onClick={()=>sethideshow4(!hideshow4)} style={{fontSize:"30px",fontWeight:"normal",cursor:"pointer"}} />
            
            </div>
            <div className='jsdiv'>

              {hideshow4 &&
                <p className='mydiv' id='mydiv' style={{width:"961px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              }
            </div>
            </div>
        </div>

        <div className='widith'>
           <div id='bordershadow' >
            <div className='betweenspace'>
              <h1 className='kayanyazih1'>ВОПРОС ИНТЕРЕСНЫЙ НОМЕР 6?</h1>
              < TfiPlus onClick={()=>sethideshow5(!hideshow5)} style={{fontSize:"30px",fontWeight:"normal",cursor:"pointer"}} />
            
            </div>
            <div className='jsdiv'>

              {hideshow5 &&
                <p className='mydiv' id='mydiv' style={{width:"961px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              }
            </div>
            </div>
        </div>

        
        
        </div>

        <div className='maindiv3'>
          
                <h1 className='baslik'>
                
                  Как добраться до центра 3/9 Царства?
                
                </h1>
        

              <div className='maindiv1' >
                <div className='betweenspace1' style={{width:"70%"}}>
                  <div className='adresyazidiv'>
                    улица Набережная, 41/1, г. Березники <br />
                    Вход рядом с кафе Roll's
                  </div>
                  <a href='https://yandex.com/maps/20237/berezniki/house/naberezhnaya_ulitsa_41b/YU8YfgNnSEwAQFtjfX94cnxkZQ==/?ll=56.847147%2C59.392996&z=19.51' className='maviyazi'>
                    Посмотреть на карте
                  </a>
                  </div>
                <div className='mapsdiv'>
                  {Ymap()}
               
                </div>
              
            </div>
          
        </div>


        

        

        


    </div>

    

    

    
  )
}

export default Producttt