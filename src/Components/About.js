import React from 'react'
import styled from 'styled-components'
import {GrCart} from 'react-icons/gr'
import headset from '../Images/Headset.jpeg'
import speaker from '../Images/bt-speaker-1.webp'
import btspeak from '../Images/bt-speaker-2.webp'
import gameset from '../Images/gaming-headset.webp'

const Style = styled.div`

    span {
            padding: .3rem .5rem;
            border: #000 solid 1px;
            border-radius: 20px;
    }
    
    .shadow {
        margin-right: 1rem;
        width: 23%;
    }

    h5 {
        font-size: 1rem;
        font-weight: 700;
        text-align: left;
        padding-top: 1.2rem;
    }
    .a-img-1 {
        img {
            width: 70%;
        }
    }
    .a-img-2 {
        img {
            width: 70%;
        }
    }
    .a-img-3 {
        img {
            width: 70%;
        }
    }
    .a-img-4 {
        img {
            width: 70%;
        }
    }
    .a-text-1 {
        padding: 2rem 6rem;
        h4 {
            font-size: 3rem;
            font-weight: 900;
            // padding-top: .9rem;
        }
    }
    .a-text-2 {
        // padding: 2rem;
        a {
            color: purple !important;
            text-decoration: underline !important;
            font-weight: 700 !important;

        }
        P {
            margin-left: 1rem;
        }

    }
    .alet p {
            font-weight: 700;
        }

    @media screen and (max-width: 768px) {
        .shadow {
            width: 95%;
        }
        a-text-1 {
            padding: 2rem;
        }
    } 
    @media screen and (max-width: 375px) {
        br {
            display: none;
        }
        .a-text-1 {
            flex-direction: column;
            padding: 2rem 0;
            

            h4 {
                font-size: 2rem;
            }
        }
        .a-text-2 {
            display: block!important;
        }
        .shadow {
            width: 90%;
        }
    }
`

function About() {
  return (
    <Style>
        <div>
            <div className='about'>
                <div className='a-text-1 d-flex justify-content-between'>
                    <h4>Unde omnis</h4>
                    <div className='a-text-2 d-flex justify-content-between'>
                        <p><a>Phones</a></p>
                        <p>Electronic</p>
                        <p>Appliances</p>
                        <p>Clothes</p>
                        <p>Kids</p>
                    </div>
                </div>
                <div className='container ps-5'>
                    <div className='row'>
                        <div className='col-lg-3 shadow p-3 mb-5 bg-body rounded'>
                            <div className='a-img-1'>
                                <img src={headset} alt='bluetooth speakers'/>
                            </div>
                            <h5>Nemo enim<br/> ipsam</h5>
                            <div className='alet a-item-1 d-flex justify-content-between'>
                                <p>$180</p>
                                <span>
                                    <GrCart size={20} color={'purple'}/>
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 shadow p-3 mb-5 bg-body rounded'>
                        <div className='a-img-2'>
                                <img src={gameset} alt='bluetooth speakers'/>
                            </div>
                            <h5>Sed quia<br/> consequuntur</h5>
                            <div className='alet a-item-2 d-flex justify-content-between'>
                                <p>$180</p>
                                <span>
                                    <GrCart size={20} color={'purple'}/>
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 shadow p-3 mb-5 bg-body rounded'>
                        <div className='a-img-3'>
                                <img src={speaker} alt='bluetooth speakers'/>
                            </div>
                            <h5>Aut odit aut<br/> fugit</h5>
                            <div className='alet a-item-3 d-flex justify-content-between'>
                                <p>$180</p>
                                <span>
                                    <GrCart size={20} color={'purple'}/>
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 shadow p-3 mb-5 bg-body rounded'>
                        <div className='a-img-4'>
                                <img src={btspeak} alt='bluetooth speakers'/>
                            </div>
                            <h5>Quia voluptas<br/> aspernatur</h5>
                            <div className='alet a-item-4 d-flex justify-content-between'>
                                <p>$180</p>
                                <span>
                                    <GrCart size={20} color={'purple'}/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Style>
  )
}

export default About