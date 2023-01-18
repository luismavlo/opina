import React from 'react'

const CardServicios = ({card}) => {

  return (
    <article className='card-servicios'>
      <h3 className='card-servicios__title'>
        {card.title}
        <span className='card-servicios__span'>{card.span}</span>
      </h3>
      <p className='card-servicios__description'>
        {card.description}
      </p>
      <a target='_blank' href={card.link} className='card-servicios__btn'>Saber más</a>
    </article>
  )
}

export default CardServicios