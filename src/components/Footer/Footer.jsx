const Footer = () => {
    return(
        <div className="pb-5 flex flex-col items-center background-green text-white">
            <h2 className="text-2xl font-bold my-8 lg:text-3xl lg:my-14">We are waiting for your contact!</h2>
            <div className="w-full flex flex-col items-center lg:flex-row lg:items-start lg:justify-around lg:text-center">
                <div className="contact-element">
                    <h3 className="contact-element-heading">Call us!</h3>
                    <p className="mb-2 text-xl">+48 777 777 777</p>
                    <p className="mb-2">We are aswering the phone 24/7</p>
                </div>
                <div className="contact-element">
                    <h3 className="contact-element-heading">Visit us!</h3>
                    <p className="mb-2 text-xl">Ranacka Street 21, Warsaw, Poland</p>
                    <p className="mb-2">Our office is opened 8-16 in the working week</p>
                </div>
                <div className="contact-element">
                    <h3 className="contact-element-heading">Mail us!</h3>
                    <p className="mb-2 text-xl">basicbank@gmail.com</p>
                    <p className="mb-2">Answering mails in free time</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;