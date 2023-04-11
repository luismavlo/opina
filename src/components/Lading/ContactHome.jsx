import React, { useState } from "react";
import imgPerson from "../../assets/home-assets/hombre-contact.png";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import getConfig from "../../helpers/getconfig";
import useNotification from "../../hooks/useNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const ContactHome = () => {
  const initialForm = {
    name: "",
    email: "",
    message: "",
  };
  const [isSending, setIsSending] = useState(false);
  const notyf = new Notyf({
    duration: 3000,
    position: {
      x: "right",
      y: "bottom",
    },
  });

  const [formValues, handleInputChange, reset] = useForm(initialForm);

  const { name, email, message } = formValues;

  const submitEmail = async (e) => {
    e.preventDefault();
    //
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    try {
      setIsSending(true);
      const { data } = await axios.post(
        "https://www.opina-peru.com/backend/SendMailController/sendMail",
        formData,
        getConfig()
      );
      if (data === "ok") {
        notyf.success("¡El email ha sido enviado con exito!");
      } else {
        notyf.error("Ha ocurrido un error, ¡Por favor intentelo mas tarde");
      }
      setIsSending(false);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section-contact">
      <img className="contact-person-img" src={imgPerson} alt="img man" />
      <article className="container-form-info-contact">
        <h2 className="contact-title">
          ¿ Quiéres desarrollar
          <span className="contact-span-title">un proyecto ? </span>
        </h2>
        <p className="description-contact">
          Cuéntanos sobre ello y nos estaremos comunicando contigo.
          <span className="description-span-contact">
            {" "}
            También puedes escribirnos a nuestras redes sociales o al Whatsapp
          </span>
        </p>
        <form className="form-contact" onSubmit={submitEmail}>
          <input
            type="text"
            placeholder="name"
            className="input-name-contact input-contact"
            value={name}
            name="name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Email"
            className="input-email-contact input-contact"
            value={email}
            name="email"
            onChange={handleInputChange}
          />
          <textarea
            type="text"
            placeholder="Message"
            className="input-message-contact input-contact"
            value={message}
            name="message"
            onChange={handleInputChange}
          />
          <button
            className="btn-form-contact"
            onClick={submitEmail}
            disabled={isSending}
          >
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            {isSending ? (
              <>
                <span className="sending-text">Enviando...</span>
                <div className="spinner" />
              </>
            ) : (
              <>
                <span className="send-text">Enviar mensaje</span>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="icon send-icon"
                />
              </>
            )}
          </button>
        </form>
      </article>
    </section>
  );
};

export default ContactHome;
