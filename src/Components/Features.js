import React from 'react'
import styled from 'styled-components'
import iphones from '../Images/phones.jpg'
import promax from '../Images/pro-max.jpg'
import smartwatch from '../Images/smartwatch.jpg'
import pc from '../Images/pc.jpg'

const Style = styled.div`
    background: #FCEEFF;
    padding: 4rem 1rem;
    margin-top: 16rem;

    .f-text {
        h4 {
            font-size: .8rem;
            font-weight: 100;
        }
        .h1 {
            font-size: 1.3rem;
            margin-bottom: 2rem !important
        }
    }
    .asse {
        margin-left: 8.5rem;
    }
    .iphones {
        background: #fff;
        border-radius: 10px;
        width: 40%;
        padding: 1rem 0 0 0;

        p {
            font-size: .7rem;
        }
        h4 {
            font-size: 1.3rem;
        }
    }
    .phone-img{
        z-index: 1000000000;
    img {
        width: 85%;
        object-fit: contain;
        object-position: center;
    }
}
    .t-left {
        text-align: left;
        padding-left: 2rem;
    }

    .btn-error {
        color: #B365D3;
        border-radius: 20px;
        border: 1px solid #B365D3;
        font-size: .8rem;
        padding: .6rem 2.4rem;
        font-weight: 600;
    }
    .add-header {
        width: 60%;
    }
    .pc-img img {
        padding: 1.2rem 0;
    }
    .promax {
        background: #fff;
        border-radius: 10px;
        padding-right: 4rem;
        width: 36%;
        padding-left: 2rem;
    img {
        border-radius: 10px;
     }
    }
    .smart { 
        background: #fff;
        border-radius: 10px;
        padding-left: 2rem;
        width: 36%;
        margin-left: 2rem;
     img {
        border-radius: 10px
     }
    }
    .lexin {
        text-align: left;
        
    }
    .baclit {
        background: #fff;
        padding: 1rem 0 1rem 1rem;
        border-radius: 10px;
        margin-top: 1.5rem;
        width: 82%;

        p {
            font-size: .7rem;
        }
        h4 {
            font-size: 1.3rem;
        }
    }

    @media screen and (max-width: 768px) {
        .iphones {
            width: 75%;
            margin-bottom: 1rem;
        }
        .promax {
            width: 100%;
            height: 21vh;
         img {
            height: 21vh;
         }
        }
        .add-header {
            width: 77%;
        }
        .smart {
            margin-left: 0;
            height: 21vh;
            margin-top: 1rem;
            width: 100%;
            img {
                width: 100%;
                margin-left: .8rem;
            }
        }
        .pc-img img {
            width: 100%;
        }
        .baclit {
            width: 100%;
            margin-top: 1rem;
        }
    }
    @media screen and (max-width: 375px) {
        margin-top: 24rem;

        .asse {
            margin: 0;
        }
        br {
            display: none;
        }
        .iphones {
            margin-left: 2rem;
            width: 80%;
        }
        .promax {
            padding-left: 1.7rem;
        }
        .smart {
            margin: 0;
            padding-left: 2rem;
            margin-top: 1rem;

            img {
                width: auto;
                height: 21vh;
            }
        }
        .baclit {
            flex-direction: column;
            margin-left: 3rem;
        }
    }
`

function Features() {
  return (
    <Style>
        <div>
            <div className='feat'>
                <div className='f-text mb-4'>
                <h4><b>DESERUNT</b></h4>
                <h1><b>Mollit anim</b></h1>
                </div>
                <div className='asse'>
                    <div className='row'>
                        <div className='col-lg-6 iphones'>
                            <div className='t-left'>
                            <h4><b>Sed ut persipiciatis</b></h4>
                            <p>Unde omnis iste natus error</p>
                            <button className='btn-error'>Shop now</button>
                            </div>
                            <div className='phone-img'>
                                <img src={iphones} alt='ios image here'/>
                            </div>
                        </div>
                        <div className='col-lg-6 add-header'>
                            <div className='container'>
                                <div className='row'>
                                <div className='col-lg-6 promax'>
                                    <img src={promax} alt=''/>
                                </div>
                                <div className='col-lg-6 smart'>
                                <img src={smartwatch} alt=''/>
                                </div>
                                <div className='row'>
                                <div className='col-lg-12 d-flex baclit'>
                                   <div className='lexin'>
                                   <h4><b>Quae ab illo inventore</b></h4>
                                   <p>Architerto beatae vrtae dicta sunt</p>
                                   <button className='btn-error'>Shop now</button>
                                   </div>
                                   <div className='pc-img'>
                                   <img src={pc} alt=''/>
                                   </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Style>
  )
}

export default Features