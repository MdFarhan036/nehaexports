import React from "react"
// import GoogleMapReact from 'google-map-react';
import img from "../image/pricing.jpg"
import Back from "../common/Back"

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
    // const defaultProps = {
    //     center: {
    //       lat: 10.99835602,
    //       lng: 77.01502627
    //     },
    //     zoom: 11
    //   };
    return (
        <>
            <section className='contact mb'>
                <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
                <div class="row justify-content-md-center text-center mg-5 pb-5 contactus">
                    <div class="col-md-6">
                        <div class="form">


                            <form name="sentMessage" class="well" id="contactForm" novalidate data-aos="fade-up" data-aos-easing="linear" data-aos-delay="200">
                                <div class="control-group wow animate__animated animate__fadeInLeft" >
                                    <div class="form-group mb-4">
                                        <input type="text" class="form-control form-control-lg" placeholder="Full Name" id="name" required data-validation-required-message="Please enter your name" />
                                        <p class="help-block"></p>

                                    </div>
                                </div>
                                <div class="form-group mb-4wow animate__animated animate__fadeInLeft" >
                                    <div class="controls">
                                        <input type="email" class="form-control form-control-lg" placeholder="Email" id="email" required data-validation-required-message="Please enter your email" />
                                    </div>
                                </div>

                                <div class="form-group mb-4wow animate__animated animate__fadeInLeft" >
                                    <div class="controls">
                                        <textarea rows="10" cols="100" class="form-control form-control-lg" placeholder="Message" id="message" required data-validation-required-message="Please enter your message" minlength="5" data-validation-minlength-message="Min 5 characters" maxlength="999"
                                           ></textarea>
                                    </div>
                                </div>
                                <div id="success"> </div>

                                <div class="text-center">
                                    <button class="btn btn-lg btn-primary py-3 mt-3 px-4 btn-pill wow animate__animated animate__fadeInUp" type="submit">Send Your Message</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div class="col-md-5 ">
                        <div class="row contact-info">
                            <div class="col-md-12">
                                <div class="bg-white p-4 d-flex mb-md-4 border " data-aos="fade-right" data-aos-easing="linear" data-aos-delay="200">
                                    <i class="fa fa-address-book mt-md-1 text-primary pr-4"></i>
                                    <div class="text-left">
                                        <h6 class="mb-2">Address:</h6>
                                        <p class="text-muted ">Shop no 5, Opp Parsrampuria Mart, Kedia Palace Road,<br /> Road No 1, Murlipura, Jaipur</p>
                                    </div>
                                </div>
                                <div class="bg-white p-4 d-flex mb-md-4 border  " data-aos-delay="300 " id="details ">
                                    <i class="fas fa-envelope-open mt-md-1 text-primary pr-4 "></i>
                                    <div class="text-left ">
                                        <h3 class="h5 ">Email:</h3>
                                        <p class="mb-0 ">deepakpareek451@gmail.com</p>
                                    </div>
                                </div>
                                <div class="bg-white p-4 d-flex mb-md-4 border  " data-aos-delay="400 " id="details ">
                                    <i class="fa fa-phone mt-md-1 text-primary pr-4 "></i>
                                    <div class="text-left ">
                                        <h3 class="h5 ">Phone Number:</h3>
                                        <p class="mb-0 ">9414037215, 7737245651</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div> */}
        </>
    )
}

export default Contact
