import React, { useRef, useState } from 'react'
import CardServicios from './components-servicios/CardServicios'

const ServiciosSection = () => {

  const arrayCard = [
    {
      title: 'Servicios de',
      span: 'Investigación',
      description: 'Se identifica y analiza a la competencia, así como al buyer persona logrando detectar los Insights a través de diversas herramientas.'
    },
    {
      title: 'Analítica y',
      span: 'Medición',
      description: 'Se aplica múltiples métodos para extraer la información, así como diversas tecnologías y procesos para combinar y analizar la data.'
    },
    {
      title: 'Publicidad, medios y',
      span: 'relaciones públicas',
      description: 'Brindar opciones de medios inteligentes que posicionan la marca y efectivizan el contenido.'
    },
  ]

  const [isActiveCarousel, setIsActiveCarousel] = useState(0)
  
  let classNameCarousel = ''

  for(let i = 0; i < arrayCard.length; i++){
    if(i === isActiveCarousel) {
      classNameCarousel = `container-carousel container-carousel__${i}`
      break
    }
  }



  return (
    <section className='servicios-section'>
      <h2 className='home-titles'>Servicios</h2>
      <h3 className='home-subtitle-servicios'>Para optimizar tu marca</h3>
      <div className='container-card-servicios'>
        <div className={classNameCarousel}>
          {
            arrayCard.map((card, index) => (
              <CardServicios 
                key={card.title}
                card={card}
              />
            ))
          }
        </div>
        <div className='container-btn-carousel-servicios'>
          {
            arrayCard.map((e, index)=>(
              isActiveCarousel === index ?
                <div 
                  key={index} 
                  className='circle-carousel-servicios circle-carousel-servicio__active'
                ></div>
              :
                <div 
                  key={index} 
                  className='circle-carousel-servicios'
                  onClick={() => setIsActiveCarousel(index)}
                ></div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ServiciosSection