import React from 'react'
import mujerMision from '../../../assets/about-us/mujer-mision.png'
import bocina from '../../../assets/about-us/bocina-mision.png'
import hombreObjetivo from '../../../assets/about-us/hombre-objetivos.png'
import './styles/misionVision.css'

const MisionVisionObjetivo = () => {
  return (
    <section className='mision-vision'>
      <article className='mision-vision-container'>
        <h2 className='mision-vision__title'>Misión</h2>
        <p className='mision-vision__text'>
        Brindamos seguridad y confianza a nuestros socios en la toma de decisiones logrando resultados en menor tiempo e incrementando sus beneficios y disminuyendo riesgos, mediante la recolección, sistematización y análisis de la información a través de métodos interdisciplinarios, siendo confiable y validado por especialistas.
        </p>
      </article>
      <article className='mision-vision-container mision-vision-container--vision'>
        <h2 className='mision-vision__title'>Visión</h2>
        <p className='mision-vision__text'>
        Ser reconocido por la veracidad en la información y la confidencialidad al cliente.
        </p>
      </article>
      <article className='mision-vision-container'>
        <h2 className='mision-vision__title'>Objetivo</h2>
        <p className='mision-vision__text'>
        Convertir las opiniones en información para captar y fidelizar a consumidores y/o interesados, logrando la penetración de la marca en el mercado para obtener el éxito costo, beneficio y/o utilidad.
        </p>
      </article>
      <img className='mision-img' src={mujerMision} alt="mujer apuntando a la misión de la empresa" />
      <img className='vision-img' src={bocina} alt="Bocina" />
      <img className='objetivo-img' src={hombreObjetivo} alt="hombre mostrando objetivo" />
    </section>
  )
}

export default MisionVisionObjetivo