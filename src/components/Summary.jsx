import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Traditional from './Traditional';
import ShopByCategory from './ShopByCategory';
import ShaddiCollection from  './ShaddiCollection'
import NextGen from './NextGen';
import PartyEnd from './PartyEnd';
import NewBanner from './NewBanner';
import Options from './Options';
import Footer from './Footer';
function Summary() {
    return ( 
        <>
        <NavBar/>

        <Home/>
        <ShopByCategory/>
        <ShaddiCollection/>
        <Traditional/>
        <NextGen/>
        <Options/>
        <Footer/>
        {/* <NewBanner/> */}
        </>
    );
}

export default Summary;