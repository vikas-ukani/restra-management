import dynamic from "next/dynamic";

const ServiceItems = dynamic(() => import("Components/Common/Services/ServiceItems"));
const ServiceBanner = dynamic(() => import("Components/Banners/ServiceBanner"));

const ServicePage = () => {
    return (
        <div>
            <ServiceBanner />

            {/* <!-- Service Start --> */}
            {/* <AllServicesComponent /> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Our Services</h5>
                        <h1 className="mb-5">Explore Our Services</h1>
                    </div>
                    <ServiceItems />
                </div>
            </div>
            {/* <!-- Service End --> */}
        </div>
    );
}

export default ServicePage;