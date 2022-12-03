import React from 'react'
import imgPerson from '../../assets/home-assets/hombre-contact.png'

const ContactHome = () => {
  return (
    <section className='section-contact'>
      <img className='contact-person-img' src={imgPerson} alt="img man" />
      <article className='container-form-info-contact'>
        <h2 className='contact-title'>
          ¿ Quiéres desarrollar 
          <span className='contact-span-title'>un proyecto ?</span>
        </h2>
        <p className='description-contact'>
          Cuéntanos sobre ello y nos estaremos comunicando contigo.
          <span className='description-span-contact'> También puedes escribirnos a nuestras redes sociales o al Whatsapp</span>
        </p>
        <form className='form-contact'>
          <input 
            type="text"
            placeholder='name'
            className='input-name-contact input-contact'
          />
          <input 
            type="text"
            placeholder='Email'
            className='input-email-contact input-contact'
          />
          <textarea
            type='text'
            placeholder='Message'
            className='input-message-contact input-contact'
          />
          <button className='btn-form-contact'>Send Message</button>
        </form>
      </article>
    </section>
  )
}

export default ContactHome