import React from 'react'
import { FooterGroup } from './styles/Footer.styled'

const Footer = () => {
  return (
    <FooterGroup>
        <section>
            <div><img src="images/logo.svg" alt="logo" /></div>
            <div>
            <img src="images/icon-facebook.svg" alt="facebook" />
            <img src="images/icon-twitter.svg" alt="twitter" />
            <img src="images/icon-pinterest.svg" alt="pinterest" />
            <img src="images/icon-instagram.svg" alt="instagram" />
            </div>
        </section>
        <hr></hr>
        <section>
            <div>
                <h5>our company</h5>
                <p>How we work</p>
                <p>why insure?</p>
                <p>check price</p>
                <p>reviews</p>
            </div>
            <div>
                <h5>help me</h5>
                <p>faq</p>
                <p>terms of use</p>
                <p>privacy policy</p>
                <p>cookies</p>
            </div>
            <div>
                <h5>contact</h5>
                <p>sales</p>
                <p>support</p>
                <p>live chat</p>
            </div>
            <div>
                <h5>others</h5>
                <p>careers</p>
                <p>press</p>
                <p>licenses</p>
            </div>
        </section>
    </FooterGroup>
  )
}

export default Footer