import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle } from 'reactstrap';

import HomeNavbar from '../../components/Navbar/HomeNavbar';

export default function PageNotFound() {
    return (

        <div className="Wrapper">

            <HomeNavbar className="home-navbar"/>

            <header className="Wrapper-header">
                <div className="Wrapper-body" >
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle>
                        <h1 className="text-warning text-capitalize">
                            Ops...Você tentou acessar uma rota inexistente
                        </h1>
                        <Link to="/">
                            <i>{">>>"}Voltar para home{"<<<"} </i>
                        </Link>
                    </CardTitle>
                    </Card>
                </div>
            </header>

        </div>

    )
}
