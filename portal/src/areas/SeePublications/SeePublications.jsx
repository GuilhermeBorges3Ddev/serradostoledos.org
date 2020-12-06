import React, { useState, useEffect } from 'react';
import axios from "axios";

import { 
        Card, 
        CardTitle,
        ListGroup, 
        ListGroupItem, 
        ListGroupItemHeading, 
        ListGroupItemText 
} from 'reactstrap';

//Using the <<iconify.design>> library of React
import { Icon } from '@iconify/react';
import listStatus from '@iconify-icons/mdi/list-status';
import paletteSwatchOutline from '@iconify-icons/mdi/palette-swatch-outline';
import headAlertOutline from '@iconify-icons/mdi/head-alert-outline';

/* 
    These <<react-custom-scrollbars>> library was imported to threat the backend return of N posts... 
    He had to wrap all content to work well.
*/
import { Scrollbars } from 'react-custom-scrollbars';

import HomeNavbar from '../../components/Navbar/HomeNavbar';

import "./SeePublications.scss";

export default function SeePublications() {

    const [allPosts, setAllPosts] = useState({});

    const getPosts = () => {
            axios.get('https://serradostoledosapis.herokuapp.com/posts').then(res => {
                setAllPosts(res?.data);
            });
    }

    useEffect(() => {
        setInterval(getPosts(),60000);
        console.log("1) " + JSON.stringify(allPosts))
    }, []);

    return (

        <div className="Wrapper">

            {console.log("2) " + JSON.stringify(allPosts))}

            <HomeNavbar className="home-navbar"/>
    
            <header className="Wrapper-header">
                <div className="Wrapper-body" >
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    
                        <CardTitle>
                            <h3 className="text-warning d-flex justify-content-around align-items-center">
                                
                                <div>
                                    <Icon icon={listStatus} width={60} height={60} />
                                </div>

                                <div className="ml-5">
                                    <i>{"  "}Veja as publicações que os usuários fizeram em tempo-real:</i>
                                </div>
                                
                            </h3>
                        </CardTitle>


                        <Scrollbars 
                            style={{ height: 350 }}
                            renderThumbVertical={props => <div {...props} className="thumb-horizontal"/>}
                        >
                                <ListGroup>

                                
                                    <ListGroupItem className="Feedback my-2">      
                                        <ListGroupItemHeading className="Post-Kind">
                                            <div>
                                                <Icon icon={paletteSwatchOutline} width={40} height={40} />
                                            </div>
                                            <div className="Post-Kind-Label text-uppercase">
                                                <i>feedback</i>
                                            </div>
                                        </ListGroupItemHeading>
                                        <ListGroupItemText className="Post-Text">
                                            <p>Deveriam ter visitas periódicas ao local para coleta de lixo nas trilhas e matas.</p>
                                        </ListGroupItemText>
                                    </ListGroupItem>


                                    <ListGroupItem className="Complaint my-2">      
                                        <ListGroupItemHeading className="Post-Kind">
                                            <div>
                                                <Icon icon={headAlertOutline} width={40} height={40} />
                                            </div>
                                            <div className="Post-Kind-Label text-uppercase">
                                                <i>denúncia</i>
                                            </div>
                                        </ListGroupItemHeading>
                                        <ListGroupItemText className="Post-Text">
                                            <p>Os visitantes da cachoeira poderiam recolher seus próprios resíduos.</p>
                                        </ListGroupItemText>
                                    </ListGroupItem>


                                    <ListGroupItem className="Complaint my-2">      
                                        <ListGroupItemHeading className="Post-Kind">
                                            <div>
                                                <Icon icon={headAlertOutline} width={40} height={40} />
                                            </div>
                                            <div className="Post-Kind-Label text-uppercase">
                                                <i>denúncia</i>
                                            </div>
                                        </ListGroupItemHeading>
                                        <ListGroupItemText className="Post-Text">
                                            <p>Não joguem lixo no local! Já tem muito por lá!</p>
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                    
                                    <ListGroupItem className="Feedback my-2">      
                                        <ListGroupItemHeading className="Post-Kind">
                                            <div>
                                                <Icon icon={paletteSwatchOutline} width={40} height={40} />
                                            </div>
                                            <div className="Post-Kind-Label text-uppercase">
                                                <i>feedback</i>
                                            </div>
                                        </ListGroupItemHeading>
                                        <ListGroupItemText className="Post-Text">
                                            <p>Poderia haver mais divulgação da importância de preservar a área da reserva aos itajubenses.</p>
                                        </ListGroupItemText>
                                    </ListGroupItem>
                            
                                </ListGroup>

                        </Scrollbars>  

                    </Card>
                </div>
            </header>
  
        </div> 
    )
}