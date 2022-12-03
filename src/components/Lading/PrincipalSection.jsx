import React from 'react'
import mujerImg from '../../assets/home-assets/mujer-principal-section.png'
import logoRed from '../../assets/home-assets/icon-red.png'

const PrincipalSection = () => {
  return (
    <div className='principal-section'>
      <article className='article-principal-section'>
        <h2 className='title-principal-section'>La investigación de mercados</h2>
        <h3 className='subtitle-principal-section'>El amigo de las marcas</h3>
        <p className='description-principal-section'>
        Porque transformamos las opiniones en estrategias que maximizan las oportunidades de crecimiento, alcanzando tus indicadores de venta, consolidando tu organización y estableciendo estrategias focalizadas en el plan marketing; de esta manera se logra cumplir estándares de calidad, rapidez y confianza.
        </p>
        <button className='btn-principal-section'>Saber más</button>
      </article>
      <div className='container-logo-principal-section'>
        <img className='logo-principal-section' src={logoRed} alt="Logo red Background" />
      </div>
      <div className='container-img-principal-section'>
        <img className='img-principal-section' src={mujerImg} alt="mujer voceando" />
      </div>
      <ul className='container-statistics-principal-section'>
        <li className='statistics-item'>
          <div className='statistics-width'>
            <h3 className='statistics-number'>500</h3>
              <p className='statistics-description'>
                Encuestas
                <span className='statistics-marker'>Realizadas</span>
              </p>
          </div>
        </li>
        <li className='statistics-item'>
          <div className='statistics-width'>
            <h3 className='statistics-number'>15</h3>
              <p className='statistics-description'>
                Marcas
                <span className='statistics-marker'>Trabajadas</span>
              </p>
          </div>
        </li>
        <li className='statistics-item'>
          <div className='statistics-width'>
            <h3 className='statistics-number'>35K</h3>
              <p className='statistics-description'>
                Personas
                <span className='statistics-marker'>Encuestadas</span>
              </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default PrincipalSection