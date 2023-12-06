import React from 'react'
import Card from './Card'

import Pdata1, { Pdata2, Pdata3, Pdata4, Pdata5 } from './Pdata'

import img1 from "../image/Picture32.png"
import img2 from "../image/Picture3.png"
import img3 from "../image/Picture36.png"
// import Product from './Card';

const Landing = () => {
    return (
        <>
            <div id="service-glass">
                <div className="section-title pt-5">
                    <h5 className="text-center"><b>Beauty is eternity gazing at iself in mirror</b></h5>
                    <div className="line-mf"></div>
                </div>

                <div className="container pt-4 pb-5 d-flex flex-wrap justify-content-center" data-aos="fade-up" data-aos-duration="700">
                    <div className="imgcard mb-5 ms-1 me-2 wow animate__animated animate__zoomIn" >
                        <img src={img1} alt="" />

                    </div>
                    <div className="imgcard mb-5 ms-1 me-2 wow animate__animated animate__zoomIn" >
                        <img src={img2} alt="" />

                    </div>
                    <div className="imgcard mb-5 ms-1 me-2 wow animate__animated animate__zoomIn" >
                        <img src={img3} alt="" />

                    </div>
                </div>
            </div>
            <section className=" " id=" ">
                <div className="section-title pt-5 ">
                    <p className="text-center wow animate__animated animate__fadeInLeft" ><span>FEATURED</span> PRODUCTS</p>
                    <div className="line-mf "></div>
                </div>

                <h2 className="text-center"><span>Bathroom</span> Mirrors</h2>
                <div className="container bathroom pt-4  d-flex flex-wrap justify-content-center" data-aos="fade-up" data-aos-duration="700">
                    {Pdata1.map((val, index) => {
                        return (

                            <Card
                                 id={val.id}
                                imgsrc={val.pimage}
                                title={val.pname}
                                descrip={val.desc}
                                price={val.price}
                                link={val.addbutton}
                            />
                        )
                    })}
                </div>


                <h2 className="text-center"><span>Full Size</span> Mirrors</h2>
                <div className="container bathroom pt-4 pb-5 d-flex flex-wrap justify-content-center" data-aos="fade-up" data-aos-duration="700">
                    {Pdata2.map((val, index) => {
                        return (

                            <Card
                                 id={val.id}
                                imgsrc={val.pimage}
                                title={val.pname}
                                descrip={val.desc}
                                price={val.price}
                                link={val.addbutton}
                            />
                        )
                    })}
                </div>

                <h2 className="text-center"><span>Full Size</span> Mirrors</h2>
                <div className="container bathroom pt-4 pb-5 d-flex flex-wrap justify-content-center" data-aos="fade-up" data-aos-duration="700">
                    {Pdata3.map((val, index) => {
                        return (

                            <Card
                                 id={val.id}
                                imgsrc={val.pimage}
                                title={val.pname}
                                descrip={val.desc}
                                price={val.price}
                                link={val.addbutton}
                            />
                        )
                    })}
                </div>

                <h2 className="text-center"><span>Full Size</span> Mirrors</h2>
                <div className="container bathroom pt-4 pb-5 d-flex flex-wrap justify-content-center" data-aos="fade-up" data-aos-duration="700">
                    {Pdata4.map((val, index) => {
                        return (

                            <Card
                                 id={val.id}
                                imgsrc={val.pimage}
                                title={val.pname}
                                descrip={val.desc}
                                price={val.price}
                                link={val.addbutton}
                            />
                        )
                    })}
                </div>
                <h2 className="text-center"><span>Full Size</span> Mirrors</h2>
                <div className="container bathroom pt-4 pb-5 d-flex flex-wrap justify-content-center" data-aos="fade-up" data-aos-duration="700">
                    {Pdata5.map((val, index) => {
                        return (

                            <Card
                                 id={val.id}
                                imgsrc={val.pimage}
                                title={val.pname}
                                descrip={val.desc}
                                price={val.price}
                                link={val.addbutton}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    )

}
export default Landing;
