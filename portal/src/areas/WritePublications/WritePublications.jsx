import React from 'react';
import { Card, CardTitle } from 'reactstrap';

import HomeNavbar from '../../components/Navbar/HomeNavbar';

export default function WritePublications() {
    return (
        <div className="Wrapper">

            <HomeNavbar className="home-navbar"/>

            <header className="Wrapper-header">
                <div className="Wrapper-body" >
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle>
                        <h1 className="text-warning text-capitalize">
                            em construção
                        </h1>
                        <i>Área destinada à escrita de publicações...</i>
                    </CardTitle>
                    </Card>
                </div>
            </header>

        </div> 
    )
}