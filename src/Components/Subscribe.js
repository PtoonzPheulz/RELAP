import React from 'react'
import styled from 'styled-components'

const Style = styled.div`
    padding: 3rem;
    background: #084298;
    .s-text {
        text-align: left;
        h6 {
            font-size: .7rem;
            font-weight: 700;
            color: #fff;
            
        }
        h4 {
            font-size: 2rem;
            font-weight: 700;
            color: #fff;
        }
        p {
            font-size: .7rem;
            font-weight: 300;
            color: #fff;
        }
    }
    input {
        width: 60%;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        appearance: none;
        border-radius: 0.25rem;
        outline: none;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    #sub-btn {
        background-color: yellow;
        border-radius: 20px;
        border: 1px solid yellow;
        font-size: .8rem;
        padding: .6rem 2.4rem;
        font-weight: 600;
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        .s-text {
            text-align: center;
        }
    }
    @media screen and (max-width: 375px) {
        .one-line {
           display: flex;
        }
        #sub-btn {
            padding: 0;
            width: 70%;
        }
        input {
            width: 100%;
        }
        ul {
            padding-left: 0;
        }
    }
`

function Subscribe() {
  return (
    <Style>
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 s-text'>
                        <h6>ODIO DIONISSIMOS</h6>
                        <h4>Ducimus qui</h4>
                        <p>Praesentium valuptatum deleniti corrupti quos dolores et  quas<br/> molostias excepturi sant  occaecati cupidditate non provident.</p>
                    </div>
                    <div className='col-lg-6 mt-5 one-line'>
                        <input type={'email'} placeholder={'Your email'} className={'shadow me-3 bg-body rounded'}/>
                        <button id='sub-btn' className='shadow'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </Style>
  )
}

export default Subscribe