import React from 'react';

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

/* 
    These <<react-custom-scrollbars>> library was imported to threat the backend return of N posts... 
    He had to wrap all content to work well.
*/
import { Scrollbars } from 'react-custom-scrollbars';

import HomeNavbar from '../../components/Navbar/HomeNavbar';

import "./SeePublications.scss";

export default function SeePublications() {
    return (
        <div className="Wrapper">

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
                                
                                    <ListGroupItem className="bg-dark my-2">      
                                        <ListGroupItemHeading className="d-flex justify-content-start">
                                            List group item heading
                                        </ListGroupItemHeading>
                                        <ListGroupItemText>
                                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                    
                                    <ListGroupItem className="bg-dark my-2">
                                        <ListGroupItemHeading className="d-flex justify-content-start">
                                            List group item heading
                                        </ListGroupItemHeading>
                                        <ListGroupItemText>
                                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                    
                                    <ListGroupItem className="bg-dark my-2">
                                        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                                        <ListGroupItemText>
                                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
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