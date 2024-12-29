import React, { useState } from 'react'
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

const PricingRules = (props) => {


    return (
        <>
            <div className="price-rule">
                <Row className="price-rule-row">
                    <Col md={4} className="price-rule-col">
                        <Card className='mb-3'>
                            <div className="card-title">
                                <div className="card-title-left">
                                    <h4>Pricing Options</h4>
                                </div>

                            </div>
                            <Card.Body>
                                <div className="price-rule-card-data">
                                    <Form.Group className='form-group' >
                                        <Form.Label>Round Estimates to Nearest</Form.Label>
                                        <Row>
                                            <Col md={6}>
                                                <div className='card-radio form-radio-control active '>
                                                    <div className='card-radio-input'>
                                                        <div className="radio radio-primary">
                                                            <input type="radio" id='round1' name='round' checked />
                                                            <label htmlFor='round1'>$10</label>
                                                        </div>
                                                    </div>
                                                    {/* <div className='card-radio-details'>
                                                        <div className='card-radio-content'>
                                                            <h6 className='mb-0'>$10</h6>
                                                        </div>
                                                    </div> */}

                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className='card-radio form-radio-control'>
                                                    <div className='card-radio-input'>
                                                        <div className="radio radio-primary">
                                                            <input type="radio" id='round2' name='round' />
                                                            <label htmlFor='round2'>$100</label>
                                                        </div>
                                                    </div>
                                                    {/* <div className='card-radio-details'>
                                                        <div className='card-radio-content'>
                                                            <h6 className='mb-0'>$100</h6>
                                                        </div>
                                                    </div> */}

                                                </div>
                                            </Col>
                                        </Row>
                                    </Form.Group>

                                    <Form.Group className='form-group ' >
                                        <Form.Label>Display as a:</Form.Label>
                                        <Row className='gap-3'>
                                            <Col md={12}>
                                                <div className='card-radio form-input-radio-control active'>
                                                    <div className="card-radio-wrapper">
                                                        <div className='card-radio-input'>
                                                            <div className="radio radio-primary">
                                                                <input type="radio" id='amt1' name='amt' checked />
                                                                <label htmlFor='amt1'>Single Amount</label>
                                                            </div>
                                                        </div>
                                                        {/* <div className='card-radio-details'>
                                                            <div className='card-radio-content'>
                                                                <h6 className='mb-0'>Single Amount</h6>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                    <div className="card-form-radio-input">
                                                        <Form.Group className='form-group mb-0' >
                                                            <Form.Control type="text" placeholder="Enter amount" />
                                                        </Form.Group>
                                                    </div>

                                                </div>
                                            </Col>
                                            <Col md={12}>
                                                <div className='card-radio form-input-radio-control'>
                                                    <div className="card-radio-wrapper">
                                                        <div className='card-radio-input'>
                                                            <div className="radio radio-primary">
                                                                <input type="radio" id='amt2' name='amt' />
                                                                <label htmlFor='amt2'>Range Selection</label>
                                                            </div>
                                                        </div>
                                                        {/* <div className='card-radio-details'>
                                                            <div className='card-radio-content'>
                                                                <h6 className='mb-0'>Range Selection</h6>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                    <div className="card-form-radio-input">

                                                        <Row>
                                                            <Col md={6}>
                                                                <Form.Group className='form-group mb-0' >
                                                                    <div className="form-control-icon  icon-end">
                                                                        <i className='th-outline-percentage-circle'></i>
                                                                        <Form.Control type="text" placeholder="Below to" />
                                                                    </div>
                                                                </Form.Group>
                                                            </Col>
                                                            <Col md={6}>
                                                                <Form.Group className='form-group mb-0' >
                                                                    <div className="form-control-icon icon-end">
                                                                        <i className='th-outline-percentage-circle'></i>
                                                                        <Form.Control type="text" placeholder="Below to" />
                                                                    </div>
                                                                </Form.Group>
                                                            </Col>

                                                        </Row>
                                                    </div>

                                                </div>
                                            </Col>
                                        </Row>
                                    </Form.Group>

                                    <Form.Group className='form-group mb-0'>
                                        <Form.Label>Hide pricing text:</Form.Label>
                                        <Form.Control className='form-control' type="text" placeholder="Enter text here" />
                                    </Form.Group>

                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <div className="card-title">
                                <div className="card-title-left">
                                    <h4>Discount</h4>
                                </div>

                            </div>
                            <Card.Body>
                                <div className="price-rule-card-data">

                                    <Form.Group className='form-group '>
                                        <Form.Label>If linear ft go above</Form.Label>
                                        <Form.Control type="text" className='form-control' placeholder="Enter ft" />
                                    </Form.Group>

                                    <Form.Group className='form-group mb-0'>
                                        <Form.Label>Apply Discount</Form.Label>
                                        <div className="form-control-icon  icon-end">
                                            <i className='th-outline-percentage-circle'></i>
                                            <Form.Control type="text" className='form-control' placeholder="Enter discount" />
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
                                    <h4>Minimum Price</h4>
                                </div>

                            </div>
                            <Card.Body>

                                <Form.Group className='form-group mb-0' >
                                    <Form.Label>Select minimum price option</Form.Label>
                                    <Row className='gap-3'>
                                        <Col md={12}>
                                            <div className='card-radio form-input-radio-control active'>
                                                <div className="card-radio-wrapper">
                                                    <div className='card-radio-input'>
                                                        <div className="radio radio-primary">
                                                            <input type="radio" id='none' name='minimumprice' checked />
                                                            <label htmlFor='none'>None</label>
                                                        </div>
                                                    </div>
                                                    {/* <div className='card-radio-details' >
                                                        <div className='card-radio-content'>
                                                            <h6 className='mb-0'> None</h6>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <div className='card-radio form-input-radio-control'>
                                                <div className="card-radio-wrapper">
                                                    <div className='card-radio-input'>
                                                        <div className="radio radio-primary">
                                                            <input type="radio" id='pricing' name='minimumprice' />
                                                            <label htmlFor='pricing'>Price rules based on length</label>
                                                        </div>
                                                    </div>
                                                    {/* <div className='card-radio-details'>
                                                        <div className='card-radio-content'>
                                                            <h6 className='mb-0'>Price rules based on length</h6>
                                                        </div>
                                                    </div> */}
                                                </div>
                                                <div className="card-form-radio-input">
                                                    <div className="card-form-radio-input-wrapper">
                                                        <Form.Group className='form-group mb-0' >

                                                            <Form.Control type="text" placeholder="Below to ft" />
                                                        </Form.Group>

                                                        <div className="card-form-radio-icon">
                                                            <i className='th-outline-arrow-right-1'></i>
                                                        </div>
                                                        <div className="form-radio-input-inner-wrapper">
                                                            <Form.Group className='form-group mb-0' >
                                                                <div className="form-control-icon icon-start">
                                                                    <i className='th-outline-percentage-circle'></i>
                                                                    <Form.Control type="text" placeholder="Price" />
                                                                </div>
                                                            </Form.Group>
                                                            <button type="button" className="btn-xs text-danger btn btn-icon2 btn-icon-start"><i className="th th-outline-trash"></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="card-form-radio-input-wrapper">
                                                        <Form.Group className='form-group mb-0' >
                                                            <Form.Control type="text" placeholder="From" />
                                                        </Form.Group>
                                                        <Form.Group className='form-group mb-0' >
                                                            <Form.Control type="text" placeholder="To" />
                                                        </Form.Group>

                                                        <div className="card-form-radio-icon">
                                                            <i className='th-outline-arrow-right-1'></i>
                                                        </div>
                                                        <div className="form-radio-input-inner-wrapper">
                                                            <Form.Group className='form-group mb-0' >
                                                                <div className="form-control-icon icon-start">
                                                                    <i className='th-outline-percentage-circle'></i>
                                                                    <Form.Control type="text" placeholder="Price" />
                                                                </div>
                                                            </Form.Group>
                                                            <button type="button" className="btn-xs text-danger btn btn-icon2 btn-icon-start"><i className="th th-outline-trash"></i></button>
                                                        </div>
                                                    </div>
                                                    <Button variant='outline-primary' size='sm' className='btn-icon-start'> <i className='th-outline-add-circle'></i>Add New </Button>

                                                </div>



                                            </div>

                                        </Col>

                                        <Col md={12}>
                                            <div className='card-radio form-input-radio-control'>
                                                <div className="card-radio-wrapper">
                                                    <div className='card-radio-input'>
                                                        <div className="radio radio-primary">
                                                            <input type="radio" id='charges' name='minimumprice' />
                                                            <label htmlFor='charges'>Minimum charge by the dollar amount</label>
                                                        </div>
                                                    </div>
                                                    {/* <div className='card-radio-details'>
                                                        <div className='card-radio-content'>
                                                            <h6 className='mb-0'>Minimum charge by the dollar amount</h6>
                                                        </div>
                                                    </div> */}
                                                </div>
                                                <div className="card-form-radio-input">
                                                    <Form.Group className='form-group mb-0' >
                                                        <div className="form-control-icon icon-end">
                                                            <i className='th-outline-percentage-circle'></i>
                                                            <Form.Control type="text" placeholder="Enter amt" />
                                                        </div>
                                                    </Form.Group>
                                                </div>

                                            </div>
                                        </Col>

                                    </Row>
                                </Form.Group>
                            </Card.Body>
                        </Card>

                        <Card className=''>
                            <div className="card-title">
                                <div className="card-title-left">
                                    <h4>Minimum Price</h4>
                                </div>

                            </div>
                            <Card.Body>

                                <Form.Group className='form-group mb-0' >
                                    <Form.Label>Fence Removal</Form.Label>
                                    <Row className='gap-3'>


                                        <Col md={12}>
                                            <div className='card-radio form-input-radio-control'>
                                                <div className="card-radio-wrapper">
                                                    <div className='card-radio-input'>
                                                        <div className="radio radio-primary">
                                                            <input type="radio" id='fence' name='fence' />
                                                            <label htmlFor='fence'>Offer removal of existing fence?</label>
                                                        </div>
                                                    </div>
                                                    {/* <div className='card-radio-details'>
                                                        <div className='card-radio-content'>
                                                            <h6 className='mb-0'>Offer removal of existing fence?</h6>
                                                        </div>
                                                    </div> */}
                                                </div>
                                                <div className="card-form-radio-input">
                                                    <Form.Group className='form-group mb-0' >
                                                        <div className="form-control-icon icon-end">
                                                            <i className='th-outline-percentage-circle'></i>
                                                            <Form.Control type="text" placeholder="Per linear foot" />
                                                        </div>
                                                    </Form.Group>
                                                </div>

                                            </div>
                                        </Col>












                                    </Row>
                                </Form.Group>

                            </Card.Body>
                        </Card>
                    </Col>



                    <Col md={4} className="price-rule-col">
                        <Card className='mb-3'>
                            <div className="card-title">
                                <div className="card-title-left">
                                    <h4>Distance Pricing</h4>
                                </div>

                            </div>
                            <Card.Body>

                                <Form.Group className='form-group mb-0' >
                                    <Form.Label>Select distance price option</Form.Label>
                                    <Row className='gap-3'>
                                        <Col md={12}>
                                            <div className='card-radio form-input-radio-control active'>
                                                <div className="card-radio-wrapper">
                                                    <div className='card-radio-input'>
                                                        <div className="radio radio-primary">
                                                            <input type="radio" id='distance1' name='distance' checked />
                                                            <label htmlFor='distance1'> None</label>
                                                        </div>
                                                    </div>
                                                    {/* <div className='card-radio-details'>
                                                        <div className='card-radio-content'>
                                                            <h6 className='mb-0'> None</h6>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </Col>

                                        <Col md={12}>
                                            <div className='card-radio form-input-radio-control'>
                                                <div className="card-radio-wrapper">
                                                    <div className='card-radio-input'>
                                                        <div className="radio radio-primary">
                                                            <input type="radio" id='distance2' name='distance' />
                                                            <label htmlFor='distance2'>Price rules based on distance</label>
                                                        </div>
                                                    </div>
                                                    {/* <div className='card-radio-details'>
                                                        <div className='card-radio-content'>
                                                            <h6 className='mb-0'>Price rules based on distance</h6>
                                                        </div>
                                                    </div> */}
                                                </div>
                                                <div className="card-form-radio-input">
                                                    <div className="card-form-radio-input-wrapper">
                                                        <Form.Group className='form-group mb-0' >
                                                            <Form.Control type="text" placeholder="From miles" />
                                                        </Form.Group>
                                                        <Form.Group className='form-group mb-0' >
                                                            <Form.Control type="text" placeholder="To miles" />
                                                        </Form.Group>

                                                        <div className="card-form-radio-icon">
                                                            <i className='th-outline-arrow-right-1'></i>
                                                        </div>
                                                        <div className="form-radio-input-inner-wrapper">
                                                            <Form.Group className='form-group mb-0' >
                                                                <div className="form-control-icon icon-start">
                                                                    <i className='th-outline-percentage-circle'></i>
                                                                    <Form.Control type="text" placeholder="Price" />
                                                                </div>
                                                            </Form.Group>
                                                            <button type="button" className="btn-xs text-danger btn btn-icon2 btn-icon-start"><i className="th th-outline-trash"></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="card-form-radio-input-wrapper">
                                                        <Form.Group className='form-group mb-0' >

                                                            <Form.Control type="text" placeholder="Job is above miles" />
                                                        </Form.Group>

                                                        <div className="card-form-radio-icon">
                                                            <i className='th-outline-arrow-right-1'></i>
                                                        </div>
                                                        <div className="form-radio-input-inner-wrapper">
                                                            <Form.Group className='form-group mb-0' >
                                                                <div className="form-control-icon icon-start">
                                                                    <i className='th-outline-percentage-circle'></i>
                                                                    <Form.Control type="text" placeholder="Price" />
                                                                </div>
                                                            </Form.Group>
                                                            <button type="button" className="btn-xs text-danger btn btn-icon2 btn-icon-start"><i className="th th-outline-trash"></i></button>
                                                        </div>
                                                    </div>

                                                    <Button variant='outline-primary' size='sm' className='btn-icon-start'> <i className='th-outline-add-circle'></i>Add New </Button>

                                                </div>



                                            </div>

                                        </Col>














                                    </Row>
                                </Form.Group>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div >



        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PricingRules)