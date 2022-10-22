export default function Home() {
  return (
    <div>
      <div>
        {/* Start Switcher */}
        <div className="switcher-wrapper">
          <div className="demo_changer">
            <div className="demo-icon customBgColor">
              <i className="fa fa-cog fa-spin fa-2x" />
            </div>
            <div className="form_holder">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="predefined_styles">
                    <div className="skin-theme-switcher">
                      <h4>Color</h4>
                      <a
                        href="#"
                        data-switchcolor="blue"
                        className="styleswitch"
                        style={{ backgroundColor: "#3f73d1" }}
                      ></a>
                      <a
                        href="#"
                        data-switchcolor="pink"
                        className="styleswitch"
                        style={{ backgroundColor: "#FF2761" }}
                      ></a>
                      <a
                        href="#"
                        data-switchcolor="orange"
                        className="styleswitch"
                        style={{ backgroundColor: "#dd6b1f" }}
                      ></a>
                      <a
                        href="#"
                        data-switchcolor="green"
                        className="styleswitch"
                        style={{ backgroundColor: "#2dcc70" }}
                      ></a>
                      <a
                        href="#"
                        data-switchcolor="red"
                        className="styleswitch"
                        style={{ backgroundColor: "#de302f" }}
                      ></a>
                      <a
                        href="#"
                        data-switchcolor="purple"
                        className="styleswitch"
                        style={{ backgroundColor: "#6054c2" }}
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Switcher */}
        {/* Header */}

        {/* /Header */}
        {/* Intro */}
        <section id="intro" className="parallex-bg">
          <div className="container">
            <div className="intro_wrap">
              <div className="intro_text white-text">
                <h1 className="text-dark">Learn &amp; Your Knowledge</h1>
                <p className="text-dark">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
                <a href="#" className="btn dark_btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* /Intro */}
        {/* About-us */}
        <section id="about" className="section-padding">
          <div className="container">
            <div className="section-header heading_style1 text-center">
              <h2 style={{ textTransform: "uppercase" }}>About Us</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "400px" }}
                >
                  <p>
                    Web Touch LTD is a trusted software company in Bangladesh.
                    We provide international standard IT services about software
                    & web development, web design, graphics design & any online
                    solutions. We work to digitize your creative mind. We deals
                    with the whole website and software development processes.
                    Our developed software provides great value for small to
                    large businesses. Our website acts as the best dynamic
                    website as per the client&rsquo requirements. Our company
                    provides static & dynamic websites for schools, colleges,
                    Universities, Superstores, Businesses, Real states, and all
                    kinds of customized websites. Specially we build E-commerce
                    websites with all cutting edge technology.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img src="assets/images/about_img.jpg" alt="image" />
              </div>
            </div>
          </div>
        </section>
        {/* /About-us */}
        {/* Video-presentation */}

        {/* /Video-presentation */}
        {/* Services */}
        <section id="services" className="section-padding">
          <div className="container">
            <div className="section-header heading_style1 text-center">
              <h2>OUR EXPERT SERVICES</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae.
              </p>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="service_box">
                  <div className="service_img">
                    <img src="assets/images/service_img1.jpg" alt="image" />
                  </div>
                  <div className="service_info text-center">
                    <div className="service_icon">
                      <i className="fa fa-cubes" />
                    </div>
                    <a href="#">
                      <h5>Web Development</h5>
                    </a>
                    <p>
                      Reference site about Lorem Ipsum, giving information on
                      its origins, as well as a random Lipsum generator.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="service_box">
                  <div className="service_img">
                    <img src="assets/images/service_img2.jpg" alt="image" />
                  </div>
                  <div className="service_info text-center">
                    <div className="service_icon">
                      <i className="fa fa-paint-brush" />
                    </div>
                    <a href="#">
                      <h5>Software Development</h5>
                    </a>
                    <p>
                      Reference site about Lorem Ipsum, giving information on
                      its origins, as well as a random Lipsum generator.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="service_box">
                  <div className="service_img">
                    <img src="assets/images/service_img3.jpg" alt="image" />
                  </div>
                  <div className="service_info text-center">
                    <div className="service_icon">
                      <i className="fa fa-object-group" />
                    </div>
                    <a href="#">
                      <h5 className="w-100"> Mobile App Development</h5>
                    </a>
                    <p>
                      Reference site about Lorem Ipsum, giving information on
                      its origins, as well as a random Lipsum generator.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="service_box">
                  <div className="service_img">
                    <img src="assets/images/service_img3.jpg" alt="image" />
                  </div>
                  <div className="service_info text-center">
                    <div className="service_icon">
                      <i className="fa fa-object-group" />
                    </div>
                    <a href="#">
                      <h5 className="w-100">Graphics Design</h5>
                    </a>
                    <p>
                      Reference site about Lorem Ipsum, giving information on
                      its origins, as well as a random Lipsum generator.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="video-presentation" className="section-padding gray_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="video">
                  <div className="dark-overlay" />
                  <img src="assets/images/video_poster.jpg" alt="image" />
                  <span className="video-play">
                    <a
                      href="https://vimeo.com/21294655"
                      className="popup-vimeo"
                    >
                      <i className="fa fa-play-circle" aria-hidden="true" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <h6 className="text-center">WHY CHOOSE US?</h6>
                <h6 className="text-center">
                  OUR RESULT SPEAKS FOR THEMSELVES
                </h6>
                <p>
                  Web Touch LTD is a Software and Website Development Company in
                  Bangladesh that offers noticeable types of assistance for our
                  important clients until their fulfillment. Our experienced
                  developers make your concern a lot more straightforward and
                  track down a simple method for giving a superior solution. Our
                  team members are working hard to give you the best solutions.
                  <br />
                </p>
                <p>
                  1. Experience: Our team members are enough experienced to
                  understand your need that ensures the quality of services.{" "}
                  <br /> 2. Working Environment: We have a great environment for
                  teamwork where our developers developed every project
                  maintaining the SDLC. <br />
                  3. Commitment: We believed in commitment. We work to the
                  client&rsquo satisfaction and deliver our services in time. We
                  also give after-sales support if you face any problems with
                  the project.
                </p>
                <a href="#" className="btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* /Services */}
        {/* Fan-facts */}
        <section id="" className="section-padding gray_bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="icon_div">
                  <i className="fa fa-heart-o" />
                </div>
                <h2>1500+</h2>
                <h6>Our Projects </h6>
              </div>
              <div className="col-sm-4">
                <div className="icon_div">
                  <i className="fa fa-users" />
                </div>
                <h2>1000+</h2>
                <h6>Happy Clients </h6>
              </div>
              <div className="col-sm-4">
                <div className="icon_div">
                  <i className="fa fa-trophy" />
                </div>
                <h2>50+</h2>
                <h6>Win awards</h6>
              </div>
            </div>
          </div>
        </section>
        {/* /Fan-facts */}
        {/* Portfolio */}

        {/* <section id="portfolio" className="section-padding">
          <div className="container">
            <div className="section-header heading_style1 text-center">
              <h2>Our creative portfolio</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae.
              </p>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="portfolio-tab">
                  <ul className="filter">
                    <li className="active">
                      <a href="#" data-filter="*">
                        All Projects
                      </a>
                    </li>
                    <li>
                      <a href="#" data-filter=".branding">
                        Branding
                      </a>
                    </li>
                    <li>
                      <a href="#" data-filter=".illustrations">
                        Illustrations
                      </a>
                    </li>
                    <li>
                      <a href="#" data-filter=".packaging">
                        Packaging
                      </a>
                    </li>
                    <li>
                      <a href="#" data-filter=".printing">
                        Printing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row js-iso">
              <div className="col-lg-4 col-sm-4 col-xs-12 mb-4 px-15 mb-lg-0 js-iso-item portfolio-item illustrations printing">
                <div className="portfolio_wrap">
                  <div className="zoom-gallery">
                    <a
                      href="assets/images/portfolio_1.jpg"
                      className="image-popup-link"
                    >
                      <div className="portfolio_plus_small" />
                      <img src="assets/images/portfolio_1.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="portfolio_info">
                    <div className="border-line" />
                    <a href="#">
                      <h5>Juice Bottle Packaging</h5>
                    </a>
                    <div className="portfolio_cate">
                      <a href="#">Illustrations</a> <a href="#">Packaging</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-12 mb-4 px-15 mb-lg-0 js-iso-item portfolio-item branding packaging">
                <div className="portfolio_wrap">
                  <div className="zoom-gallery">
                    <a
                      href="assets/images/portfolio_2.jpg"
                      className="image-popup-link"
                    >
                      <div className="portfolio_plus_small" />
                      <img src="assets/images/portfolio_2.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="portfolio_info">
                    <div className="border-line" />
                    <a href="#">
                      <h5>Juice Bottle Packaging</h5>
                    </a>
                    <div className="portfolio_cate">
                      <a href="#">Illustrations</a> <a href="#">Packaging</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-12 mb-4 px-15 mb-lg-0 js-iso-item portfolio-item  printing branding">
                <div className="portfolio_wrap">
                  <div className="zoom-gallery">
                    <a
                      href="assets/images/portfolio_3.jpg"
                      className="image-popup-link"
                    >
                      <div className="portfolio_plus_small" />
                      <img src="assets/images/portfolio_3.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="portfolio_info">
                    <div className="border-line" />
                    <a href="#">
                      <h5>Juice Bottle Packaging</h5>
                    </a>
                    <div className="portfolio_cate">
                      <a href="#">Illustrations</a> <a href="#">Packaging</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-12 mb-4 px-15 mb-lg-0 js-iso-item portfolio-item packaging illustrations">
                <div className="portfolio_wrap">
                  <div className="zoom-gallery">
                    <a
                      href="assets/images/portfolio_4.jpg"
                      className="image-popup-link"
                    >
                      <div className="portfolio_plus_small" />
                      <img src="assets/images/portfolio_4.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="portfolio_info">
                    <div className="border-line" />
                    <a href="#">
                      <h5>Juice Bottle Packaging</h5>
                    </a>
                    <div className="portfolio_cate">
                      <a href="#">Illustrations</a> <a href="#">Packaging</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-12 mb-4 px-15 mb-lg-0 js-iso-item portfolio-item  illustrations printing">
                <div className="portfolio_wrap">
                  <div className="zoom-gallery">
                    <a
                      href="assets/images/portfolio_5.jpg"
                      className="image-popup-link"
                    >
                      <div className="portfolio_plus_small" />
                      <img src="assets/images/portfolio_5.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="portfolio_info">
                    <div className="border-line" />
                    <a href="#">
                      <h5>Juice Bottle Packaging</h5>
                    </a>
                    <div className="portfolio_cate">
                      <a href="#">Illustrations</a> <a href="#">Packaging</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-12 mb-4 px-15 mb-lg-0 js-iso-item portfolio-item packaging branding">
                <div className="portfolio_wrap">
                  <div className="zoom-gallery">
                    <a
                      href="assets/images/portfolio_6.jpg"
                      className="image-popup-link"
                    >
                      <div className="portfolio_plus_small" />
                      <img src="assets/images/portfolio_6.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="portfolio_info">
                    <div className="border-line" />
                    <a href="#">
                      <h5>Juice Bottle Packaging</h5>
                    </a>
                    <div className="portfolio_cate">
                      <a href="#">Illustrations</a> <a href="#">Packaging</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* /Portfolio */}
        {/* Testimonials */}

        {/* /Testimonials */}
        {/* Clients */}
        <section id="contact" className="section-padding">
          <div className="container">
            <div className="section-header heading_style1 text-center">
              <h2>GET STARTED TODAY</h2>
              <p>Open account for free & begin your new adventure with us.</p>
              <button className="btn btn-outline-danger mt-5">
                REGISTER NOW
              </button>
            </div>
            {/* <div className="logo_wrap">
              <a href="#">
                <img src="assets/images/client_logo1.png" alt="image" />
              </a>
              <a href="#">
                <img src="assets/images/client_logo2.png" alt="image" />
              </a>
              <a href="#">
                <img src="assets/images/client_logo3.png" alt="image" />
              </a>
              <a href="#">
                <img src="assets/images/client_logo4.png" alt="image" />
              </a>
            </div> */}
          </div>
        </section>
        {/* /Clients */}
        {/* Footer */}
      </div>
    </div>
  );
}
