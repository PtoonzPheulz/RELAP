import React from 'react'
import styled from 'styled-components'

const Style = styled.div`
    padding: 3rem 2rem;

    ul {
        text-align: left;
        li {
            font-size: .8rem;
            list-style-type: none;
        }
    }
    h4 {
        padding-right: 7rem;
        font-size: .9rem;
        font-weight: 600;
    }
    .text-1 {
        padding-right: 4.3rem;
    }
    .text-2 {
        padding-right: 6rem
    }

    @media screen and (max-width: 768px) {
        ul {
            text-align: center;
        }
        h4 {
            padding-right: 0;
            text-align: center;
        }
        .text-1 {
            padding-right: 0;
        }
        .text-2 {
            padding-right: 0
        }
    }
    @media screen and (max-width: 375px) {
        br {
            display: none;
        }
    }
`

function Footer() {
  return (
   <Style>
     <div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3'>
                    <h4>Tempor</h4>
                    <ul>
                        <li>Similique</li>
                        <li>Desserunt mollit anim</li>
                        <li>Sed ut perspiciatis</li>
                    </ul>
                </div>
                <div className='col-lg-3'>
                <h4 className='text-1'>Sunt in culpa</h4>
                    <ul>
                        <li>Sunt in culpa</li>
                        <li>Mollit anim</li>
                        <li>Perspiciatis</li>
                    </ul>
                </div>
                <div className='col-lg-3'>
                <h4 className='text-2'>Qui officia</h4>
                    <ul>
                        <li>Deserunt</li>
                        <li>Mollita</li>
                        <li>Laborum</li>
                    </ul>
                </div>
                <div className='col-lg-3'>
                <h4>Magna</h4>
                    <ul>
                        <li>123 dignissimos ducimus, 42</li>
                        <li>Minim@info.com</li>
                        <li>+ (234) 567 89 01</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        Copyright 2018 All Rights Reserved.
                    </div>
                    <div className='col-lg-4 d-flex justify-content-evenly'>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                    </div>
                    <div className='col-lg-4 d-flex justify-content-evenly'>
                    <p>Verse </p>
                    <p>Visa</p>
                    <p>Mastercard</p>
                    </div>
                </div>
            </div>
        </div>
     </div>
   </Style>
  )
}

export default Footer