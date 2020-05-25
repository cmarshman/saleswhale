import React from 'react';
import Navbar from '../components/Navbar';
import HeroPhoto from '../components/HeroPhoto';
import LeadParagraph from '../components/LeadParagraph';
import OurCulture from '../components/OurCulture';
import OurProgress from '../components/OurProgress';
import OurOffices from '../components/OurOffices';
import OurInvestors from '../components/OurInvestors';
import Future from '../components/Future';
import SiteMap from '../components/SiteMap';

const Home = () =>{
    return(
        <>
        <Navbar/>
        <HeroPhoto/>
        <LeadParagraph/>
        <OurCulture/>
        <OurProgress/>
        <OurOffices/>
        <OurInvestors/>
        <Future/>
        <SiteMap/>
        </>
    );
}

export default Home;