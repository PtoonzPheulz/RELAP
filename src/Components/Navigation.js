import React from 'react'
import styled from 'styled-components'
import {FiHeart} from 'react-icons/fi'
import {GrCart} from 'react-icons/gr'
import {Nav, Navbar, Container, Form, FormControl, Button} from 'react-bootstrap'

const Style = styled.div`
  .navbar-brand {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    font-weight: 900;
  }
  .nav-link {
    font-size: .8rem;
    font-weight: 500;
  }
  .btn-outline-success {
    border-radius: 50px;
    color: white;
    background: mediumseagreen;
    border: none;
    font-size: .7rem;
    padding: .6rem 1.5rem;
    font-weight: 600;
  }
  .form-control {
    width: 50%;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #fff;
  }
  .cart {
    padding: .2rem .3rem;
    margin-left: 1rem;
    border: #000 solid 1px;
    border-radius: 50px;
  }
  .heart {
    padding: .2rem .3rem;
    margin-left: 1rem;
    border: #fff solid 1px;
    border-radius: 50px;
  }

  @media screen and (max-width: 768px) {
    .form-control {
      display: inline;
    }
    .mac-pre {
      margin-bottom: 2rem;
    }
  }
`

function Navigation() {
  return (
    <Style>
        <div>
        <Navbar bg="none" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">RELAP</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1"><b>Store</b></Nav.Link>
        <Nav.Link href="#action1"><b>Features</b></Nav.Link>
        <Nav.Link href="#action1"><b>About</b></Nav.Link>
        <Nav.Link href="#action1"><b>Blog</b></Nav.Link>
        <Nav.Link href="#action1"><b>News</b></Nav.Link>

      </Nav>
      <span className='heart'>
      <FiHeart size={20} color={"white"}/>
      </span>
     <span className='cart'>
     <GrCart size={20} color={'white'}/>
     </span>
      {/* <Form className="d-flex">
        <Button variant="outline-success">Get Started</Button>
      </Form> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    </Style>
  )
}

export default Navigation