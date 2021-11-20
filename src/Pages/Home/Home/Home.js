import React from 'react';
import Impacts from '../../Impacts/Impacts';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import JoinUs from '../JoinUs/JoinUs';
import AboutBanner from './../AboutBanner/AboutBanner';




const Home = () => {
    return (
        <div className="mt-0">
       <Navigation></Navigation>
       <Banner></Banner>
       <JoinUs></JoinUs>
       <AboutUs></AboutUs>
       <Impacts></Impacts>
       <AboutBanner></AboutBanner>
       
       <Footer></Footer>
   

        </div>
    );
};

export default Home;