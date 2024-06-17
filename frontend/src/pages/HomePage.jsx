import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import FAQ from '../components/Faqs';
import HeroSection from '../components/HeroSection';
import ContactUs from '../components/ContactUs';

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <FAQ/>
            <ContactUs/>
        </div>
    );
};

export default HomePage;
