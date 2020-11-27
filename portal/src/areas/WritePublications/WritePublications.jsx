import React from 'react';
import { Alert, Card, CardTitle, FormGroup, Input, Label } from 'reactstrap';

//Using the <<iconify.design>> library of React
import { Icon } from '@iconify/react';
import accountVoice from '@iconify-icons/mdi/account-voice';
import alertIcon from '@iconify-icons/mdi/alert';

import HomeNavbar from '../../components/Navbar/HomeNavbar';

import "./WritePublications.scss";

export default function WritePublications() {
    return (
        <div className="Wrapper">

            <HomeNavbar className="home-navbar"/>

            <header className="Wrapper-header">
                <div>
                    <Card 
                        body 
                        inverse 
                        style={{ backgroundColor: '#333', borderColor: '#333' }}
                        className="Post-Card-Area"
                    >
                        <CardTitle className="pb-3">
                            <h2 className="text-warning">
                                <div>
                                    <Icon icon={accountVoice} width={50} height={50} />
                                </div>
                                <i>Seja a voz da serra:</i>
                            </h2>
                        </CardTitle>

                        <Alert className="User-Disclaimer" color="warning">
                            <h6 className="text-left">
                                <div className="d-flex justify-content-center">
                                    <Icon icon={alertIcon} width={40} height={40} />
                                </div>
                                Toda denúncia ou feedback realizado é completamente anônimo, 
                                fique à vontade para expressar suas idéias da forma que quiser.
                            </h6>
                        </Alert>
                        
                        <FormGroup>
                            <Label className="d-flex align-self-start"for="exampleText">
                                <h5> - Digite aqui o conteúdo de sua denúncia/feedback: </h5>
                            </Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                    
                    </Card>
                </div>
            </header>

        </div> 
    )
}