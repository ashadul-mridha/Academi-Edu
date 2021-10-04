import React from 'react';
import notFoundPage from '../../images/404page.jpg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div className="d-flex justify-content-center">
                <img src={notFoundPage} width="50%" alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;