import { useState } from 'react'

import "../style/contactme.css"

const ContactMe = () => {

    const [formState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return ( 
        <section className="contact-me-section">
            <a href="mailto:shanhun.codes@gmail.com" className="email">Shanhun.codes@gmail.com</a>
            <h3 className="title">Contact Me!</h3>
            {/*eslint-disable-next-line react/no-unescaped-entities*/}
            <p className="aussieHey">G&apos;Day! Get in contact with me below!</p>
            <form className="contact-form"
            name="contact"
            method="post"
            action="/"
            data-netlify="true">


            <input type="hidden" name="form-name" value="contact" />
                {/* name label */}
            <label className="form-name">Name:</label><br />

                {/* input for name  */}
            <input className="input form-control"
            type="text" 
            name="name" 
            placeholder="Name"
            defaultValue={name}
            required /> <br />

                {/* email label */}
            <label className="form-email">Email:</label><br />

                {/* email input */}
            <input className="input form-control" 
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={email}
            required /> <br />

                {/* message label */}
            <label className="form-message">Enter your message here:</label> <br />

                {/* message input */}
            <textarea className="input text-area form-control" 
            name="message" 
            rows="10" 
            placeholder="Write you message here!! Lets Talk ideas!!!"
            defaultValue={message}
            required></textarea><br />

            <button className="contact-submit-btn" 
            type="submit"
            onSubmit={handleSubmit}>Submit</button>
            </form>
        </section>
     );
}
 
export default ContactMe;