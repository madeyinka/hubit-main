import React from 'react'

function LandingLayout({handleChange, handleCategory, onSubmit, status, message, error, formValues, units, validateForm, services, contactBtn,
                        email, setEmail, validEmail, setEmailFocus, emailFocus, handlePriceForm, pwd, pwd2, setPwd, setPwd2, validPwd, 
                        validPwd2, pwdFocus, setPwdFocus, pwd2Focus, setPwd2Focus, plan, setPlan, phone, setPhone, validPhone, phoneFocus, 
                        setPhoneFocus, validFname, validLname, firstname, setFirstname, lastname, setLastname, fnameFocus, setFnameFocus, 
                        lnameFocus, setLnameFocus, company, setCompany, validComp, setCompFocus, compFocus, success, err, msg, priceBtn}) {
  return ( 
    <div className="main-content-wrap">
        <section id="intro-wrap" className="intro-nine-Wrap bg-primary text-left text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 intro-nine-LeftSection pb-3">
                        <h1 className="font-weight-bold text-white text-42 mb-3 t-shadow">Let's Start And Grow Your Business Together.</h1>
                        <p className="text-20 mb-4">Our platform enhances your business by utilizing digital data for higher reattribution and retention.</p>
                        <div className="mb-5 lead">
                            <ul className="list-inline">
                                <li className="mb-3"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>Customized User Friendly And Responsive Design.
                                </li>
                                <li className="mb-3"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>
                                    Data Analytics And Reporting
                                </li>
                                <li className="mb-3"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>
                                    Digital Marketing And Promotions</li>
                            </ul>
                        </div>
                        <div className="intro-nine-Buttons">
                            <a href="https://bizone.vercel.app/auth/login" className="btn half-button btn-outline-white btn-lg pl-5 pr-5 pb-2 mr-2 mb-4 text-uppercase" role="button">Sign In</a>
                            <a href="#pricing-wrap" className="scroll-to btn half-button btn-warning btn-lg pl-5 pr-5 pb-2 mb-4 text-uppercase" role="button">Pricing</a>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-1 intro-nine-RightSection d-flex align-items-center">
                        <div className="intro-nine-ProductImage">
                            <img src="../assets/images/landing/svg/v2-header.svg" className="img-responsive" alt="img-intro" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
        </section>

        <section id="features-wrap" className="features_wrap p-t-b-80">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 section-header mb-5">
                        <h2 className="font-weight-bold">Features</h2>
                        <p>Some exquisite features that improve interactivity and website optimisation. Here are a few:</p>
                    </div>

                    <div className="col-md-12 col-lg-6 col-sm-12 mb-4 mb-lg-0">
                        <div className="row">
                            <div data-aos="fade-right" className="col-md-6 col-sm-6 mb-4">
                                <div className="card">
                                    <div className="card-body pt-4 pb-4 text-center">
                                        <i className="eva eva-options-2-outline text-36"></i>
                                        <h4 className="card-title pt-2 font-weight-medium">SEO</h4>
                                        <p>Expand your reach with the right keywords.</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="col-md-6 col-sm-6 mb-4">
                                <div className="card">
                                    <div className="card-body pt-4 pb-4 text-center">
                                        <i className="eva eva-activity-outline text-36"></i>
                                        <h4 className="card-title pt-2 font-weight-medium">Analytics</h4>
                                        <p>Metrics that help you take informed decisions.</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="col-md-6 col-sm-6 mb-4 mb-lg-0 mb-md-0">
                                <div className="card">
                                    <div className="card-body pt-4 pb-4 text-center">
                                        <i className="eva eva-email-outline text-36"></i>
                                        <h4 className="card-title pt-2 font-weight-medium">Newsletter</h4>
                                        <p>Increased engagement leads to increased conversion.</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="col-md-6 col-sm-6 mb-4 mb-lg-0 mb-md-0">
                                <div className="card">
                                    <div className="card-body pt-4 pb-4 text-center">
                                        <i className="eva eva-smartphone-outline text-36"></i>
                                        <h4 className="card-title pt-2 font-weight-medium">Responsive</h4>
                                        <p>Well adapted for user's convenience across devices.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-5 offset-lg-1 d-flex align-items-center">
                        <img data-aos="fade-left" src="../assets/images/landing/svg/features2.svg" className="img-responsive w-100" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section id="services-wrap" className="services-caurosel-wrap light-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 section-header mb-5">
                        <h2 className="font-weight-bold">Our Services</h2>
                        <p>We offer a range of digital services all tailored  to meet your brand objectives.</p>
                    </div>
                            {services.map((item, index) => (
                               <div className="col-md-6 col-lg-4 mt-4 mb-4" key={index}>
                                   <div className="card service-three--hover o-hidden">
                                        <div className="card-header p-0">
                                            <img className="img-fluid" src={item.image} alt="" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title font-weight-bold">{item.name}</h5>
                                            <p className="card-text" dangerouslySetInnerHTML={{__html:item.description}}></p>
                                        </div>
                                   </div>
                               </div>
                            ))}
                        </div>
                    </div>
               
        </section>

        <section id="works-wrap" className="work1Wrap">
            <div className="container">
                <div className="row">
                    <div className="section-header col-md-12 mb-5">
                        <h2 className="font-weight-bold"> Recent Works</h2>
                        <p>Check out some of our recent projects.</p>
                    </div>
                    <div data-aos="fade-up" className="col-md-6 col-lg-4 col-sm-6 mb-4">
                        <div className="card o-hidden">
                            <img className="card-img-top" src="../assets/images/landing/products/products9.svg" alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Work one</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of
                                    the card's content.
                                </p>
                            </div>
                            <div className="card-footer pl-3">
                                <a href="landing.v2.html#" className="btn btn-lg p-1 text-dark mr-1"><span className="eva eva-link-2-outline"></span></a>
                                <a href="landing.v2.html#" className="btn btn-lg p-1 text-dark mr-1"><span className="eva eva-share"></span></a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-6 col-lg-4 col-sm-6 mb-4">
                        <div className="card o-hidden">
                            <img className="card-img-top" src="../assets/images/landing/products/products15.svg" alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Work two</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of
                                    the card's content.
                                </p>
                            </div>
                            <div className="card-footer pl-3">
                                <a href="landing.v2.html#" className="btn btn-lg p-1 text-dark mr-1"><span className="eva eva-link-2-outline"></span></a>
                                <a href="landing.v2.html#" className="btn btn-lg p-1 text-dark mr-1"><span className="eva eva-share"></span></a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-6 col-lg-4 col-sm-6 mb-4">
                        <div className="card o-hidden">
                            <img className="card-img-top" src="../assets/images/landing/products/products11.svg" alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Work Three</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of
                                    the card's content.
                                </p>
                            </div>
                            <div className="card-footer pl-3">
                                <a href="landing.v2.html#" className="btn btn-lg p-1 text-dark mr-1"><span className="eva eva-link-2-outline"></span></a>
                                <a href="landing.v2.html#" className="btn btn-lg p-1 text-dark mr-1"><span className="eva eva-share"></span></a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-6 col-lg-4 col-sm-6 mb-lg-0 mb-4">
                        <div className="card o-hidden">
                            <img className="card-img-top" src="../assets/images/landing/products/products12.svg" alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Work Four</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of
                                    the card's content.
                                </p>
                            </div>
                            <div className="card-footer pl-3">
                                <a href="landing.v2.html#" className="btn btn-lg p-1 text-dark mr-1"><span className="eva eva-link-2-outline"></span></a>
                                <a href="landing.v2.html#" className="btn btn-lg p-1 text-dark mr-1"><span className="eva eva-share"></span></a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-6 col-lg-4 col-sm-6 mb-lg-0 mb-md-0 mb-sm-0 mb-4">
                        <div className="card o-hidden">
                            <img className="card-img-top" src="../assets/images/landing/products/products14.svg" alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Work Five</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of
                                    the card's content.
                                </p>
                            </div>
                            <div className="card-footer pl-3">
                                <a href="landing.v2.html#" className="btn btn-lg p-1 text-dark mr-1"><span className="eva eva-link-2-outline"></span></a>
                                <a href="landing.v2.html#" className="btn btn-lg p-1 text-dark mr-1"><span className="eva eva-share"></span></a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-6 col-lg-4 col-sm-6 mb-lg-0 mb-md-0 mb-sm-0">
                        <div className="card o-hidden">
                            <img className="card-img-top" src="../assets/images/landing/products/products17.svg" alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Work Six</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk
                                    of
                                    the card's content.
                                </p>
                            </div>
                            <div className="card-footer pl-3">
                                <a href="landing.v2.html#" className="btn btn-lg p-1 text-dark mr-1"><span className="eva eva-link-2-outline"></span></a>
                                <a href="landing.v2.html#" className="btn btn-lg p-1 text-dark mr-1"><span className="eva eva-share"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="left-image-wrap p-t-b-80 light-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 section-header mb-5">
                        <h2 className="font-weight-bold">Why Choose Us </h2>
                        <p>Our unique powerful CMS is built to collect and analyse user data thereby creating an ecosystem based on customer behaviour.</p>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-5 mb-lg-0 mb-md-0 mt-mb-5">
                        <div className="left-image-carousel">
                            <div>
                                <img alt="Card cap" className="img-responsive w-100 mb-4" src="../assets/images/landing/svg/slider4.svg" />
                            </div>
                            <div>
                                <img alt="Card cap" className="img-responsive w-100 mb-4" src="../assets/images/landing/svg/slider3.svg" />
                            </div>
                            <div>
                                <img alt="Card cap" className="img-responsive w-100 mb-4" src="../assets/images/landing/svg/slider2.svg" />
                            </div>
                        </div>
                        <div className="slick_control_wrap text-center">
                            <button type="button" className="ngu_control_button half-button leftRs btn btn-circle btn-white btn-shadow"><i className="eva eva-chevron-left-outline"></i></button>
                            <button type="button" className="ngu_control_button half-button rightRs btn btn-circle btn-white btn-shadow"><i className="eva eva-chevron-right-outline"></i></button>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-1 col-sm-12">
                        <div className="row">
                            <div data-aos="fade-left" className="col-md-12 col-sm-6 mb-4">
                                <div className="card">
                                    <div className="card-body pt-3 pb-3">
                                        <h4 className="card-title font-weight-bold">Unique design and interactive Interface</h4>
                                        <p className="m-0">Giving your brand the perfect outlook it deserves. Modelled by our expert team of designers based on products and services offered.</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-right" className="col-md-12 col-sm-6 mb-4">
                                <div className="card">
                                    <div className="card-body pt-3 pb-3">
                                        <h4 className="card-title font-weight-bold">Social Media Integration</h4>
                                        <p className="m-0">By leveraging on marketing endpoints provided by social media giants, our CMS allows automated publications to social channels and cross-trafficking of audience.</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="col-md-12 col-sm-6 mb-lg-0 mb-md-0 mb-sm-0">
                                <div className="card">
                                    <div className="card-body pt-3 pb-3">
                                        <h4 className="card-title font-weight-bold">Data Protection and Security</h4>
                                        <p className="m-0">Protecting data generated from our publishing channels  has been adequately provisioned. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="pricing-wrap" className="pricing-two p-t-b-80">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header col-md-12 mb-5">
                            <h2 className="font-weight-bold">Choose Your Plan</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam
                                laborum, ducimus, laboriosam sint dolorum aspernatur libero.</p>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div data-aos="fade-right" data-aos-duration="1800" data-aos-delay="50" className="col-md-6 col-lg-4 mb-4 mb-lg-0 mt-3">
                        <div className="card service-three--hover">
                            <div className="card-body">
                                <p className="text-12 font-weight-700 text-muted mt-3">Basic</p>
                                <h2 className="display-3 font-weight-bold mt-4" style={{fontSize:"2.5rem"}}><span style={{fontSize:"1.5rem", color:"#332e38"}}>₦</span>150,000</h2>
                                <p className="text-muted mt-4">Custom Design</p>
                                <p className="text-muted">Blog Management</p>
                                <p className="text-muted">Newsletter Subscription</p>
                                <p className="text-muted">Maximum of 10 pages</p>
                                <p className="text-muted">Content Management System</p>
                                <p className="text-muted">.com / .com.ng domain (1yr)</p>
                                <p className="text-muted">Cloud hosting service (1yr)</p>
                                <p className="text-muted">Chat Enabled</p>
                                <p className="text-muted">Social Integration</p>
                                <p className="text-muted"><strike>Payment Integration</strike></p>
                                <p className="text-muted"><strike>Commerce Management</strike></p>
                                <p className="text-muted"><strike>Custom Features</strike></p>
                                <button className="btn btn-outline-info mt-4 mb-4" onClick={() => setPlan('Basic')} data-toggle="modal" data-target="#pricingForm">CHOOSE THE PLAN</button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" className="col-md-6 col-lg-4 mb-4 mb-lg-0 mt-3">
                        <div className="card service-three--hover">
                            <div className="card-body">
                                <p className="text-12 font-weight-700 mt-3">Standard</p>
                                <h2 className="display-3 text-success font-weight-bold mt-4" style={{fontSize:"2.5rem"}}><span style={{fontSize:"1.5rem"}}>₦</span>300,000</h2>
                                <p className="text-muted mt-4">Custom Design</p>
                                <p className="text-muted">Blog Management</p>
                                <p className="text-muted">Newsletter Subscription</p>
                                <p className="text-muted">More than 10 pages</p>
                                <p className="text-muted">Content Management System</p>
                                <p className="text-muted">.com / .com.ng domain (1yr)</p>
                                <p className="text-muted">Cloud hosting service (1yr)</p>
                                <p className="text-muted">Chat Enabled</p>
                                <p className="text-muted">Social Integration</p>
                                <p className="text-muted">Payment Integration</p>
                                <p className="text-muted">Commerce Management</p>
                                <p className="text-muted"><strike>Custom Features</strike></p>
                                <button className="btn btn-outline-success mt-4 mb-4" onClick={() => setPlan('Standard')} data-toggle="modal" data-target="#pricingForm">CHOOSE THE PLAN</button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2200" data-aos-delay="150" className="col-md-6 col-lg-4 mb-4 mb-lg-0 mt-3">
                        <div className="card service-three--hover">
                            <div className="card-body">
                                <p className="text-12 font-weight-700 text-muted mt-3">Custom</p>
                                <h2 className="display-3 font-weight-bold mt-4" style={{fontSize:"2.5rem"}}>TBD</h2>
                                <p className="text-muted mt-4">Custom Design</p>
                                <p className="text-muted">Blog Management</p>
                                <p className="text-muted">Newsletter Subscription</p>
                                <p className="text-muted">More than 10 pages</p>
                                <p className="text-muted">Content Management System</p>
                                <p className="text-muted">.com / .com.ng domain (1yr)</p>
                                <p className="text-muted">Cloud hosting service (1yr)</p>
                                <p className="text-muted">Chat Enabled</p>
                                <p className="text-muted">Social Integration</p>
                                <p className="text-muted">Payment Integration</p>
                                <p className="text-muted">Commerce Management</p>
                                <p className="text-muted">Custom Features</p>
                                <button className="btn btn-outline-info mt-4 mb-4" onClick={() => setPlan('Custom')} data-toggle="modal" data-target="#pricingForm">CHOOSE THE PLAN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="testimonials-wrap" className="testimonial-caurosel-wrap p-t-b-80 light-gray">
            <div className="container">
                <div className="row">
                    <div className="section-header col-md-12 mb-5">
                        <h2 className="font-weight-bold">What our customers says</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam
                            aborum,
                            ducimus, laboriosam sint dolorum aspernatur libero.</p>
                    </div>
                    <div className="col-md-12">
                        <div data-aos="fade-up" className="slick-testimonial-carousel-wrap">
                            <div className="card mb-4 p-3 single-testimonial-wrap">
                                <div className="card-body text-left">
                                    <p className="mb-4">Adipisci quas repellat sed. Quasi quaerat aut nam
                                                    possimus
                                                    vitae dignissimos, sapiente est atque tenetur</p>
                                    <div className="test-user-details text-left abs">
                                        <div className="user-img w-20 float-left mr-1">
                                            <img src="../assets/images/landing/faces/15.jpg" className="rounded-circle" alt="User img" />
                                        </div>
                                        <span className="user-name font-weight-bold mt-1 w-75 float-right">Jhone Doe</span>
                                        <span className="user-designation w-75 float-right">Product Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4 p-3 single-testimonial-wrap">
                                <div className="card-body text-left">
                                    <p className="mb-4">Adipisci quas repellat sed. Quasi quaerat aut nam
                                                    possimus
                                                    vitae dignissimos, sapiente est atque tenetur</p>
                                    <div className="test-user-details text-left abs">
                                        <div className="user-img w-20 float-left mr-1">
                                            <img src="../assets/images/landing/faces/2.jpg" className="rounded-circle" alt="" />
                                        </div>
                                        <span className="user-name font-weight-bold mt-1 w-75 float-right">Alex Dan</span>
                                        <span className="user-designation w-75 float-right">Creative Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4 p-3 single-testimonial-wrap">
                                <div className="card-body">
                                    <p className="mb-4">Adipisci quas repellat sed. Quasi quaerat aut nam
                                                    possimus
                                                    vitae dignissimos, sapiente est atque tenetur</p>
                                    <div className="test-user-details text-left abs">
                                        <div className="user-img w-20 float-left mr-1">
                                            <img src="../assets/images/landing/faces/3.jpg" className="rounded-circle" alt="" />
                                        </div>
                                        <span className="user-name font-weight-bold mt-1 w-75 float-right">Smith Doe</span>
                                        <span className="user-designation w-75 float-right">Assistant Director</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4 p-3 single-testimonial-wrap">
                                <div className="card-body">
                                    <p className="mb-4">Adipisci quas repellat sed. Quasi quaerat aut nam
                                                    possimus
                                                    vitae dignissimos, sapiente est atque tenetur</p>
                                    <div className="test-user-details text-left abs">
                                        <div className="user-img w-20 float-left mr-1">
                                            <img src="../assets/images/landing/faces/5.jpg" className="rounded-circle" alt="" />
                                        </div>
                                        <span className="user-name font-weight-bold mt-1 w-75 float-right">Micheal Clark</span>
                                        <span className="user-designation w-75 float-right">Marketing Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4 p-3 single-testimonial-wrap">
                                <div className="card-body">
                                    <p className="mb-4">Adipisci quas repellat sed. Quasi quaerat aut nam
                                                    possimus
                                                    vitae dignissimos, sapiente est atque tenetur</p>
                                    <div className="test-user-details text-left abs">
                                        <div className="user-img w-20 float-left mr-1">
                                            <img src="../assets/images/landing/faces/5.jpg" className="rounded-circle" alt="" />
                                        </div>
                                        <span className="user-name font-weight-bold mt-1 w-75 float-right">Micheal Clark</span>
                                        <span className="user-designation w-75 float-right">Marketing Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4 p-3 single-testimonial-wrap">
                                <div className="card-body">
                                    <p className="mb-4">Adipisci quas repellat sed. Quasi quaerat aut nam
                                                    possimus
                                                    vitae dignissimos, sapiente est atque tenetur</p>
                                    <div className="test-user-details text-left abs">
                                        <div className="user-img w-20 float-left mr-1">
                                            <img src="../assets/images/landing/faces/5.jpg" className="rounded-circle" alt="" />
                                        </div>
                                        <span className="user-name font-weight-bold mt-1 w-75 float-right">Micheal Clark</span>
                                        <span className="user-designation w-75 float-right">Marketing Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4 p-3 single-testimonial-wrap">
                                <div className="card-body">
                                    <p className="mb-4">Adipisci quas repellat sed. Quasi quaerat aut nam
                                                    possimus
                                                    vitae dignissimos, sapiente est atque tenetur</p>
                                    <div className="test-user-details text-left abs">
                                        <div className="user-img w-20 float-left mr-1">
                                            <img src="../assets/images/landing/faces/5.jpg" className="rounded-circle" alt="" />
                                        </div>
                                        <span className="user-name font-weight-bold mt-1 w-75 float-right">Micheal Clark</span>
                                        <span className="user-designation w-75 float-right">Marketing Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="faqs-wrap p-t-b-80" id="faqs-wrap">
            <div className="container">
                <div className="row"></div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 mb-4 mb-lg-0 mb-md-0 mb-4">
                        <div className="section-header mb-5">
                            <h2 className="font-weight-bold">Faqs</h2>
                            <p>Frequently asked questions.</p>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="card ul-card__border-radius">
                                <div className="card-header">
                                    <h6 className="card-title mb-0">
                                        <a data-toggle="collapse" className="text-default" href="#accordion-item-group1">How long will it take to develop and launch my website?</a>
                                    </h6>
                                </div>
                                <div id="accordion-item-group1" className="collapse show" data-parent="#accordionExample">
                                    <div className="card-body">
                                        It will take 2 weeks (14 working days) after design is approved by client. This timeline applies to basic plan.
                                        However, Standard custom plan may take longer time. In this case, The timeline will be communicated with the client.
                                    </div>
                                </div>
                            </div>

                            <div className="card ul-card__border-radius">
                                <div className="card-header">
                                    <h6 className="card-title mb-0">
                                        <a className="collapsed text-default" data-toggle="collapse" href="#accordion-item-group2">What do I have to provide?</a>
                                    </h6>
                                </div>

                                <div id="accordion-item-group2" className="collapse" data-parent="#accordionExample">
                                    <div className="card-body">
                                        An agent will provide a form where you will required to provide information about your business. 
                                        This will be translated to design. Your approval will be sort before the implemenation commences.
                                    </div>
                                </div>
                            </div>

                            <div className="card ul-card__border-radius">
                                <div className="card-header">
                                    <h6 className="card-title mb-0">
                                        <a className="collapsed text-default" data-toggle="collapse" href="#accordion-item-default3">Will I be able to make changes to my website?</a>
                                    </h6>
                                </div>

                                <div id="accordion-item-default3" className="collapse" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Yes. Our CMS provides for changing both static and dynamic contents on your webiste. We will however support you should you require technical support.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="col-md-5 offset-md-1 col-sm-12 d-flex align-items-center">
                        <img src="../assets/images/landing/svg/faqs2.svg" className="img-responsive w-100" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section id="contacts-wrap" className="contact-form-wrap light-gray p-t-b-80">
            <div className="container">
                <div className="row">
                    <div data-aos="fade-right" className="form-wrap col-md-6 mb-4">
                        <div className="section-header mb-5">
                            <h2 className="font-weight-bold">Get in Touch With Us !</h2>
                            <p>We'd love to hear from you.</p>
                        </div>
                        {/* {status === false && <div  className="alert alert-success alert-dismissible fade show" role="alert">
                            <button type="button" className="close" onClick={alertClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <strong>{message}</strong>
                        </div>} */}
                        { (status || error) && <div className={status ? "alert alert-success" : "alert alert-danger"} role="alert">{message}
                            <button className="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>}
                        
                        <form className="row form">
                            <div className="form-group mb-4 col-md-6">
                                <label htmlFor=""><i className="eva eva-person-outline"></i></label>
                                <input type="text" name="sender"  className="form-control" placeholder="Your Name" required onChange={handleChange} value={formValues.sender} />
                            </div>
                            <div className="form-group mb-4 col-md-6">
                                <label htmlFor=""><i className="eva eva-email-outline"></i></label>
                                <input type="email" required name="email" className="form-control" placeholder="Your email" onChange={handleChange} value={formValues.email} />
                            </div>
                            <div className="form-group mb-4 col-md-6">
                                <label htmlFor=""><i className="eva eva-list-outline"></i></label>
                                <select className="special-select" onChange={handleCategory}>
                                    <option style={{"color":"#bbb", "opacity":"1"}}>Department</option>
                                    {units.map((item, index) => (
                                        <option key={index} value={item._id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group mb-4 col-md-6">
                                <label htmlFor=""><i className="eva eva-edit-2-outline"></i></label>
                                <input type="text" required name="subject" className="form-control" placeholder="Your subject here" onChange={handleChange} value={formValues.subject} />
                            </div>
                            <div className="form-group mb-4 col-md-12">
                                <label htmlFor=""><i className="eva eva-edit-outline"></i></label>
                                <textarea className="form-control" placeholder="Your message here" required name="message" rows="5" onChange={handleChange} value={formValues.message}></textarea>
                            </div>
                            <div className="form-group col-md-12">
                                <button type="submit" disabled={validateForm} className="btn btn-block half-button form-submit-button btn-large btn-gradient" onClick={onSubmit}>{contactBtn}</button>
                            </div>
                        </form>
                    </div>
                    <div data-aos="fade-left" className="col-md-6 align-items-center">
                        <div className="right-contact-wrap ml-5">
                            <img src="../assets/images/landing/svg/contact2.svg" className="img-responsive zoom-fade" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="flex-grow-1"></div>
        <section id="subscribe-wrap" className="subscribe p-t-b-80">
            <div className="container">
                <div className="row text-center">
                    <div data-aos="fade-up" className="col-md-12">
                        <div className="subscribe-1">
                            <div className="card">
                                <div className="card-body">
                                    <div className="subscribe-1__start mt-5 mb-5">
                                        <h2 className="heading mb-5">Join Our Mailing List</h2>
                                        <div className="subscribe-input">
                                            <form className="form-inline justify-content-center">
                                                <div className="form-group">
                                                    <input type="email" className="form-control dexam-input h-55" placeholder="Enter your email address" required="" />
                                                </div>
                                                <button type="submit" className="btn btn-gradient h-55 text-19">Subscribe Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="footer_wrap" id="footer-wrap">
            <div className="container">
                <div className="row">
                    <div data-aos="fade-up" className="col-md-3 mb-4">
                        <div className="o-hidden text-left">
                            <div className="">
                                <h4 className="card-title font-weight-bold">About</h4>
                                <p className="">HubIT CMS is a data aggregator that is designed to enhance business growth
                                through data analytics and information mapping. Designed to utilize data to the fullest potential.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-3 mb-4 mb-lg-0 mb-md-0">
                        <div className="o-hidden text-left">
                            <div className="">
                                <h4 className="card-title font-weight-bold">Features</h4>
                                <div className="mb-5 lead">
                                    <ul className="list-inline">
                                        <li className="mb-3"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>Newsletter
                                        </li>
                                        <li className="mb-3"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>Campaigns
                                        </li>
                                        <li className="mb-3"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>Analytic Reporting</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-3 mb-4">
                        <div className="o-hidden text-left">
                            <div className="">
                                <h4 className="card-title font-weight-bold">Useful Links</h4>
                                <div className="mb-5 lead">
                                    <ul className="list-inline">
                                        <li className="mb-3"> <a href="landing.v2.html#">Become a Refferal</a></li>
                                        <li className="mb-3"><a href="landing.v2.html#">Privacy Policy</a></li>
                                        <li className="mb-3"> <a href="landing.v2.html#"> Terms and Conditions</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div data-aos="fade-up" className="col-md-3 mb-lg-0 mb-md-0">
                        <div className="o-hidden text-left">
                            <div className="">
                                <h4 className="card-title font-weight-bold">Contact Info</h4>
                                <div className="address-wrap mb-3">
                                    <ul className="list-group list-unstyled">
                                        <li className=""> <i className="eva eva-pin-outline mr-2"></i>42, Mende Street, Maryland</li>
                                    </ul>
                                </div>
                                <div className="address-wrap mb-3">
                                    <ul className="list-group list-unstyled">
                                        <li className=""><i className="eva eva-email-outline mr-2"></i>hubitcms@gmail.com</li>
                                    </ul>
                                </div>
                                <div className="address-wrap mb-3">
                                    <ul className="list-group list-unstyled">
                                        <li className=""><i className="eva eva-phone-call-outline mr-2"></i>+2347065304335</li>
                                    </ul>
                                </div>
                                {/* <section className="social-wrap">
                                    <div className="social-btns-wrap">
                                        <a className="social-btn text-30 facebook ml-0" href="landing.v2.html#"><i className="eva eva-facebook"></i></a>
                                        <a className="social-btn text-30 twitter" href="landing.v2.html#"><i className="eva eva-twitter"></i></a>
                                        <a className="social-btn text-30 google" href="landing.v2.html#"><i className="eva eva-google"></i></a>
                                    </div>
                                </section> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="modal fade" id="pricingForm" tabIndex="-1" role="dialog" aria-labelledby="pricingForm" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="verifyModalContent_title">Sign Up for {plan} Plan</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <p>Fill the form below to kick start your registration. All fields are required.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="recipient-name-2" className="col-form-label">First Name:</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            value={firstname}
                                            onChange={(e) => {setFirstname(e.target.value)}}
                                            aria-invalid={validFname ? false : true}
                                            aria-describedby='fnameErr'
                                            onFocus={() => setFnameFocus(true)}
                                            onBlur={() => {setFnameFocus(false)}}
                                        />
                                    </div>
                                    <div id="fnameErr" className={fnameFocus && !validFname ? "feedback-invalid" : "offscreen"}>
                                        First Name is required
                                    </div>
                                </div> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="recipient-name-2" className="col-form-label">Last Name:</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            value={lastname}
                                            onChange={(e) => {setLastname(e.target.value)}}
                                            aria-invalid={validLname? false : true}
                                            aria-describedby='lnameErr'
                                            onFocus={() => setLnameFocus(true)}
                                            onBlur={() => {setLnameFocus(false)}}
                                        />
                                    </div>
                                    <div id="lnameErr" className={lnameFocus && !validFname ? "feedback-invalid" : "offscreen"}>
                                        Last Name is required
                                    </div>
                                </div> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="email" className="col-form-label">Email:</label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            autoComplete='off'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            aria-invalid={validEmail ? false : true}
                                            aria-describedby='emailError'
                                            onFocus={() => setEmailFocus(true)}
                                            onBlur={() => setEmailFocus(false)}
                                        />
                                    </div>
                                    <div id="emailError" className={emailFocus && !validEmail ? "feedback-invalid" : "offscreen"}>
                                        must be a valid email.
                                    </div>
                                </div> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="recipient-name-2" className="col-form-label">Phone Number:</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            autoComplete='off'
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            aria-invalid={validPhone ? false : true}
                                            aria-describedby='phoneError'
                                            onFocus={() => setPhoneFocus(true)}
                                            onBlur={() => setPhoneFocus(false)}
                                        />
                                    </div>
                                    <div id="phoneError" className={phoneFocus && !validPhone ? "feedback-invalid" : "offscreen"}>
                                        only numbers are allowed.
                                    </div>
                                </div> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="company" className="col-form-label">Company Name:</label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            autoComplete='off'
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            aria-invalid={compFocus ? false : true}
                                            aria-describedby='compErr'
                                            onFocus={() => setCompFocus(true)}
                                            onBlur={() => setCompFocus(false)}
                                        />
                                    </div>
                                    <div id="compErr" className={compFocus && !validComp ? "feedback-invalid" : "offscreen"}>
                                        company Name is required.
                                    </div>
                                </div> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="plan" className="col-form-label">Plan:</label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            value={plan}
                                            disabled
                                        />
                                    </div>
                                </div> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="password" className="col-form-label">Password:</label>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            value={pwd}
                                            onChange={(e) => setPwd(e.target.value)}
                                            aria-invalid={validPwd ? false : true}
                                            aria-describedby='pwdErr'
                                            onFocus={() => setPwdFocus(true)}
                                            onBlur={() => setPwdFocus(false)}
                                        />
                                    </div>
                                    <div id="pwdErr" className={pwdFocus && !validPwd ? "feedback-invalid" : "offscreen"}>
                                        must be atleast 8 characters.<br /> must include uppcase and lowercase letters, number and special character.
                                    </div>
                                </div> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="password-2" className="col-form-label">Confirm Password:</label>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            value={pwd2}
                                            onChange={(e) => setPwd2(e.target.value)}
                                            aria-invalid={validPwd2 ? false : true}
                                            aria-describedby='pwd2Err'
                                            onFocus={() => setPwd2Focus(true)}
                                            onBlur={() => setPwd2Focus(false)}
                                        />
                                    </div>
                                    <div id="pwd2Err" className={pwd2Focus && !validPwd2 ? "feedback-invalid" : "offscreen"}>
                                        passwords must be a match
                                    </div>
                                </div> 
                            </div>                                  
                        </form>
                    </div>
                    <div className="modal-footer" style={{"display":"flex", "alignItems":"baseline", "flexDirection":"row-reverse", "alignContent":"stretch", "justifyContent":"flex-end","flexWrap":"wrap"}}>
                        {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                        {(success || err )&& <div className={ success ? "alert alert-success ml-2" : "alert alert-danger ml-2"}  role="alert" style={{"fontSize":"0.813rem", "padding":"0.375rem 0.75rem","borderRadius":"0.25rem", "float":"right"}}>{msg}
                            <button className="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>}
                        <button type="submit" disabled={!validFname || !validLname || !validEmail || !validPhone || !validComp || !validPwd ? true : false} className="btn btn-primary" onClick={handlePriceForm}>{priceBtn}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>   
    
    
  )
}

export default LandingLayout