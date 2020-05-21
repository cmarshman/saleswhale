import React from 'react';
import Navbar from '../components/Navbar';
import HeroPhoto from '../components/HeroPhoto';
import LeadParagraph from '../components/LeadParagraph';

const Home = () =>{
    return(
        <>
        <Navbar/>
        <HeroPhoto/>
        <LeadParagraph/>
        </>
    );
}

export default Home;