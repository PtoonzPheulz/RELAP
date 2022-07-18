import React from 'react'
import styled from 'styled-components'
import headset from '../Images/Headset.png'

const Style = styled.div`
    background: #FCEEFF;
    padding: 2rem 6rem;

    progress {
        padding: 1rem;
        width: 100%;
    }
    .b-text-1 {
        h2 {
            font-size: 3rem;
            font-weight: 700;
        }
        h4 {
            font-size: 2rem;
            font-weight: 700;
        }
    }
    .b-text-2 {
        text-align: left;
        h5 {
            font-weight: 700;
            text-align: left;
        }
        span {
            color: #B365D3;
            font-size: .8rem;
            font-weight: 300;
        }
        p {
            font-size: .8rem;
            font-weight: 300;
        }
    }
    .shadow {
        text-align: left;
        h5 {
            padding-left: 2rem;
            font-weight: 900;
            padding-top: .8rem;
        }

    ul {
        padding: 0;
        list-style-type: none;
        padding-left: 2rem;

        li {
            padding-top: 1rem;
            font-size: .8rem;
            font-weight: 300;
        }
        }
    }
    .beat-img img {
        width: 100%;
    }
    .cart-btn {
        background-color: #B365D3;
        border-radius: 20px;
        border: 1px solid #B365D3;
        font-size: .8rem;
        padding: .6rem 2.4rem;
        font-weight: 600;
        color: #fff;
    }
    @media screen and (max-width: 768px) {
        padding: 2rem 4rem;
    }
    
    @media screen and (max-width: 376px) {
        padding: 2rem 1rem;

        .b-text-1 {
            h2{
                font-size: 2rem;
            }
        }
        .beat-img {
            margin-bottom: 1rem;
        }
    }
`

function Blog() {
  return (
    <Style>
        <div>
            <div className='b-text-1 container mb-5 d-flex justify-content-between'>
                <h2>Magnii  dolores</h2>
                <h4 className='mt-2'>12 : 17 : 08 : 42</h4>
            </div>
            <div className='container'>
                <div className='row'>
                <div className='col-lg-4 shadow p-3 mb-5 bg-body rounded'>
                    <h5>Voluptate</h5>
                    <ul>
                        <li><a>Phones</a></li>
                        <li>Electronics</li>
                        <li>Appliances</li>
                        <li>Clothes</li>
                        <li>Kids</li>
                       
                    </ul>
                </div>
                <div className='col-lg-4 beat-img'>
                    <img src={headset} alt=''/>
                </div>
                <div className='col-lg-4 b-text-2'>
                    <h5>Quis autem vel eum iure<br/> reprehenderit</h5>
                    <h5><b>$199</b> <span><strike>$999</strike></span></h5>
                    <p>
                        Neque porro quisquam est, qui dolorem ipsum quia 
                        dolor sit amet, consectetur, adipisci velit, sed quai non 
                        numquarn eius modi tempora incidunt ut labore et 
                        dolor magnam aliquam quaerat voluptatem.
                    </p>
                    <div className='d-flex justify-content-between'>
                        <h6>Sold: 120</h6>
                        <h6>Quantity: 500</h6>
                    </div>
                    <progress id='progress' max={'100'} value={'30'} >30%</progress>
                    <button className='cart-btn'>Add to cart</button>
                </div>
                </div>
            </div>
        </div>
    </Style>
  )
}

export default Blog