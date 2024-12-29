import React, { useState } from 'react'
import { connect } from 'react-redux'
import visa from '../../../assets/images/visa-card.svg'
import master from '../../../assets/images/master-card.svg'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'

const PaymentMethod = (props) => {

    const [showAddPaymentMethod, setAddPaymentMethodShow] = useState(false);
    const handleAddPaymentMethodClose = () => setAddPaymentMethodShow(false);
    const handleAddPaymentMethodShow = () => setAddPaymentMethodShow(true);
    return (
        <>
            <Row>
                <Col md={6}>
                    <div className="payment-card-wrapper">
                        <h6>Saved Cards</h6>
                        <div className="saved-card-wrapper">
                            <div className="saved-card">
                                <div className="saved-card-item">
                                    <div className="saved-card-image">
                                        <img src={visa} alt="visa" />
                                    </div>
                                    <div className="saved-card-data">
                                        <h6>**** **** **** 8545</h6>
                                        <p>Expiry 10/2034</p>
                                    </div>
                                </div>

                                <div className="saved-card-item gap-3 d-flex">
                                    <div className="badge badge-light">Default</div>
                                    <Button variant="icon2"  > <i className='th-outline-edit-2 text-secondary'></i></Button>
                                    <Button variant="icon2"  > <i className='th-outline-trash text-danger'></i></Button>
                                </div>
                            </div>
                            <div className="saved-card">
                                <div className="saved-card-item">
                                    <div className="saved-card-image">
                                        <img src={master} alt="master" />
                                    </div>
                                    <div className="saved-card-data">
                                        <h6>**** **** **** 8545</h6>
                                        <p>Expiry 10/2034</p>
                                    </div>
                                </div>

                                <div className="saved-card-item gap-3 d-flex">
                                    <div className="badge badge-light">Default</div>
                                    <Button variant="icon2"  > <i className='th-outline-edit-2 text-secondary'></i></Button>
                                    <Button variant="icon2"  > <i className='th-outline-trash text-danger'></i></Button>
                                </div>
                            </div>
                        </div>

                        <div className="button-group">
                            <Button variant='primary' className='btn-icon-start' onClick={handleAddPaymentMethodShow}> <i className='th-outline-add-circle'></i> Add Another</Button>
                        </div>
                    </div>
                </Col>
            </Row>

            <Modal show={showAddPaymentMethod} className='modal-theme' centered scrollable onHide={handleAddPaymentMethodClose}>
                <Modal.Header >
                    <Modal.Title>New Payment Method</Modal.Title>
                    <Button variant="close" onClick={handleAddPaymentMethodClose}><i className='th th-close'></i></Button>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group className="form-group" >
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="text" className='form-control' placeholder="Enter Card Name" />
                    </Form.Group>
                    <Row>
                        <Col md={8}>
                            <Form.Group className="form-group" >
                                <Form.Label>Expiry Date</Form.Label>
                                <Form.Control type="text" className='form-control' placeholder="MM/YYYY" />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="form-group" >
                                <Form.Label>CVV</Form.Label>
                                <Form.Control type="text" className='form-control' placeholder="545" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="form-group" >
                        <Form.Label>Card Holder Name</Form.Label>
                        <Form.Control type="text" className='form-control' placeholder="Enter Name" />
                    </Form.Group>

                </Modal.Body>

                <Modal.Footer className='justify-content-end'>

                    <div className="button-group">
                        <Button variant="white" onClick={handleAddPaymentMethodClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" className='btn-icon-start' onClick={handleAddPaymentMethodClose}>
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

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethod)