import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import GlobalCustomer from './GlobalCustomer';
import Parts from './Parts';
import Review from './Review';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <WhyChooseUs></WhyChooseUs>
            <GlobalCustomer></GlobalCustomer>
            <Review></Review>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;