import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Programs from '../Programs/Programs';
import Bonus from './Bonus/Bonus';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Programs></Programs>
            <Bonus></Bonus>
            <Footer></Footer>
        </div>
    );
};

export default Home;