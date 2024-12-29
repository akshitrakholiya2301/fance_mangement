import React, { useState } from 'react';
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import brandingLogo from '../../../assets/images/branding-logo.png'
import video from '../../../assets/images/video.png'
import avtar1 from '../../../assets/images/avatar-1.jpg'
import avtar2 from '../../../assets/images/avatar-2.jpg'
import avtar3 from '../../../assets/images/avatar-3.jpg'
import placeholder from '../../../assets/images/placeholder.svg'
import { NavLink } from 'react-router-dom'
import StyleImage from '../../../assets/images/style.png';

export const information = (props) => {
    const [showAddNewContact, setAddNewContactShow] = useState(false);
    const handleAddNewContactClose = () => setAddNewContactShow(false);
    const handleAddNewContactShow = () => setAddNewContactShow(true);
    return (

        <>
            <div className="price-rule">
                <Row className="price-rule-row">
                    <Col md={4} className="price-rule-col">
                        <Card className='mb-3'>
                            <Card.Body>

                                <div className="bussiness-info">
                                    <div className="bussiness-info-details">
                                        <div className="bussiness-info-name">
                                            <div className="bussiness-info-name-image btn-light-secondary btn-icon">
                                                <i className='th-bold-buildings'></i>
                                            </div>
                                            <div className="bussiness-info-name-text">
                                                <h5>Aspen Fencing</h5>
                                                <p>Company ID: <span>AFD-34545</span></p>
                                            </div>
                                        </div>
                                    </div>


                                    <Form.Group className="form-group">
                                        <Form.Label>Company Name</Form.Label>
                                        <div className="form-control-icon icon-start">
                                            <i className='th-outline-buildings'></i>
                                            <Form.Control className='form-control' type="text" placeholder="Aspen Fencing" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Address 1</Form.Label>
                                        <div className="form-control-icon icon-start">
                                            <i className='th-outline-location'></i>
                                            <Form.Control className='form-control' type="text" placeholder="8980 Westminster Blvd #210" />
                                        </div>
                                    </Form.Group>

                                    <Row>
                                        <Col md={4}>
                                            <Form.Group className="form-group">
                                                <Form.Label>City</Form.Label>

                                                <Form.Control className='form-control' type="text" placeholder="" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="form-group">
                                                <Form.Label>State</Form.Label>

                                                <Form.Control className='form-control' type="text" placeholder="CO" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="form-group">
                                                <Form.Label>Zip</Form.Label>

                                                <Form.Control className='form-control' type="text" placeholder="" />
                                            </Form.Group>
                                        </Col>
                                    </Row>


                                    <Form.Group className="form-group">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control className='form-control' type="text" placeholder="(970) 235-0413" />
                                    </Form.Group>

                                    <hr />

                                    <Form.Group className="form-group">
                                        <Form.Label>Sales E-mail Address</Form.Label>
                                        <div className="form-control-icon icon-start">
                                            <i className='th-outline-sms'></i>
                                            <Form.Control className='form-control' type="text" placeholder="clay@trustedvine.com" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Website for redirect</Form.Label>
                                        <div className="form-control-icon icon-start">
                                            <i className='th-outline-global'></i>
                                            <Form.Control className='form-control' type="text" placeholder="https://trustedvine.com" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="form-group">

                                        <div className="checkbox checkbox-primary checkbox-small">
                                            <input type="checkbox" id="contact" className="material-inputs filled-in" />
                                            <label htmlFor="contact">Require Contact</label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="form-group">

                                        <div className="checkbox checkbox-primary checkbox-small">
                                            <input type="checkbox" id="number" className="material-inputs filled-in" />
                                            <label htmlFor="number">Require Phone Number</label>
                                        </div>
                                    </Form.Group>


                                </div>




                            </Card.Body>
                        </Card>


                    </Col>


                    <Col md={4} className="price-rule-col">
                        <Card className='mb-3'>
                            <div className="card-title">
                                <div className="card-title-left">
                                    <h4>Branding</h4>
                                </div>

                            </div>
                            <Card.Body>

                                <div className="branding">
                                    <div className="branding-info">
                                        <div className="branding-logo">
                                            <img src={brandingLogo} alt="brandingLogo" />
                                        </div>
                                        <div className="branding-details">
                                            <div className="branding-text">
                                                <h6>Aspen Fencing.png</h6>
                                                <p>Max Size: 5mb</p>
                                            </div>
                                            <Button variant='light-primary' size='sm' className='btn-icon-start'> <i className='th-outline-export'></i> Change Logo</Button>
                                        </div>
                                    </div>

                                    <Form.Group className="form-group form-group-color form-group-sm">
                                        <Form.Label>Contractor Banner Color</Form.Label>
                                        <Form.Control
                                            className='form-control'
                                            type="color"

                                            defaultValue="#344FDE"
                                            title="Contractor Banner Color"
                                        />
                                    </Form.Group>
                                    <Form.Group className="form-group form-group-color form-group-sm">
                                        <Form.Label>Banner Text Color</Form.Label>
                                        <Form.Control
                                            className='form-control'
                                            type="color"

                                            defaultValue="#E8F3FC"
                                            title="Banner Text C"
                                        />
                                    </Form.Group>
                                    <Form.Group className="form-group  form-group-sm">
                                        <div className="label-wrapper">
                                            <Form.Label>Confirmation Email Text</Form.Label>
                                            <p>Last Updated On: Sep 15, 2023</p>
                                        </div>
                                        <Form.Control className='form-control' as="textarea" defaultValue="We have received your Quote Request and a member of our sales team will be contacting you shortly. This budget summary only applies to estimated materials and installation costs. Some additional fees may apply." rows={4} />
                                    </Form.Group>
                                    <Form.Group className="form-group  form-group-sm">
                                        <div className="label-wrapper">
                                            <Form.Label>Statement Summary Text</Form.Label>
                                            <p>Last Updated On: Sep 15, 2023</p>
                                        </div>
                                        <Form.Control className='form-control' as="textarea" defaultValue="Thank you for using our online budget tool. A member of our team will reach out to discuss your project and schedule an onsite appointment." rows={4} />
                                    </Form.Group>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className='mb-3'>
                            <div className="card-title">
                                <div className="card-title-left">
                                    <h4>Estimator Settings</h4>
                                </div>

                            </div>
                            <Card.Body>

                                <div className="estimator-setting">

                                    <Form.Group className="form-group form-group-link">
                                        <Form.Label>Estimator Embed Code</Form.Label>
                                        <div className="form-control-icon icon-end">
                                            <i className='th-outline-copy text-secondary'></i>
                                            <Form.Control className='form-control' type="text" defaultValue="5451dfgdfg542dfg5" />
                                        </div>
                                    </Form.Group>
                                    <div className="video">
                                        <div className="video-image">
                                            <i className='th-bold-video-circle'></i>
                                            <img src={video} alt="video" />
                                        </div>
                                        <div className="video-details">
                                            <div className="video-text">
                                                <h6>How it works</h6>
                                                <p>10:50 min</p>
                                            </div>

                                            <NavLink to=""> <i className='th-outline-arrow-up-3'></i> </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>



                    <Col md={4} className="price-rule-col">
                        <Card className='mb-3'>
                            <div className="card-title">
                                <div className="card-title-left">
                                    <h4>Contacts</h4>
                                </div>
                                <div className="card-title-right">
                                    <Button variant="gray" className='btn-xs btn-icon-start' onClick={handleAddNewContactShow}> <i className='th-outline-add-circle'></i> Add New</Button>
                                </div>

                            </div>
                            <Card.Body>


                                <div className="contact">
                                    <div className="contact-card">
                                        <div className="contact-image">
                                            <img src={avtar1} alt="avtar1" />
                                        </div>
                                        <div className="contact-details">
                                            <div className="contact-text">
                                                <h6>Dennis Callis</h6>
                                                <NavLink to="">david291@gmail.com</NavLink>
                                                <NavLink to="">(917) 339-6416</NavLink>
                                            </div>
                                            <div className="contact-action">
                                                <button type="button" onClick={handleAddNewContactShow} className=" text-trash btn btn-icon2 btn-icon-start"><i className="th th-outline-edit"></i></button>
                                                <button type="button" className=" text-danger btn btn-icon2 btn-icon-start"><i className="th th-outline-trash"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-card">
                                        <div className="contact-image">
                                            <img src={avtar2} alt="avtar1" />
                                        </div>
                                        <div className="contact-details">
                                            <div className="contact-text">
                                                <h6>Dennis Callis</h6>
                                                <NavLink to="">david291@gmail.com</NavLink>
                                                <NavLink to="">(917) 339-6416</NavLink>
                                            </div>
                                            <div className="contact-action">
                                                <button type="button" onClick={handleAddNewContactShow} className=" text-trash btn btn-icon2 btn-icon-start"><i className="th th-outline-edit"></i></button>
                                                <button type="button" className=" text-danger btn btn-icon2 btn-icon-start"><i className="th th-outline-trash"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-card">
                                        <div className="contact-image">
                                            <img src={avtar3} alt="avtar1" />
                                        </div>
                                        <div className="contact-details">
                                            <div className="contact-text">
                                                <h6>Dennis Callis</h6>
                                                <NavLink to="">david291@gmail.com</NavLink>
                                                <NavLink to="">(917) 339-6416</NavLink>
                                            </div>
                                            <div className="contact-action">
                                                <button type="button" onClick={handleAddNewContactShow} className=" text-trash btn btn-icon2 btn-icon-start"><i className="th th-outline-edit"></i></button>
                                                <button type="button" className=" text-danger btn btn-icon2 btn-icon-start"><i className="th th-outline-trash"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Card.Body>
                        </Card>
                        <Card className='mb-3'>
                            <div className="card-title">
                                <div className="card-title-left">
                                    <h4>Integrations</h4>
                                </div>
                                <div className="card-title-right">
                                    <Button variant="gray" className='btn-xs btn-icon-start'> <i className='th-outline-add-circle'></i> Add New</Button>
                                </div>

                            </div>
                            <Card.Body>


                                <div className="not-found">
                                    <div className="not-found-image">
                                        <img src={placeholder} alt="placeholder" />
                                    </div>
                                    <div className="not-found-text">
                                        <p>No Integration Found!</p>
                                    </div>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div >

            <Modal show={showAddNewContact} size='lg' className='modal-theme' centered scrollable onHide={handleAddNewContactClose}>
                <Modal.Header >
                    <Modal.Title>Add / Edit Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="">
                        <Form.Group className="form-group" >
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control type="text" className='form-control' placeholder="Aspen Fencing and Decks" />
                        </Form.Group>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group" >
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" className='form-control' placeholder="Westminster" />
                                </Form.Group>

                            </Col>
                            <Col md={6}>
                                <Form.Group className="form-group" >
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" className='form-control' placeholder="CO" />
                                </Form.Group>

                            </Col>
                        </Row>

                        <Form.Group className="form-group" >
                            <Form.Label>Address 1</Form.Label>
                            <Form.Control type="text" className='form-control' placeholder="8980 Westminster Blvd #210" />
                        </Form.Group>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group" >
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" className='form-control' placeholder="(970) 235-0413" />
                                </Form.Group>

                            </Col>
                            <Col md={6}>
                                <Form.Group className="form-group" >
                                    <Form.Label>Sales E-mail Address</Form.Label>
                                    <Form.Control type="text" className='form-control' placeholder="clay@trustedvine.com" />
                                </Form.Group>

                            </Col>
                        </Row>

                        <Form.Group className="form-group" >
                            <Form.Label>Upload Photo</Form.Label>
                            <div className='attachments-container'>
                                <div className='attachments-content'>
                                    <button className='btn btn-attachments'><i className="bi bi-upload"></i></button>
                                    <p>Drag and Drop file here or <span className='text-primary'>Choose file</span></p>
                                </div>
                                <input type="file" accept="image/x-png,image/jpeg,image/jpg" />
                            </div>

                            <div className='attachments-upload-grid-container'>
                                <div className='attachments-upload-row'>


                                    <div className='attachments-upload-col'>
                                        <div className='card-attachments-upload'>
                                            <div className='attachments-image'>
                                                <img src={StyleImage} alt="Style" />
                                            </div>
                                            <Button variant="close" ><i className='th th-close'></i></Button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group className="form-group" >
                            <Form.Label>WebSite</Form.Label>
                            <Form.Control type="text" className='form-control' placeholder="https://trustedvine.com" />
                        </Form.Group>


                        <Row>
                            <Col md={4}>
                                <Form.Group className="form-group">
                                    <div className="checkbox checkbox-primary checkbox-small">
                                        <input type="checkbox" id="sales" className="material-inputs filled-in" />
                                        <label htmlFor="sales">Is Sales</label>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="form-group">
                                    <div className="checkbox checkbox-primary checkbox-small">
                                        <input type="checkbox" id="admin" className="material-inputs filled-in" />
                                        <label htmlFor="admin">Is Admin</label>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="form-group">
                                    <div className="checkbox checkbox-primary checkbox-small">
                                        <input type="checkbox" id="enabled" className="material-inputs filled-in" />
                                        <label htmlFor="enabled">Is Enabled</label>
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer className='justify-content-end'>

                    <div className="button-group">
                        <Button variant="white" onClick={handleAddNewContactClose}>
                            Close
                        </Button>
                        <Button variant="primary" className='btn-icon-start' onClick={handleAddNewContactClose}>
                            <i className='th-outline-tick-circle'></i>
                            Save
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>

    )
}
const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(information)