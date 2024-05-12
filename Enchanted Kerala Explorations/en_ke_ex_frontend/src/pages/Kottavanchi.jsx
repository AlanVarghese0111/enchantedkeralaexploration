import React from 'react'
import { Link } from 'react-router-dom'

const Kottavanchi = () => {
  return (
    <div>
        {/* <!-- Topbar Start --> */}
        <div class="container-fluid bg-light pt-3 d-none d-lg-block">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div class="d-inline-flex align-items-center">
                        <p><i class="fa fa-envelope mr-2"></i>naturenest@gmail.com</p>
                        <p class="text-body px-3">|</p>
                        <p><i class="fa fa-phone-alt mr-2"></i>9746172313</p>
                    </div>
                </div>
                <div class="col-lg-6 text-center text-lg-right">
                    <div class="d-inline-flex align-items-center">
                        <a class="text-primary px-3" href="https://www.facebook.com/alan.varghese.5876?mibextid=ZbWKwL">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="text-primary px-3" href="https://www.facebook.com/alan.varghese.5876?mibextid=ZbWKwL">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a class="text-primary px-3" href="https://www.facebook.com/alan.varghese.5876?mibextid=ZbWKwL">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a class="text-primary px-3" href="https://www.instagram.com/alanvarghese__?igsh=MW56MXFsMnUwd2l6cw==">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a class="text-primary pl-3" href="https://www.instagram.com/alanvarghese__?igsh=MW56MXFsMnUwd2l6cw==">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End --> */}


    {/* <!-- Navbar Start --> */}
    <div class="container-fluid position-relative nav-bar p-0">
    <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
    <nav class="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
    <a href="" class="navbar-brand">
        <h1 class="m-0 text-primary"><span class="text-dark">NATURE</span>NEST</h1>
    </a>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
        <div class="navbar-nav ml-auto py-0">
            <Link class="nav-item nav-link" to={'/'}>
                Home
            </Link>
            <Link class="nav-item nav-link" to={'/about'}>
                About
            </Link>
            <Link class="nav-item nav-link" to={'/service'}>
                Services
            </Link>
            
            
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Major Attractions</a>
                <div class="dropdown-menu border-0 rounded-0 m-0">
                <Link  class="dropdown-item" to={'/PeriyarPark'}>
                        Periyar National Park
                    </Link>
                    <Link  class="dropdown-item" to={'/kottavanchi'}>
                        Kottavanchi Safari
                    </Link>
                    <Link  class="dropdown-item" to={'/igloo'}>
                       Igloo Camping 
                    </Link>
                    <Link  class="dropdown-item" to={'/elephant'}>
                         Elephant Safari
                    </Link>
                    <Link  class="dropdown-item" to={'/kalaripayattu'}>
                        Kalaripayattu
                    </Link>
                    <Link  class="dropdown-item" to={'/kathakali'}>
                         Kathakali
                    </Link>
                    <Link  class="dropdown-item" to={'/ayurveda'}>
                        Ayurveda
                    </Link>
                    <Link  class="dropdown-item" to={'/offroad'}>
                        Off-Road Adventures
                    </Link>
                </div>
            </div>
            <Link class="nav-item nav-link" to={'/attractions'}>
                Destination
            </Link>
            <Link class="nav-item nav-link" to={'/contact'}>
                Contact
            </Link>
        </div>
    </div>
</nav>

        </div>
    </div>
    {/* <!-- Navbar End --> */}


    {/* <!-- Header Start --> */}
    <div class="container-fluid page-header">
        <div class="container">
            <div class="d-flex flex-column align-items-center justify-content-center" style={{height: '300px'}}>
                <h3 class="display-4 text-white text-uppercase">Kottavanchi</h3>
                <div class="d-inline-flex text-white">
                    <p class="m-0 text-uppercase"><a class="text-white" href="">Major Attractions</a></p>
                    <i class="fa fa-angle-double-right pt-1 px-3"></i>
                    <p class="m-0 text-uppercase">Kottavanchi</p>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Header End --> */}


    


    {/* <!-- Blog Start --> */}
    <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-8">
                    {/* <!-- Blog Detail Start --> */}
                    <div class="pb-3">
                        <div class="blog-item">
                            <div class="position-relative">
                                <img class="img-fluid w-100" src="assets/img/kottavanchi.jpg" alt=""/>
                            </div>
                        </div>
                        <div class="bg-white mb-3" style={{padding: '30px'}}>
                            <div class="d-flex mb-3">
                                <a class="text-primary text-uppercase text-decoration-none" href="">Admin</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">Tours & Travel</a>
                            </div>
                            <h2 class="mb-3">Into the Wild: Amazing Kottavanchi Safari</h2>
                            <p>Embark on an exhilarating journey through the untamed beauty of Kottavanchi, where lush greenery meets the shimmering shores of the Indian Ocean. Feel the thrill as you venture into the heart of the jungle, surrounded by towering trees and the symphony of wildlife echoing in the air.
                            With each step, anticipation builds as you traverse winding paths that lead to hidden treasures of nature. 
                            </p>
                            <p>Encounter majestic elephants, elusive leopards, and vibrant birdlife as they roam freely in their natural habitat. Your senses will come alive with the sights and sounds of the wilderness, leaving you spellbound at every turn.

As the sun sets, immerse yourself in the magic of the jungle under the starlit sky. Swap tales around a crackling campfire, savoring the flavors of authentic cuisine cooked over open flames. Feel the rhythm of the night as you retire to your cozy tent, lulled to sleep by the gentle lullaby of the wild.</p>
                            {/* <h4 class="mb-3">Est dolor lorem et ea</h4> */}
                            <img class="img-fluid w-50 float-left mr-4 mb-2" src="assets/img/kotta2.jpg"/>
                            <p>A Kottavanchi safari is not just an adventure; it's a transformative experience that connects you to the soul of nature. Discover the beauty, the mystery, and the untamed spirit of Kottavanchi on an unforgettable safari like no other</p>
                            {/* <h5 class="mb-3">Est dolor lorem et ea</h5> */}
                            <img class="img-fluid w-50 float-right ml-4 mb-2" src="assets/img/hornbill.jpg"/>
                            <p>
                            : Apart from wildlife spotting, Kottavanchi safaris may include activities such as guided nature walks, birdwatching, cultural interactions with local communities, and visits to nearby attractions like temples or viewpoints.


                            </p>
                        </div>
                    </div>
                    {/* <!-- Blog Detail End --> */}  
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Blog End --> */}


    {/* <!-- Footer Start --> */}
    <div class="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{margintop: '90px'}}>
        <div class="row pt-5">
            <div class="col-lg-3 col-md-6 mb-5">
                <a href="" class="navbar-brand">
                    <h1 class="text-primary"><span class="text-white">NATURE</span>NEST</h1>
                </a>
                <p>Your passport to uncovering the hidden treasures of Kerala's most captivating destinations. Our customizable tour packages are thoughtfully curated to match your interests, ensuring an extraordinary journey tailored just</p>
                <h6 class="text-white text-uppercase mt-4 mb-3" style={{letterspacing: '5px'}}>Follow Us</h6>
                <div class="d-flex justify-content-start">
                    <a class="btn btn-outline-primary btn-square mr-2" href="https://www.facebook.com/alan.varghese.5876?mibextid=ZbWKwL"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-outline-primary btn-square mr-2" href="https://www.facebook.com/alan.varghese.5876?mibextid=ZbWKwL"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-outline-primary btn-square mr-2" href="https://www.instagram.com/alanvarghese__?igsh=MW56MXFsMnUwd2l6cw=="><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-outline-primary btn-square" href="https://www.instagram.com/alanvarghese__?igsh=MW56MXFsMnUwd2l6cw=="><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h5 class="text-white text-uppercase mb-4" style={{letterspacing: '5px'}}>Our Services</h5>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>About</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Destination</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Services</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Attractions</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Testimonial</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h5 class="text-white text-uppercase mb-4" style={{letterspacing: '5px'}}>Usefull Links</h5>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>About</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Destination</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Services</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Attractions</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Testimonial</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h5 class="text-white text-uppercase mb-4" style={{letterspacing: '5px'}}>Contact Us</h5>
                <p><i class="fa fa-map-marker-alt mr-2"></i>Kerala</p>
                <p><i class="fa fa-phone-alt mr-2"></i>9746172313</p>
                <p><i class="fa fa-envelope mr-2"></i>naturenest@gmail.com</p>
                <h6 class="text-white text-uppercase mt-4 mb-3" style={{letterspacing: '5px'}}>Newsletter</h6>
                <div class="w-100">
                    <div class="input-group">
                        <input type="text" class="form-control border-light" style={{padding: '25px'}} placeholder="Your Email"/>
                        <div class="input-group-append">
                            <button class="btn btn-primary px-3">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{ borderColor: 'rgba(255, 255, 255, 0.1)'}} >
        <div class="row">
            <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                <p class="m-0 text-white-50">Copyright &copy; <a href="#">Domain</a>. All Rights Reserved.
                </p>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}


    {/* <!-- Back to Top --> */}
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="fa fa-angle-double-up"></i></a>
    </div>
  )
}

export default Kottavanchi