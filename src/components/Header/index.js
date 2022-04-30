/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function HeaderCompnent() {
  return (
    <>
    <div className="main-header header-fixed-default" id="home-header">
        <nav className="navbar container w-100 navbar-expand-lg navbar-transparent bg-transparent">
            <div className="logo">
                <img src="../../../assets/images/logo_white.png" alt="" />
            </div>
            <div className="menu-toggle navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex align-items-center"></div>
                <div style={{"margin": "auto"}}></div>
                    <div className="header-part-right">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="scroll-to nav-link m-2" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="scroll-to nav-link m-2" href="#features-wrap">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="scroll-to nav-link m-2" href="#services-wrap">Services</a>
                            </li>
                            <li className="nav-item">
                                <a href="#works-wrap" className="scroll-to nav-link m-2 m-2">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="scroll-to nav-link m-2" href="#pricing-wrap">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="scroll-to nav-link m-2" href="#faqs-wrap">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className="scroll-to nav-link m-2" href="#contacts-wrap">Contact Us</a>
                            </li>   
                            <li className="nav-item">
                                <a href="https://bizone.vercel.app/auth/login" className="btn btn-outline-white btn pl-3 pr-3 pb-2 ml-4 mt-2" role="button">Sign In</a>
                            </li>                        
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default HeaderCompnent