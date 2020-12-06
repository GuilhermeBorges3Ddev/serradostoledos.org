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
        //console.log("1) " + JSON.stringify(allPosts))
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

                                    {allPosts.map((postItem) => {
                                        return <ListGroupItem key={postItem._id} className={(postItem.contentType === "feedback") ? "Feedback my-2" : "Complaint my-2"}>      
                                            <ListGroupItemHeading className="Post-Kind">
                                                <div>
                                                    <Icon icon={(postItem.contentType === "feedback") ? paletteSwatchOutline : headAlertOutline} width={40} height={40} />
                                                </div>
                                                <div className="Post-Kind-Label text-uppercase">
                                                    <i>{postItem.contentType}</i>
                                                </div>
                                            </ListGroupItemHeading>
                                            <ListGroupItemText className="Post-Text">
                                                <p>{postItem.message}</p>
                                            </ListGroupItemText>
                                        </ListGroupItem>
                                    })}
                            
                                </ListGroup>

                        </Scrollbars>  

                    </Card>
                </div>
            </header>
  
        </div> 
    )
}