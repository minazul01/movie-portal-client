import React from 'react';
import Header from '../Header/Header';
import FeatureMovie from './FeatureMovie';


const Home = () => {
    
    return (
        <div className='min-h-screen'>
           <Header />
           <FeatureMovie />
        </div>
    );
};

export default Home;