import "../style/contactme.css"

const ContactMe = () => {
    
    return ( 
        <section className="contact-me-section">
            <a href="mailto:shanhun.codes@gmail.com" className="email">Shanhun.codes@gmail.com</a>
            <h3 className="title">Contact Me!</h3>
            {/*eslint-disable-next-line react/no-unescaped-entities*/}
            <p className="aussieHey">G'Day! Get in contact with me below!</p>
            <form className="contact-form">

                {/* name label */}
            <label className="form-name">Name:</label><br />

                {/* input for name  */}
            <input className="input"
            type="text" 
            name="name" 
            placeholder="Name" /> <br />

                {/* email label */}
            <label className="form-email">Email:</label><br />

                {/* email input */}
            <input className="input" 
            type="email"
            name="email"
            placeholder="Email" /> <br />

                {/* message label */}
            <label className="form-message">Enter your message here:</label> <br />

                {/* message input */}
            <textarea className="input" name="message"  cols="600" rows="10" placeholder="Write you message here!! Lets Talk ideas!!!"></textarea><br />

            <button className="contact-submit-btn" type="submit">Submit</button>
            </form>
        </section>
     );
}
 
export default ContactMe;