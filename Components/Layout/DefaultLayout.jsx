import dynamic from 'next/dynamic'

const Header = dynamic(() => import('Components/Container/Header'))
const FooterScript = dynamic(() => import('Components/Container/FooterScript'))
const Footer = dynamic(() => import('Components/Container/Footer'))

const DefaultLayout = ({ children }) => {
    console.log('Here :>> ');
    return (
        <>
        {/* container-xxl */}
            <div className=" bg-white p-0">
                <Header />
                {children}
                <Footer />
                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
            </div>
            <FooterScript />
        </>
    );
}

export default DefaultLayout;