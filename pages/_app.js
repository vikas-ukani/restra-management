import 'styles/globals.css'
import Router from 'next/router';
import PageLoader from 'Components/UI/PageLoader';
import { useState, useEffect } from 'react';
import { RouteGuard } from 'Components/Guard/RouteGuard';

function MyApp({ Component, pageProps }) {
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   Router.onRouteChangeStart = () => setIsLoading(true);
  //   Router.onRouteChangeComplete = () => setIsLoading(false);
  //   Router.onRouteChangeError = () => setIsLoading(false);
  // }, [])

  return (
    <>
      {/* {isLoading && <PageLoader />} */}
      <RouteGuard>
        <Component {...pageProps} />
      </RouteGuard>
    </>)
}

export default MyApp
