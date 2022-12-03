import React from 'react'
import whatsappIcon from '../../assets/home-assets/whatsapp-icon.svg'
import linkedInIcon from '../../assets/home-assets/linked-in-icon.svg'
import facebookIcon from '../../assets/home-assets/facebook-icon.svg'
import iconOpina from '../../assets/home-assets/icon-red.png'

const FooterLanding = () => {
  return (
    <footer className='footer'>
      <div className='footer-page'>
        <img className='icon-opina-footer' src={iconOpina} alt="icon opina" />
        <ul className='container-footer-1'>
          <li className='list-item-footer-1'>
            <div className='line-footer-1'></div>
          </li>
          <li className='list-item-footer-1'>
            <p className='term-condition'>Términos y condiciones</p>
          </li>
          <li className='list-item-footer-1'>
            <p className='term-condition'>Políticas de privacidad</p>
          </li>
        </ul>
        <ul className='container-footer-2'>
          <li className='list-item-footer-2'>
            <div className='line-footer-2'></div>
          </li>
          <li className='list-item-footer-2'>
            <p className='footer-inscribirse'>
              Incríbete en 
              <span className='footer-span-inscribirse'>nuestras encuestas</span> 
            </p>
          </li>
        </ul>
        <article className='container-footer-3'>
          <h3 className='footer-title-3'>Siguenos en:</h3>
          <ul className='container-icons-footer'>
            <li className="list-item-3">
              <img className='whatsapp-icon icon-footer' src={whatsappIcon} alt="" />
            </li>
            <li className="list-item-3">
              <img className='linked-in-icon icon-footer' src={linkedInIcon} alt="" />
            </li>
            <li className="list-item-3">
              <img className='facebook-icon icon-footer' src={facebookIcon} alt="" />
            </li>
          </ul>
        </article>
        <p className='footer-copyright'>
          Opina New Business Coporation EIRL. 
          <span className="footer-span-copyright">
            Derechos Reservados 2022
          </span>
        </p>
      </div>
    </footer>
  )
}

export default FooterLanding