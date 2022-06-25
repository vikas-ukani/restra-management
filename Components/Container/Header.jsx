import Link from 'next/link'

const Header = () => {
    let title = process.env.NEXT_PUBLIC_APP_NAME || 'Restro'
    return (
        // container-xxl
        <div className=" position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <Link href="/" >
                    <a className="navbar-brand p-0">
                        <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>
                            {title} 
                        </h1>
                        {/* <img src="assets/img/logo.png" alt="Logo" /> */}
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        {/* <a className="nav-item nav-link active"></a> */}
                        <Link href="/">
                            <a className='nav-item nav-link active'>Home</a>
                        </Link>

                        <Link href="service">
                            <a className="nav-item nav-link">Service</a>
                        </Link>
                        <Link href="/menu">
                            <a className="nav-item nav-link">Menu</a>
                        </Link>

                        <div className="nav-item dropdown">
                            <a href='' className="nav-link dropdown-toggle pointer" data-bs-toggle="dropdown">About</a>
                            <div className="dropdown-menu m-0">
                                <Link href="about">
                                    <a className="dropdown-item">About Us</a>
                                    {/* <a href className="nav-item nav-link">About</a> */}
                                </Link>
                                <Link href="team">
                                    <a className="dropdown-item">Our Team</a>
                                </Link>
                                <Link href="testimonial">
                                    <a className="dropdown-item">Testimonial</a>
                                </Link>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    <a href="" className="btn btn-primary py-2 px-4">Book A Table</a>
                </div>
            </nav>
        </div>
    );
}

export default Header;