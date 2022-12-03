import React from 'react'
import heroImage from '../../../assets/home-assets/logo-red.png'
import './styles/infoOpina.css'

const InfoOpina = () => {
  return (
    <section className='info-opina'>
      <div className='info-opina__container1'>
        <h2 className='info-opina__title'>Opina New Business</h2>
        <p className='info-opina__text'>
          A través de nuestros diversos especialistas, herramientas tecnológicas en información y las metodologías estratégicas, logramos identificar tendencias e insights, para brindarte alternativas que se puedan adaptar al cambio del mercado constante, conduciéndote así al crecimiento y posicionamiento en el mercado a través de la opinión de la población.
        </p>
      </div>
      <div className='info-opina__container2'>
        <img className='info-opina__logo' src={heroImage} alt="" />
      </div>
    </section>
  )
}

export default InfoOpina