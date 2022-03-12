import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ paddingTop: '50px' }}>
            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: "#45526e" }}
            >
                {/* <!-- Grid container --> */}

                <div className="container p-4 pb-0">
                    {/* <!-- Section: Links --> */}
                    <section className="">
                        {/* <!--Grid row--> */}
                        <div className="row">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    <img src="https://lusion.arrowtheme.com/wp-content/uploads/2020/04/logo-default-89x30.png.webp" alt="" />
                                </h6>
                                <p>
                                    We have worked hand-in-hand with a large scale of customers all over the world accomplishing a wide range of industries and services for 10+ years. Each of our work represents our dedication to the quality.
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            <hr className="w-100 clearfix d-md-none" />

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Support</h6>
                                <p>
                                    <a href="http://" className="text-white">Help</a>

                                </p>
                                <p>
                                    <Link to="/contact" className="text-white">Contact Us</Link>
                                </p>
                                <p>
                                    <Link to="/about" className="text-white">About</Link>
                                </p>
                                <p>
                                    <Link to="/blog" className="text-white">Blog</Link>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            <hr className="w-100 clearfix d-md-none" />

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Policies
                                </h6>
                                <p>
                                    <a href="http://" className="text-white">Privacy Policy</a>
                                </p>
                                <p>
                                    <a href="http://" className="text-white">Terms of use</a>
                                </p>
                                <p>
                                    <a href="http://" className="text-white">Shipping Rates</a>
                                </p>
                                <p>
                                    <a href="http://" className="text-white">Gift card conditions</a>
                                </p>
                            </div>

                            {/* <!-- Grid column --> */}
                            <hr className="w-100 clearfix d-md-none" />

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-home mr-3"></i>Sunamganj,Sylhet.</p>
                                <p><i className="fas fa-envelope mr-3"></i>
                                
                                <a style={{ textDecoration:'none',color:'white'}} href="mailto:shop-mart@gmail.com"> shop-mart@gmail.com</a>
                                
                                </p>
                                <p><i className="fas fa-phone mr-3"></i>
                                
                                <a style={{ textDecoration:'none',color:'white'}} href="tel:+8801765459224" target="_blank" rel="noopener noreferrer"> +8801765459224</a>
                                
                                </p>
                                <p><i className="fas fa-print mr-3"></i>
                                <a style={{ textDecoration:'none',color:'white'}} href="tel:+ 01 234 567 89"> + 01 234 567 89</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!--Grid row--> */}
                    </section>
                    {/* <!-- Section: Links --> */}

                    <hr className="my-3" />

                    {/* <!-- Section: Copyright --> */}
                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                {/* <!-- Copyright --> */}
                                <div className="p-3">
                                    © 2022 Copyright: Shop Mart

                                </div>
                                {/* <!-- Copyright --> */}
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                {/* <!-- Facebook --> */}
                                <a
                                    href="http://"
                                    className="btn btn-outline-light btn-floating m-1 text-white"

                                    role="button"
                                ><i className="fab fa-facebook-f"></i
                                ></a>




                                {/* <!-- Twitter --> */}
                                <a
                                    href="http://"
                                    className="btn btn-outline-light btn-floating m-1 text-white"
                                    role="button"
                                ><i className="fab fa-twitter"></i
                                ></a>

                                {/* <!-- Google --> */}
                                <a
                                    href="http://"
                                    className="btn btn-outline-light btn-floating m-1 text-white"

                                    role="button"
                                ><i className="fab fa-google"></i
                                ></a>

                                {/* <!-- Instagram --> */}
                                <a
                                    href="http://"
                                    className="btn btn-outline-light btn-floating m-1 text-white "

                                    role="button"
                                ><i className="fab fa-instagram"></i
                                ></a>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                    </section>
                    {/* <!-- Section: Copyright --> */}
                </div>
                {/* <!-- Grid container --> */}
            </footer>
        </div>
    );
};

export default Footer;