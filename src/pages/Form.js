function Form() {

    return (
        <>

            <div className="containers">
                <form onSubmit="sendEmail(); reset(); return false;">
                    <h3>Get In Touch</h3>
                    <input type="text" name="name" placeholder="Your Name" required/>
                        <input type="email" name="email" placeholder="Email ID" required/>
                            <input type="text" name="phone" placeholder="Phone Number" required/>
                                <textarea id="message" rows="4" placeholder="Type Your Comment Or Concern"></textarea>
                                <button type="submit">Send</button>
                </form>
            </div>
        </>
    );
}

export default Form;