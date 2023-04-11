// import "./css2/bootstrap.min.css"
// import "./css2/animate.css"
// import "./css2/LineIcons.css"
// import "./css2/owl.carousel.css"
// import "./css2/owl.theme.css"
// import "./css2/magnific-popup.css"
// import "./css2/nivo-lightbox.css"
// import "./css2/main2.css"    
// import "./css2/responsive.css"
import logo from "./img/logo.png"
import intro from "./img/intro.png"

// js import

    // import "./js/jquery-min.js"
    // import "./js/popper.min.js"
    // import "./js/bootstrap.min.js"
    // import "./js/owl.carousel.js"      
    // import "./js/jquery.nav.js"    
    // import "./js/scrolling-nav.js"    
    // import "./js/scrolling-nav.js"    
    // import "./js/jquery.easing.min.js"     
    // import "./js/nivo-lightbox.js"     
    // import "./js/jquery.magnific-popup.min.js"     
    // // import "./js/form-validator.min.js"
    // // import "./js/contact-form-script.js"   
    // import "./js/main.js"
const LandPage = ()=>{
    return(
       
            <body>
            <header id="home" class="hero-area ">    
      <div className="overlay">
        <span></span>
        <span></span>
      </div>
      <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
        <div className="container">
          <a href="index.html" className="navbar-brand"><img src={logo} alt=""/></a>       
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <i className="lni-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#services">About</a>
              </li>  
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#features">Services</a>
              </li>                            
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#showcase">Showcase</a>
              </li>       
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#pricing">Pricing</a>
              </li>     
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#team">Team</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#blog">Blog</a>
              </li>  
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#contact">Contact</a>
              </li> 
              <li className="nav-item">
                <a className="btn btn-singin" href="#">Download</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>  
      <div className="container">      
        <div className="row space-100">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="contents">
              <h2 className="head-title">You are Using Free Lite Version</h2>
              <p>Please, Purchase full version of Slick to get all pages, features and permission to use in commercial projects</p>
              <div className="header-button">
                <a href="https://rebrand.ly/slick-ud" rel="nofollow" target="_blank" className="btn btn-border-filled ">Purchase Now</a>
                <a href="https://rebrand.ly/slick-ud" rel="nofollow" target="_blank" className="btn btn-border page-scroll">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12 p-0">
            <div className="intro-img">
              <img src={intro} alt=""></img>
            </div>            
          </div>
        </div> 
      </div>             
    </header>
    </body>
      
    );
}
export default LandPage;
