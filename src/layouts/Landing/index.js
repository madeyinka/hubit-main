import React from 'react'

function LandingLayout({handleChange, handleCategory, onSubmit, error, message, formValues, units, validateForm, services}) {
  return (
    <div className="main-content-wrap">
        <section id="intro-wrap" className="intro-nine-Wrap bg-primary text-left text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 intro-nine-LeftSection pb-3">
                        <h1 className="font-weight-bold text-white text-42 mb-3 t-shadow">Design and Sell Your
                            Dream Product</h1>
                        <p className="text-20 mb-4">Meet Dexam Highly customizable Pure VueJs + Bootstrap 4
                            Landing
                            Pages. </p>
                        <div className="mb-5 lead">
                            <ul className="list-inline">
                                <li className="mb-3"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>Minimal,
                                    Intuitive and Fully Responsive Design
                                </li>
                                <li className="mb-3"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>
                                    Authentication Pages
                                </li>
                                <li className="mb-3"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>
                                    Super Flexible And Customizable</li>
                            </ul>
                        </div>
                        <div className="intro-nine-Buttons">
                            <a href="/sessions/signin" className="btn half-button btn-outline-white btn-lg pl-5 pr-5 pb-2 mr-2 mb-4 text-uppercase" role="button">Sign in</a>
                            <button className="btn half-button btn-warning btn-lg pl-5 pr-5 pb-2 mb-4 text-uppercase" data-toggle="modal" data-target="#exampleModalLong">Sign up</button>
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
                        <h2 className="font-weight-bold">Our Exciting Features</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam
                            laborum,
                            ducimus, laboriosam sint dolorum aspernatur libero.</p>
                    </div>

                    <div className="col-md-12 col-lg-6 col-sm-12 mb-4 mb-lg-0">
                        <div className="row">
                            <div data-aos="fade-right" className="col-md-6 col-sm-6 mb-4">
                                <div className="card">
                                    <div className="card-body pt-4 pb-4 text-center">
                                        <i className="eva eva-clock-outline text-36"></i>
                                        <h4 className="card-title pt-2 font-weight-medium">Time Tracking</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing .</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="col-md-6 col-sm-6 mb-4">
                                <div className="card">
                                    <div className="card-body pt-4 pb-4 text-center">
                                        <i className="eva eva-shopping-bag-outline text-36"></i>
                                        <h4 className="card-title pt-2 font-weight-medium">Sales Report</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing .</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="col-md-6 col-sm-6 mb-4 mb-lg-0 mb-md-0">
                                <div className="card">
                                    <div className="card-body pt-4 pb-4 text-center">
                                        <i className="eva eva-lock-outline text-36"></i>
                                        <h4 className="card-title pt-2 font-weight-medium">Data Safety</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing .</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="col-md-6 col-sm-6 mb-4 mb-lg-0 mb-md-0">
                                <div className="card">
                                    <div className="card-body pt-4 pb-4 text-center">
                                        <i className="eva eva-people-outline text-36"></i>
                                        <h4 className="card-title pt-2 font-weight-medium">Contracts</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing .</p>
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
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam
                            laborum,
                            ducimus, laboriosam sint dolorum aspernatur libero.</p>
                    </div>
                            {services.map(item => (
                               <div className="col-md-6 col-lg-4 mt-4 mb-4">
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
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam
                            laborum,
                            ducimus, laboriosam sint dolorum aspernatur libero.</p>
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
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam
                            laborum,
                            ducimus, laboriosam sint dolorum aspernatur libero.</p>
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
                                        <h4 className="card-title font-weight-bold">Sales and Marketing
                                            Alignment
                                        </h4>
                                        <p className="m-0">Contrary to popular belief, Lorem Ipsum is not simply
                                            random text. It has roots in a piece of classical Latin
                                            literature
                                            from 45 BC</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-right" className="col-md-12 col-sm-6 mb-4">
                                <div className="card">
                                    <div className="card-body pt-3 pb-3">
                                        <h4 className="card-title font-weight-bold">Relationship-based
                                            Engagement
                                        </h4>
                                        <p className="m-0">Contrary to popular belief, Lorem Ipsum is not simply
                                            random text. It has roots in a piece of classical Latin
                                            literature
                                            from 45 BC</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="col-md-12 col-sm-6 mb-lg-0 mb-md-0 mb-sm-0">
                                <div className="card">
                                    <div className="card-body pt-3 pb-3">
                                        <h4 className="card-title font-weight-bold">Transparent Pricing</h4>
                                        <p className="m-0">Contrary to popular belief, Lorem Ipsum is not simply
                                            random text. It has roots in a piece of classical Latin
                                            literature
                                            from 45 BC</p>
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
                                <p className="text-12 font-weight-700 text-muted mt-3">Personal</p>
                                <h2 className="display-3 font-weight-bold mt-4">$5</h2>
                                <p className="text-muted mt-4">3 Projects</p>
                                <p className="text-mute"><strike>1 Initial Concept Included</strike></p>
                                <p className="text-mute"><strike>Logo Transparency</strike></p>
                                <p className="text-muted">High Resolution</p>
                                <button className="btn btn-outline-info mt-4 mb-4">CHOOSE THE PLAN</button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" className="col-md-6 col-lg-4 mb-4 mb-lg-0 mt-3">
                        <div className="card service-three--hover">
                            <div className="card-body">
                                <p className="text-12 font-weight-700 mt-3">Team</p>
                                <h2 className="display-3 text-success font-weight-bold mt-4">$50</h2>
                                <p className="text-muted mt-4">3 Projects</p>
                                <p className="text-muted">1 Initial Concept Included</p>
                                <p className="text-mute"><strike>Logo Transparency</strike></p>
                                <p className="text-muted">High Resolution</p>
                                <button className="btn btn-outline-success mt-4 mb-4">CHOOSE THE PLAN</button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2200" data-aos-delay="150" className="col-md-6 col-lg-4 mb-4 mb-lg-0 mt-3">
                        <div className="card service-three--hover">
                            <div className="card-body">
                                <p className="text-12 font-weight-700 text-muted mt-3">Business</p>
                                <h2 className="display-3 font-weight-bold mt-4">$80</h2>
                                <p className="text-muted mt-4">3 Projects</p>
                                <p className="text-muted">1 Initial Concept Included</p>
                                <p className="text-muted">Logo Transparency</p>
                                <p className="text-muted">High Resolution</p>
                                <button className="btn btn-outline-info mt-4 mb-4">CHOOSE THE PLAN</button>
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
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam
                                            laborum, ducimus, laboriosam sint dolorum aspernatur libero.</p>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="card ul-card__border-radius">
                                <div className="card-header">
                                    <h6 className="card-title mb-0">
                                        <a data-toggle="collapse" className="text-default" href="#accordion-item-group1">Accordion Item #1</a>
                                    </h6>
                                </div>
                                <div id="accordion-item-group1" className="collapse show" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                        skateboard dolor brunch.
                                    </div>
                                </div>
                            </div>

                            <div className="card ul-card__border-radius">
                                <div className="card-header">
                                    <h6 className="card-title mb-0">
                                        <a className="collapsed text-default" data-toggle="collapse" href="#accordion-item-group2">Accordion Item #2</a>
                                    </h6>
                                </div>

                                <div id="accordion-item-group2" className="collapse" data-parent="#accordionExample">
                                    <div className="card-body">
                                        on cupidatat skateboard dolor brunch. esciunt laborum eiusmod.
                                        Brunch
                                        3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                                        coffee nulla assumenda.
                                    </div>
                                </div>
                            </div>

                            <div className="card ul-card__border-radius">
                                <div className="card-header">
                                    <h6 className="card-title mb-0">
                                        <a className="collapsed text-default" data-toggle="collapse" href="#accordion-item-default3">Accordion Item #3</a>
                                    </h6>
                                </div>

                                <div id="accordion-item-default3" className="collapse" data-parent="#accordionExample">
                                    <div className="card-body">
                                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                        Food
                                        truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                        sunt
                                        aliqua put a bird on it.
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
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam
                                laborum, ducimus, laboriosam sint dolorum aspernatur libero</p>
                        </div>
                        {error === false && <div  className="alert alert-success alert-dismissible fade show" role="alert">
                            <button type="button" className="close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <strong>{message}</strong>
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
                                <select className="form-control" onChange={handleCategory}>
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
                                <button type="submit" disabled={validateForm} className="btn btn-block half-button form-submit-button btn-large btn-gradient" onClick={onSubmit}>Send message</button>
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
                                        <h2 className="heading mb-5">Subscribe to Our Channel</h2>
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
                                <h4 className="card-title font-weight-bold">Dexam</h4>
                                <p className="">Dexam is highly customizable Pure VueJs + bootstrap 4 landing
                                    Page.
                                    Dexam is built with official @vue/cli tool and uses BootstrapVue .
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-3 mb-4">
                        <div className="o-hidden text-left">
                            <div className="">
                                <h4 className="card-title font-weight-bold">Other Pages</h4>
                                <div className="mb-5 lead">
                                    <ul className="list-inline">
                                        <li className="mb-3"> <a href="landing.v2.html#">Marketing</a></li>
                                        <li className="mb-3"><a href="landing.v2.html#">Campaign</a>
                                        </li>
                                        <li className="mb-3"> <a href="landing.v2.html#"> Digital Agency</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-3 mb-4 mb-lg-0 mb-md-0">
                        <div className="o-hidden text-left">
                            <div className="">
                                <h4 className="card-title font-weight-bold">Awesome Features</h4>
                                <div className="mb-5 lead">
                                    <ul className="list-inline">
                                        <li className="mb-3"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>Minimal
                                        </li>
                                        <li className="mb-3"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>Intuitive
                                        </li>
                                        <li className="mb-3"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>Super Flexible</li>
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
                                        <li className=""> <i className="eva eva-pin-outline mr-2"></i>UI-Lib ,United Kingdom</li>
                                    </ul>
                                </div>
                                <div className="address-wrap mb-3">
                                    <ul className="list-group list-unstyled">
                                        <li className=""><i className="eva eva-email-outline mr-2"></i>test@yahoo.com</li>
                                    </ul>
                                </div>
                                <div className="address-wrap mb-3">
                                    <ul className="list-group list-unstyled">
                                        <li className=""><i className="eva eva-phone-call-outline mr-2"></i>+8801961081993</li>
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
    </div>   
    
    
  )
}

export default LandingLayout