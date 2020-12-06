/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';

import { 
        Alert, 
        Button, 
        Card, 
        CardTitle, 
        FormGroup, 
        Input, 
        Label,
        Modal, 
        ModalHeader, 
        ModalBody, 
        ModalFooter
} from 'reactstrap';

//Using the <<iconify.design>> library of React
import { Icon } from '@iconify/react';
import accountVoice from '@iconify-icons/mdi/account-voice';
import alertIcon from '@iconify-icons/mdi/alert';
import sendCircle from '@iconify-icons/mdi/send-circle';

//Library react-google-recaptcha to deny DDoS
import ReCAPTCHA from "react-google-recaptcha";

import HomeNavbar from '../../components/Navbar/HomeNavbar';

import "./WritePublications.scss";

export default function WritePublications(props) {

    //The props ::buttonLabel:: was used on the reactstrap modal 
    const {
        className
    } = props;

    //State created to send the complaint or feedback if the reCAPTCHA is valid
    const [disableButton, setDisableButton ] = useState(true);

    //The two states bellow was used on the reactstrap modal too
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    function onChange(value) {
        //console.log("Captcha value:", value.length);
        if(value.length > 100) {
            setTimeout(setDisableButton(false), 3000);
        }
    }

    //Getting the value of input-checkbox, if it's marked or not and setting a string to it
    const [checkboxValue, setCheckboxValue] = useState("feedback");
    
    function getCheckboxContent(isChecked){
        if(isChecked == true) {
            setCheckboxValue("denunciation");
        }
    }

    //The state and his handler bellow makes the textarea text be saved to be send later
    const [inputTextValue, setInputTextValue] = useState("empty");

    function handlerTextarea(textWrote){
        if(textWrote.length > 2){
            setInputTextValue(textWrote);
        }
    }

    //Monitoring the two states what have to be checked to unblocked the send btn
    const [enableSendBtn, setEnableSendBtn] = useState(false);

    useEffect(() => {
        if((disableButton == false)&&(inputTextValue != "empty")){
            setEnableSendBtn(true)
        }
    }, [disableButton, inputTextValue])
    

    return (
        <div className="Wrapper">

            <HomeNavbar className="home-navbar"/>

            <header className="Wrapper-header pt-5">
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
                                    <Icon className="User-Disclaimer-Icon" icon={alertIcon} width={40} height={40} />
                                </div>
                                <span>
                                    Toda denúncia ou feedback realizado deixará seu nome completamente anônimo, 
                                    fique à vontade para expressar suas idéias da forma que quiser.
                                </span>
                            </h6>
                        </Alert>

                        <FormGroup id="Complaint-Or-Feedback" check>
                            <Label className="d-flex justify-content-between" check>
                                <Input 
                                    id="Complaint-Or-Feedback-Checkbox" 
                                    type="checkbox" 
                                    onChange={(e) => getCheckboxContent(e.target.checked)}
                                />{' '}
                                <div className="ml-4 mt-2">
                                    <h5>O conteúdo que escreverei é uma <u>denúncia</u>.</h5>
                                </div>
                            </Label>
                        </FormGroup>
                        
                        <FormGroup>
                            <Label className="d-flex align-self-start"for="exampleText">
                                <h5> - Digite aqui o conteúdo de sua denúncia/feedback: </h5>
                            </Label>
                            <Input 
                                id="exampleText" 
                                type="textarea" 
                                name="text" 
                                onChange={(e) => handlerTextarea(e.target.value)}
                            />
                        </FormGroup>

                        <form>
                            <ReCAPTCHA
                                sitekey="6Le8B-8ZAAAAAOhENHaSvlcOezYC0FlSMOjjhhMs"
                                theme="dark"
                                onChange={onChange}
                            />
                        </form>

                        <div className="mt-4">
                            <Button 
                                color="warning" 
                                disabled={(enableSendBtn == false) ? true : false} 
                                className={`${(enableSendBtn == false) ? 'Send-Button-Disabled' : 'Send-Button-Enabled'}`}
                                onClick={toggle}
                            >    
                                <Icon icon={sendCircle} width={40} height={40} />
                                {" "}Enviar denúncia/feedback
                            </Button>{' '}

                            <Modal isOpen={modal} toggle={toggle} className={className}>
                                <ModalHeader toggle={toggle}>Não desista de nós! </ModalHeader>
                                    <ModalBody>
                                            A funcionalidade de envio da sua denúncia ou feedback ainda está sendo desenvolvida.
                                            A previsão de lançamento desta funcionalidade é para o dia 01/12/2020.
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={toggle}>Ok,</Button>{' '}
                                        <Button color="secondary" onClick={toggle}>Voltar para tela anterior</Button>*/}
                                    </ModalFooter>
                            </Modal>

                        </div>

                    </Card>
                </div>
            </header>

        </div> 
    )
}