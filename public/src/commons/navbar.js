const Navbar = document.querySelector('#navbarSection');
const NavSection = document.querySelector('#NavSection');
const footerSection = document.querySelector('#footerSection');

// NAVBAR STARTS HERE
const navbar = `<header id="navbarSection">

        <nav class="navbar navbar-expand-lg justify-content-center text-capitalize text-white mx-3">
            <div class="container profile navbar-brand">

                <i class="fas fa-user-circle fa-3x"></i>
                <span class="firstname text-primary"></span>

                <span class="lastname text-primary"></span><br>

                <span class="userEmail text-white ml-3 text-lowercase"></span><br>

                <a href = "login.html"
                class = "signOut profile ml-3 text-warning">Sign Out</a>
            </div>
            <ul class="navbar-nav">
                <li class="nav-item mx-4">
                    <a href = "index.html"
                    class = "nav-link btn btn-outline-success text-white btn-lg px-4"> Home </a>
                </li>
                <li class="nav-item mx-4">
                    <a href="#displayProducts"
                        class="nav-link btn btn-outline-success text-white btn-lg px-4">products</a>
                </li>
                <li class="nav-item mx-4">
                    <a href="#" class="nav-link btn btn-outline-success text-white btn-lg px-4">services</a>
                </li>
                <li class="nav-item mx-4">
                    <a href="#" class="nav-link btn btn-outline-success text-white btn-lg px-4">portfolio</a>
                </li>
            </ul>
        </nav>


        <nav class="navbar navbar-expand-lg justify-content-end text-capitalize text-white mx-3">
            <ul class="navbar-nav ">
                <li class="nav-item mx-4 p-2">
                    <a href = "login.html"
                    class = "nav-link btn btn-outline-warning text-white logInBtn px-3"> Login </a>
                </li>
                <li class="nav-item mx-4 p-2">
                    <a href = "signup.html"
                    class = "nav-link btn btn-outline-warning text-white signUp px-3" > SignUp </a>
                </li>
            </ul>
        </nav>
    </header>`;


const footer = ` <footer id="footer" class="bg-dark py-5">
        <div class="container-fluid">
            <!-- Footer Title row -->
            <div class="row">
                <div class="col text-center">
                    <h1 class="display-4 text-uppercase text-white mb-0">
                        <strong>Contact us</strong>
                    </h1>
                    <div class="title-underline bg-primary"></div>
                    <p class="mt-2 text-capitalize text-muted">
                        @nginya tech systems</p>
                </div>
            </div>
            <!-- End of footer Title row -->
            <div class="row">
                <div class="col text-center">
                    <a href="#" class="btn">
                        <i class="fab fa-facebook fa-3x text-primary m-2"></i>
                    </a>
                    <a href="#" class="btn">
                        <i class="fab fa-twitter fa-3x text-primary m-2"></i>
                    </a>
                    <a href="#" class="btn">
                        <i class="fab fa-instagram fa-3x text-primary m-2"></i>
                    </a>
                    <a href="#" class="btn">
                        <i class="fab fa-google-plus fa-3x text-primary m-2"></i>
                    </a>
                    <button type="button" class="btn btn-danger
                     d-block mx-auto my-3" data-toggle="modal" data-target="#modal">Suggestion</button>
                </div>
            </div>
        </div>
    </footer>
<footer class="bg-dark">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-10 col-lg-9 col-md-8 ml-auto">
                    <div class="row text-light py-4">
                        <div class="col-lg-3 col-sm-6 text-center">
                            <h5 class="pb-3 text-warning">
                                About Nginya Technologies
                            </h5>
                            <p class="small">
                                We create sustainable mobile, desktop and web applications that cut accross every sphere
                                of life
                                (Education, Politics, Arts and Entertainment, science and engineering, family,
                                business,
                                etc.) which are easy to use as well as useful.
                            </p>
                        </div>
                        <div class="col-lg-6 col-sm-6 text-center">
                            <h5 class="font-weight-light text-capitalize ">
                                Nginya Tech Systems, Molyko Buea.
                            </h5>
                            <p class="text-light font-weight-light font-italic mb-2">
                                <strong>Creativity and Impact</strong>
                            </p>

                        </div>
                        <div class="col-lg-3 col-sm-6 text-center">
                            <h5 class="pb-3">
                                Contact Us
                            </h5>
                            <a href="#" class="text-info mb-3">info@nginyatechnologies.co</a>

                            <ul class="list-inline pt-3 pr-3">
                                <li class="list-inline-item">
                                    <a href="" class="footer-link"> <i
                                            class="fab fa-facebook-square fa-2x text-primary"></i> </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="" class="footer-link"> <i class="fab fa-google-plus fa-2x text-danger"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="" class="footer-link"> <i class="fab fa-instagram fa-2x text-danger"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="" class="footer-link"> <i class="fab fa-twitter fa-2x text-info"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col text-center text-light border-top pt-3">
                            <p> &copy; Copyright 2019, All Rights Reserved, Nginya Tech Systems </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- end of footer -->





    <!-- Modal -->
    <div class="modal fade" id="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal header -->
                <div class="modal-header">
                    <h3 class="modal-title text-primary text-capitalize text-center">Please drop a feedback</h3>
                    <button type="button" class="close" data-dismiss="modal">
                        &times;
                    </button>
                </div>
                <!-- End of Modal header -->

                <!-- Modal Body -->
                <div class="modal-body container p-5">
                    <form action="#" class="form-group">
                        <div class="row">
                            <div class="col-25">
                                <label for="fname">First Name</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="fname" name="firstname" class="form-control"
                                    placeholder="Your name..">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="lname">Last Name</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="lname" name="lastname" class="form-control"
                                    placeholder="Your last name..">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="country">Country</label>
                            </div>
                            <div class="col-75">
                                <select id="country" name="country">
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="subject">Subject</label>
                            </div>
                            <div class="col-75">
                                <textarea id="subject" name="subject" class="form-control"
                                    placeholder="Write something.." style="height:200px"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <!-- End of Modal Body -->

                <!-- Modal Footer -->
                <div class="modal-footer">
                    <!-- <div class="row">
                        <input type="submit" value="Submit">
                    </div> -->
                    <button type="button" data-dismiss="modal" class="btn btn-success px-5">Send</button>
                    <button type="button" data-dismiss="modal" class="btn btn-danger">Close</button>
                </div>
                <!-- End of Modal footer -->
            </div>
        </div>
    </div>
    <!-- End of Modal -->


    <!-- footer Section -->`;


Navbar.innerHTML = navbar;
footerSection.innerHTML = footer;