import React from 'react'


// import Pdata1, { Pdata2, Pdata3, Pdata4, Pdata5 } from './Pdata'



const Card = (props) => {

    return (
        <>
            <div className="product-card bathroom-content ">
                <div className="pimage">
                    <img src={props.imgsrc} className="pimage" alt="myProducts" />
                </div>
                <div className="row d-flex mb-3">
                    <span className='title'> {props.title} </span>
                    <p className='descrip'> {props.descrip}</p>
                    <p className='price'>{props.price}</p>
                    <a href={props.link} >
                        <button className='addbutton'>Add to Cart</button>
                    </a>
                </div>
            </div>

        </>
    )
}
export default Card;