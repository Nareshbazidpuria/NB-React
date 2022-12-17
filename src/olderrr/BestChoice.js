import React from 'react'
import '../BC.css';
import '../BC.js';

const Bestchoice = () => {
    return (
        <>
            <div>
                <nav id="mainNavbar" className="nav1">
                    <div id="burger" className="burger-1">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div id="navLeftDiv" className="l">
                        <span>Welcome to my E-Shop </span><a href="/bestchoice/loginBc.html">Login</a> or <a
                            href="/bestchoice/registerBc.html">Register</a>
                    </div>
                    <div id="navSec">
                        <div id="navUser">
                            <i id="navuser" className="fa fa-user"></i>
                            <div id="usrnm"></div>
                        </div>
                    </div>
                    <div className="nav2-center">
                        <h1>Best <span>Choice</span></h1>
                        <p>Get Your Best Choice Here</p>
                    </div>
                    <div id="menuItems" className="menuItems menuOpen">
                        <div id="hiGuys" className="Higuys">Welcome To Best Choice</div>
                        <ul id="menuUl">
                            <li className="mbli">Best Sellers</li>
                            <li className="mbli">New Releases</li>
                            <li className="mbli">Electronics</li>
                            <li className="mbli">Men's Fashion</li>
                            <li className="mbli">Women's Fashion</li>
                            <li className="mbli">eBooks</li>
                            <li className="mbli">Beauty</li>
                            <li className="mbli">Health</li>
                            <li className="mbli">Grocery</li>
                            <li id="yourAccount" className="mbli">Your Account</li>
                            <li id="logout" className="mbli">Logout<i className="fa fa-sign-out" style={{ "fontSize": "25px" }}></i></li>
                            <li id="logIn" className="mbli"><a href="/bestchoice/loginBc.html">Login<i className="fa fa-sign-in"
                                style={{ "fontSize": "25px" }}></i></a></li>
                        </ul>
                    </div>
                    <div id="links" className="r r22">
                        <a href="https://www.facebook.com/Best-Choice-100426659169984/?ref=pages_you_manage" target="_blank" rel="noreferrer"><i
                            className="fa fa-facebook" alt="facebook"></i></a>
                        <a href="https://www.instagram.com/_best__choice__/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                        <a href="http://api.whatsapp.com/send?phone=+917837625927&text=Welcome To Best Choice" target="_blank" rel="noreferrer"><i
                            className="fa fa-whatsapp"></i></a>
                        <a href="https://twitter.com/1907935S" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
                        <a href="https://youtube.com/channel/UCLtecBD-QO8eJZbNdfEn7OA" target="_blank" rel="noreferrer"><i
                            className="fa fa-youtube"></i></a>
                    </div>
                </nav>
                <nav className="nav3">
                    <ul>
                        <li><a href="/"><i className=" fa fa-home"></i>Home</a></li>
                        <li><a href="/"><i className=" fa fa-user"></i>Boy</a></li>
                        <li><a href="/"><i className=" fa fa-users"></i>Accessories</a></li>
                        <li><a href="/"><i className=" fa fa-anchor"></i>Toys<i className="fa fa-caret-down"></i></a>
                            <ul>
                                <li><a href="/"><i className="fa fa-clipboard"></i>Wooden</a></li>
                                <li><a href="/"><i className="fa fa-circle-o"></i>Plastic</a></li>
                                <li><a href="/"><i className="fa fa-gavel"></i>Iron</a></li>
                            </ul>
                        </li>
                        <li><a href="/"><i className=" fa fa-calendar-check-o"></i>Special</a></li>
                        <li><a href="/"><i className=" fa fa-search"></i>Find</a></li>
                    </ul>
                </nav>
                <section className="featured">
                    <div className="featured-text">
                        <button>Coming Soon</button>
                        <h2>Our New Designs</h2>
                    </div>
                </section>
                <section className="latest">
                    <div className="product-intro">
                        <h1>New <span>Arrivals</span></h1>
                        <p>Loren ipsum, dolor sit amet consectetor adipisicing elit. Incidunt!</p>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <div>
                                <img src="/bestchoice/imgBc/s1.jpg" alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                        <div className="card">
                            <div>
                                <img src="/bestchoice/imgBc/s2.jpeg" alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                        <div className="card">
                            <div>
                                <img src="/bestchoice/imgBc/s3.jpg" alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                        <div className="card">
                            <div>
                                <img src="/bestchoice/imgBc/s4.jpg" alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <div>
                                <img src="/bestchoice/imgBc/s1.jpg" alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                        <div className="card">
                            <div>
                                <img src="/bestchoice/imgBc/s2.jpeg" alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                        <div className="card">
                            <div>
                                <img src="/bestchoice/imgBc/s3.jpg" alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                        <div className="card">
                            <div>
                                <img src="/bestchoice/imgBc/s4.jpg" alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </section>
                <section className="latest">
                    <div className="product-intro">
                        <h1>Popular <span>Products</span></h1>
                        <p>Loren ipsum, dolor sit amet consectetor adipisicing elit. Incidunt!</p>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <div>
                                <img src="/bestchoice/imgBc/pp6.jpg" alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                        <div className="card">
                            <div>
                                <img src="/bestchoice/imgBc/pp2.jpg" alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                        <div className="card">
                            <div>
                                <img src="/bestchoice/imgBc/pp3.jpg" alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                        <div className="card">
                            <div>
                                <img src="/bestchoice/imgBc/pp5.jpg" alt="" />
                            </div>
                            <h1>Branded Shoes</h1>
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <p>$500.00</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </section>
                <footer>
                    <div>
                        <h1>Best <span>Choice</span></h1>
                        <p>Get Your Best Choice Here</p>
                    </div>
                    <div>
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-whatsapp"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-youtube"></i>
                        <p><br />Design by <i>Naresh Bazidpuria</i></p>
                    </div>
                    <div>
                        <p>
                            Copyright &copy; <span id="yr"></span> All Rights Reserved
                        </p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Bestchoice
