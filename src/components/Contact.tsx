import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';

function Contact() {

  const contactEmail = 'amareshwaranampally@gmail.com';

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    const isNameEmpty = name.trim() === '';
    const isEmailEmpty = email.trim() === '';
    const isMessageEmpty = message.trim() === '';

    setNameError(isNameEmpty);
    setEmailError(isEmailEmpty);
    setMessageError(isMessageEmpty);

    if (isNameEmpty || isEmailEmpty || isMessageEmpty) {
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nContact: ${email.trim()}\n\nMessage:\n${message.trim()}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    /* Uncomment below if you want to enable the emailJS */

    // if (name !== '' && email !== '' && message !== '') {
    //   var templateParams = {
    //     name: name,
    //     email: email,
    //     message: message
    //   };

    //   console.log(templateParams);
    //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <p className="contact-mail">
            Prefer direct email? Write to <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
          <form className='contact-form' onSubmit={sendEmail} noValidate autoComplete="off">
            <div className='form-flex'>
              <div className="input-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  required
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={nameError ? 'contact-input input-error' : 'contact-input'}
                />
                {nameError && <small className="error-text">Please enter your name</small>}
              </div>

              <div className="input-group">
                <label htmlFor="contact-email">Email / Phone</label>
                <input
                  required
                  id="contact-email"
                  name="email"
                  type="text"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={emailError ? 'contact-input input-error' : 'contact-input'}
                />
                {emailError && <small className="error-text">Please enter your email or phone number</small>}
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                required
                id="contact-message"
                name="message"
                rows={10}
                className={messageError ? 'contact-textarea input-error body-form' : 'contact-textarea body-form'}
                placeholder="Send me any inquiries or questions"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {messageError && <small className="error-text">Please enter the message</small>}
            </div>
            <button type="submit" className="contact-submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;