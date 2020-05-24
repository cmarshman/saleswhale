import React from 'react';
import Navbar from '../components/Navbar';
import HeroPhoto from '../components/HeroPhoto';
import LeadParagraph from '../components/LeadParagraph';
import OurCulture from '../components/OurCulture';
import OurProgress from '../components/OurProgress';
import OurOffices from '../components/OurOffices';
import OurInvestors from '../components/OurInvestors';

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
        </>
    );
}

export default Home;