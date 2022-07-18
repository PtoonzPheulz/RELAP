import React from 'react'
import styled from 'styled-components'
import ipad from '../Images/ipad.png'
import iphone from '../Images/iphone.png'
import Laptop from '../Images/Laptop.png'
import Mac from '../Images/Mac.png'

const Style = styled.div`
    width: 100%;
    height: 100vh;
    padding: 7rem 1rem;
    .pi-img img{
      width: 70%;
      margin-left: 2rem;
    }
    .pr-img img{
      padding: .2rem 1.5rem;
      width: 50%;
      margin-left: 2rem;
    }
    .po-img img{
      width: 55%;
      margin-left: 1rem;
    }
    .pro-img img{
      margin-left: 2rem;
      width: 70%;
    }
    ul {
      list-style-type: none;
    }

    @media screen and (max-width: 768px) {
      padding: 3rem 1rem;
      .pi-img img {
        width: 30%;
      }
      .pr-img img {
        width: 20%;
      }
      .po-img img {
        width: 20%;
      }
      .pro-img img {
        width: 30%;
      }
    }
    @media screen and (max-width: 375px) {
     
      br {
        display: none;
      }
      ul {
        font-size: .8rem;
      }
      .pi-img img {
        width: 50%;
      }
      .pr-img img {
        width: 40%;
      }
      .po-img img {
        width: 35%;
      }
      .pro-img img {
        width: 50%;
      }
    }
`

function Store() {
  return (
    <Style>
        <div>
            <div className='store-para'>
            <h6><b>NATUS ERROR</b></h6>
            <h1><b>Unde omnis iste </b></h1>
            <p>Adipisci velit, sed quia non numquam eius madi tempora incidunt ut labore et dolare<br/> magnam aliquam quaerat voluptatem</p>
            </div>
            <div className='container products'>
              <div className='row'>
                <div className='col-lg-3'>
                  <div className='pi-img'>
                    <img src={Laptop} alt=''/>
                  </div>
                  <ul>
                    <li>Commodo</li>
                    <li>Consequat</li>
                    <li>Duis aute</li>
                    <li>Ifure dolor</li>
                    <li><b>See all</b></li>
                  </ul>
                </div>
                <div className='col-lg-3'>
                <div className='pr-img'>
                    <img src={iphone} alt=''/>
                  </div>
                  <ul>
                    <li>Reprehenderit</li>
                    <li>voluptate</li>
                    <li>velit esse</li>
                    <li>Cillum dolore</li>
                    <li><b>See all</b></li>
                  </ul>
                </div>
                <div className='col-lg-3'>
                <div className='po-img'>
                    <img src={ipad} alt=''/>
                  </div>
                  <ul>
                    <li>fugit nulla</li>
                    <li>Pariatur</li>
                    <li>Excepteur</li>
                    <li>Sint occaecat</li>
                    <li><b>See all</b></li>
                  </ul>
                </div>
                <div className='col-lg-3'>
                <div className='pro-img'>
                    <img src={Mac} alt=''/>
                  </div>
                  <ul>
                    <li>Cupidatat</li>
                    <li>Non proident</li>
                    <li>Sunt in culpa</li>
                    <li>Qui officia</li>
                    <li><b>See all</b></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </Style>
  )
}

export default Store