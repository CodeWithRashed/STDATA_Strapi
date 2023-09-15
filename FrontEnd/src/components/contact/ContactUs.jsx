import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
/* Email Js */

import emailjs from "@emailjs/browser";

const Contact = () => {
  /* Email JS Email Sending*/
  const [successMessage, setSuccessMessage] = useState("Send Message");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setSuccessMessage("Sending...");
    emailjs
      .sendForm(
        "service_pvtu2sh",
        "template_9q4b2w7",
        form.current,
        "DRNhqloMxqyMyFhwi"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setSuccessMessage("Sent 😊");
          } else {
            setSuccessMessage("Error");
          }
          e.target.reset();
          setTimeout(() => {
            setSuccessMessage("Send Message");
          }, 3000);
        },
        (error) => {
          setSuccessMessage(error.text);
        }
      );
  };
  return (
    <div className='contact-container bg-[#1a1f25] px-[10%] text-white'>
      <h1 className='title text-center text-4xl p-10'>
        <span className='text-[#ea4335]'>Contact</span> Us
      </h1>
      <div className='contact-content grid lg:grid-cols-2 gap-8'>
        <div className='left flex flex-col justify-center items-center lg:justify-start lg:items-start'>
          <h1 className='text-3xl mb-4'>Get In Touch</h1>
          <div className="contact-details hidden lg:flex flex-col space-y-2 my-5">
          <div className='small-info flex gap-2'>
          <div className='icon bg-[#5f5d5d2c] w-8 h-8 rounded flex justify-center items-center'>
          <FontAwesomeIcon icon={faLocationDot} />
            </div>
           
            <h2>Rangpur, Dhaka, Bangladesh</h2>
          </div>
          <div className='small-info flex gap-2'>
          <div className='icon bg-[#5f5d5d2c] w-8 h-8 rounded flex justify-center items-center'>
          <FontAwesomeIcon icon={faEnvelope} />
            </div>
           
            <h2>Demo@gmail.com</h2>
          </div>
          <div className='small-info flex gap-2'>
            <div className='icon bg-[#5f5d5d2c] w-8 h-8 rounded flex justify-center items-center'>
              <FontAwesomeIcon icon={faPhone} />
            </div>

            <h2>01703596292 (Admin)</h2>
          </div>
          </div>
          

          <div className='social-icon flex gap-2'>
            <FontAwesomeIcon
              icon={faFacebookF}
              className='bg-[#5f5d5d2c] p-3 w-4  rounded-full'
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className='bg-[#5f5d5d2c] p-3  w-4 rounded-full'
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className='bg-[#5f5d5d2c] p-3 w-4 rounded-full'
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className='bg-[#5f5d5d2c] p-3 w-4 rounded-full'
            />
          </div>
          <h1 className='text-2xl my-5 lg:text-left text-center'>Contact via Social Media</h1>
          <div className='social-contact flex gap-3'>
            {/* //Whats App */}
            <a
              href='https://api.whatsapp.com/send?phone=8801738313337'
              className='flex items-center justify-center text-white bg-[#25d366] transition-all hover:scale-105 h-14 px-4 lg:w-32 rounded'
            >
              <span className='social-main text-lg'>WhatsApp</span>
              {/* <FontAwesomeIcon icon='fa-brands fa-whatsapp' /> */}
            </a>

            {/* Messenger */}
            <a
              href='https://m.me/CodeTravelGame'
              className='flex items-center justify-center text-white bg-[#0099ff] transition-all hover:scale-105 h-14 px-4 lg:w-32 rounded'
            >
              <span className='social-main text-lg'>Messenger</span>
              {/* <FontAwesomeIcon icon='fa-brands fa-whatsapp' /> */}
            </a>

            {/* Email */}
            <a
              href='mailto:talk.rashed@gmail.com?subject=Hello'
              className='flex items-center justify-center text-white bg-[#ea4335] transition-all hover:scale-105 h-14 px-4 lg:w-32 rounded'
            >
              <span className='social-main text-lg'>Email</span>
              {/* <FontAwesomeIcon icon='fa-brands fa-whatsapp' /> */}
            </a>
          </div>
        </div>
        <div className='right'>
          <div className='contact-from'>
          <h1 className='contact-title text-center text-white text-3xl mb-5'>
              
              Contact Form
            </h1>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='flex flex-col justify-center items-center gap-2 my-0.5 text-black'
            >
             
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                required
                className='h-10 w-full rounded outline-none focus:outline-[#ea4335] px-2'
              />
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                required
                className='h-10 w-full rounded outline-none focus:outline-[#ea4335] px-2'
              />
              <input
                type='text'
                name='subject'
                placeholder='Subject'
                className='h-10 w-full rounded outline-none focus:outline-[#ea4335] px-2'
              />
              <textarea
                name='message'
                cols='30'
                rows='7'
                placeholder='Your Message'
                required
                className='resize-none rounded w-full outline-none focus:outline-[#ea4335] px-2'
              ></textarea>
              <div className='cta-div '>
                <div>
                  <button
                    className='bg-[#ff4151] rounded text-white p-3'
                    type='submit'
                    value='Send'
                  >
                    {successMessage === "Send Message" && (
                      <div className='flex items-center'>
                        {/* <FontAwesomeIcon
                         icon='fa-regular fa-paper-plane '
                         className='btn-icon-contact'
                       /> */}
                        {successMessage}
                      </div>
                    )}
                    {successMessage === "Sending..." && (
                      <div className='flex items-center'>
                        {/* <FontAwesomeIcon
                         icon='fa-regular fa-paper-plane '
                         className='btn-icon-contact'
                       /> */}
                        {successMessage}
                      </div>
                    )}
                    {successMessage === "Sent 😊" && (
                      <div className='flex items-center'>
                        {/* <FontAwesomeIcon
                         icon='fa-regular fa-paper-plane '
                         className='btn-icon-contact'
                       /> */}
                        {successMessage}
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    //   <div className='right'>
    //
    //   </div>
    // </div>
  );
};

export default Contact;
