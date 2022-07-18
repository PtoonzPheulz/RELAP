import React from 'react'
import styled from 'styled-components'
import {Card} from 'react-bootstrap'
import meta from '../Images/meta.jpg'
import workspace from '../Images/workspace.jpg'
import keyboard from '../Images/keyboard.jpg'

const Style = styled.div`
    padding: 2rem 5rem;
    text-align: left;
    .n-text-1 {
        h6 {
            font-size: .7rem;
            font-weight: 700;
        }
        h4 {
            font-size: 2rem;
            font-weight: 700;
        }
        .card-title {
            font-weight: 700;
        }
        .card-text {
            font-size: .7rem;
            font-weight: 300;
        }
    }

    @media screen and (max-width: 768px) {
        padding: 2rem 10rem;
    }
    @media screen and (max-width: 375px) {
        padding: 2rem 0;

        .card {
            width: 14rem!important;
        }
    }
`

function News() {
  return (
    <Style>
        <div>
            <div className='container ps-5 n-text-1'>
                <h6>VELIT ESSE</h6>
                <h4>Quam nihil</h4>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <Card className='shadow  mb-5 bg-body rounded' style={{width: '18rem'}}>
                                <Card.Img variant='top' src={workspace}/>
                                <Card.Body>
                                    <Card.Title>
                                        Vel illum qui dolorem<br/>
                                        eum fugiat
                                    </Card.Title>
                                    <Card.Text>July 06/2022</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-4'>
                        <Card className='shadow  mb-5 bg-body rounded' style={{width: '18rem'}}>
                                <Card.Img variant='top' src={meta}/>
                                <Card.Body>
                                    <Card.Title>
                                        Quo voluptas nullas<br/>
                                        pariatur
                                    </Card.Title>
                                    <Card.Text>July 06/2022</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-4'>
                        <Card className='shadow  mb-5 bg-body rounded' style={{width: '18rem'}}>
                                <Card.Img variant='top' src={keyboard}/>
                                <Card.Body>
                                    <Card.Title>
                                        At vero eos et<br/>
                                        Accusamus et iusto
                                    </Card.Title>
                                    <Card.Text>July 06/2022</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Style>
  )
}

export default News