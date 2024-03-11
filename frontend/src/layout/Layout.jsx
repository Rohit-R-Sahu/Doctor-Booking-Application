import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/FooterComp';
import Routers from '../routes/Routers';
import FooterComp from '../components/Footer/FooterComp';

const Layout = () => {
  return (
    <>
        <Header />
        <main>
            <Routers />
        </main>
        <FooterComp />
    </>)
}

export default Layout