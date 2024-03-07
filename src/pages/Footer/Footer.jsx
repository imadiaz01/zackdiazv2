import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div id='Contact' className='footer'>

<div className="contact-header">
    <div className="column lg-12">
        <h2 className="text-pretitle">Get In Touch</h2>

        <p className="text-huge-title">
            Contactanos
        </p>
    </div>

    <div className="business">
        <p>
        Business inquiries only.

        </p><div className="s-footer__buttons">
            <a href="mailto:contact@zackdiaz.com" className="btn btn--primary u-fullwidth">Say Hello</a>

        </div>

        <p></p>
    </div>

</div>


<div className="footer-contact">


    <div className="column lg-4 md-5 stack-on-900 right-block">

        <div className="s-footer__contact-info">
            <h2 className="text-subtitle">
                contact:
            </h2>
            <ul className="link-list">
                <li><a href="mailto:contact@zackdiaz.com">contact@zackdiaz.com</a></li>
                <li><a href="tel:+18093278181">+18093278181</a></li>
            </ul>
        </div>

        <div className="s-footer__social">
            <h2 className="text-subtitle">
                Connect
            </h2>
            <ul className="link-list">
                <li><a href="https://www.facebook.com/ZackDiazOfficial">Facebook</a></li>
                <li><a href="https://twitter.com/ZackDiaz01/">Twitter</a></li>
                <li><a href="https://www.instagram.com/zackdiaz01">Instagram</a></li>
            </ul>
        </div>

    </div>
</div>


    <div className="ss-copyright">
        <span>© Copyright Zack Diaz 2022</span>



</div>

    </div>
  )
}

export default Footer