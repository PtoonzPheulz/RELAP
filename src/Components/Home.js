import React from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'
import background from '../Images/Relap-background.jpg'
import Macbook from '../Images/Macbook.png'
import {TbTruckDelivery} from 'react-icons/tb'
import {BiRefresh} from 'react-icons/bi'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineShoppingBag} from 'react-icons/md'
import Store from './Store'
import Features from './Features'
import About from './About'
import Blog from './Blog'
import News from './News'
import Subscribe from './Subscribe'
import Footer from './Footer'

const Style = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  padding: .7rem 1.3rem;

  .feed {
    padding-top: 3rem;
  }

  .mac-img{
    margin-top: .2rem;
  img {
    width: 71.3%;
  }
  }
  .mac-pre {
    text-align: left;
    margin-top: 5rem;
    margin-right: 5rem;
    h1, h4 {
      color: #fff;
    }
      h4 {
        font-size: .6rem;
      }
      h1 {
        font-weight: 700;
      }
  }
  .btn-buy {
    background-color: gold;
    padding: .4rem 2.3rem;
    border-radius: 50px;
    color: #fff;
    font-size: 1rem;
    border: none;
    font-weight: 600;
    margin-right: 10rem;
  }
  .s-vice {
    background: #FCEEFF;
    height: 20vh;
    padding: 2.4rem 0;
  }
  .cove {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .dest {
      text-align: left;
    }
    p {
      font-size: .6rem;
    }
    span {
      padding-right: .5rem;
    }
  }

  @media screen and (max-width: 768px) {
    .s-vice {
      height: 33vh;
    }
    .h-item {
      flex-direction: column-reverse;
    }
    .mac-pre { 
      margin-right: 0;
      h1 {
      font-size: 4rem;
      }
      h4 {
        font-size: 1rem;
      }
    }
    .btn-buy {
      font-size: 1.5rem;
      margin: 0;
      width: auto;
    }
    .mac-img img {
      width: 100%;
    }
  }
  @media screen and (max-width: 375px) {
    br {
      display: none;
    }
    .s-vice {
      height: 45vh;
    }
    .dest-1 {
      text-align: left;
    }
    .dest-2 {
      margin-right: 2.3rem;
      text-align: left;
    }
    .dest-3 {
      margin-right: 1rem;
      text-align: left;
    }
    .dest-4 {
      text-align: left;
    }
    .mac-img img {
      margin-top: .3rem;
    }
  }
`

function Home() {
  return (
    <Style>
      <div>
        <Navigation/>
        <div className='container feed'>
          <div className='h-item d-flex justify-content-between'>
              <div className='mac-img'>
                <img src={Macbook} alt=''/>
              </div>
            <div className='mac-pre'>
              <h4>MINIM VENIAM</h4>
              <h1>Ut labore et<br/> dolore</h1>
              <button className='btn-buy'>Buy now</button>
            </div>
          </div>
        </div>
        <div className='s-vice'>
          <div className='row'>
            <div className='col-lg-3 cove'>
              <span className='Truck'>
                <TbTruckDelivery size={30} color={'purple'}/>
              </span>
              <div className='dest-1'>
                <h6><b>Quis nostrud</b></h6>
                <p>Voluptatem quia voluptas<br/>
                 aspernatur aut odit aut fugit.</p>
              </div>
            </div>
            <div className='col-lg-3 cove'>
            <span className='Refresh'>
                <BiRefresh size={30} color={'purple'}/>
              </span>
              <div className='dest-2'>
                <h6><b>Exercitation</b></h6>
                <p>Nemo enim ipsam voluptatem<br/>
                 quia voluptassit.</p>
              </div>
            </div>
            <div className='col-lg-3 cove'>
            <span className='Customer'>
                <RiCustomerService2Fill size={26} color={'purple'}/>
              </span>
              <div className='dest-3'>
                <h6><b>Ullamco laboris</b></h6>
                <p>Neque porro quisquam est,<br/>
                 qui dolorem ipsum quia.</p>
              </div>
            </div>
            <div className='col-lg-3 cove'>
            <span className='bag'>
                <MdOutlineShoppingBag size={27} color={'purple'}/>
              </span>
              <div className='dest-4'>
                <h6><b>Nisi ut aliquip</b></h6>
                <p>Ut enim ad minima veniam<br/>
                 quis nostrum exercitationem.</p>
              </div>
            </div>
          </div>
        </div>
        <Store/>
        <Features/>
        <About/>
        <Blog/>
        <News/>
        <Subscribe/>
        <Footer/>
    </div>
    </Style>
  )
}

export default Home