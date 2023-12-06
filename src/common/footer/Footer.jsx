import React from "react"
import { footer } from "../../components/Pdata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Testimonial</h1>
              <p className="testi-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe quaerat perferendis reiciendis rerum soluta sint quia nesciunt culpa. Hic ducimus ut perspiciatis pariatur nulla consequatur a illum labore eaque!</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              {/* <img src='../images/logo-light.png' alt='' /> */}
              <h2>NEHA EXPORTS</h2>
              <h6>A Unit of Deepak Traders</h6>
              <p className="footer-para">Shop no 5, Opp Parsrampuria Mart, Kedia Palace Road,<br /> Road No 1, Murlipura, Jaipur</p>
              <p className="footer-para">9414037215, 7737245651</p>
              <p className="footer-para">deepakpareek451@gmail.com</p>
              {/* <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div> */}
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 NEHA EXPORTS. Designd By Farhan.</span>
      </div>
    </>
  )
}

export default Footer
