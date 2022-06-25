import axios from "axios";

const Test = ({ data }) => {
    console.log('data In JS::', data );
    return (
        <div>
            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Test Page</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Menu</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* <!-- Menu Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                        <h1 className="mb-5">Most Popular Items</h1>
                    </div>
                    <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                        <div className="row g-4">
                            {data?.persons?.map((item, index) => {
                                return (
                                    <div className="col-lg-6 offset-3" key={index}>
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="assets/img/menu-1.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <p className="text-capitalize">{item.person}</p>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Menu End --> */}
        </div>
    );
}


export const getServerSideProps = async (ctx) => {




    let res = await axios.get('http://localhost:3000/api/test', { 'content-type': 'application/json' }).then(res => res.data).catch(err => err.response);

    console.log('data from serverside prop', res)
    return {
        props: {
            data: res
        }
    }
}

export default Test;