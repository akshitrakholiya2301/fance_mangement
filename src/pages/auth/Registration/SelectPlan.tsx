import React from 'react'
import { connect } from 'react-redux'
import { Button, Col, Form, Row, } from 'react-bootstrap';


export const CompanyDeatils = (props) => {
    return (
        <>


            <div className="form-title">
                <h2>Membership Type</h2>
            </div>

            <div className="membership">
                <Row>
                    <Col md={6}>
                        <div className='card-radio active'>
                            <div className='card-radio-input'>
                                <div className="radio radio-primary">
                                    <input type="radio" id='janesmembership' name='membership' checked />
                                    <label htmlFor='janesmembership'></label>
                                </div>
                            </div>
                            <div className='card-radio-details'>
                                <div className='card-radio-content'>
                                    <h6>Pay Monthly</h6>
                                    <p>$120/month</p>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='card-radio'>
                            <div className='card-radio-input'>
                                <div className="radio radio-primary">
                                    <input type="radio" id='janesmembership2' name='membership' />
                                    <label htmlFor='janesmembership2'></label>
                                </div>
                            </div>
                            <div className='card-radio-details'>
                                <div className='card-radio-content'>
                                    <h6>Pay Monthly</h6>
                                    <p>$120/month</p>
                                </div>
                                <div className="tag">
                                    Save 15%
                                </div>
                            </div>

                        </div>
                    </Col>

                </Row>
            </div>

            <div className="form-title">
                <h2>Payment Information</h2>
            </div>



            <Form.Group className="form-group">
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Card Name" />
            </Form.Group>


            <Row>
                <Col md={8}>
                    <Form.Group className="form-group">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control type="text" placeholder="MM/YYYY" />
                    </Form.Group>
                </Col>

                <Col md={4}>
                    <Form.Group className="form-group">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="text" placeholder="Enter CVV" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="form-group">
                <Form.Label>Card Holder Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <div className="button-group">
                <Button variant='white' className='btn-icon-start'> <i className='th-outline-arrow-left-2'></i> Back</Button>
                <Button variant='primary' className='w-100 '>Start</Button>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDeatils)