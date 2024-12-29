import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

const Location = (props) => {
    return (
        <>
            <Card className='mb-3'>
                <div className="card-title">
                    <div className="card-title-left">
                        <h4>Service Area <span>(Draw area want to selection)</span></h4>
                    </div>

                </div>
                <Card.Body>
                    <Row>
                        <Col md={6}>
                            <div className="enter-location">
                                <Form.Group className="form-group mb-0">
                                    <Form.Label>Enter Location</Form.Label>
                                    <Form.Control className='form-control' type="text" />
                                </Form.Group>
                                <div className="button-group">
                                    <Button variant='light-primary' className='btn-icon-start'> <i className='th-outline-search-normal-1'></i> Search</Button>
                                    <Button variant='gray'>Cancel</Button>
                                </div>
                            </div>

                            <div className="location-map">
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.91132803712!2d72.80130567587555!3d21.195681182023346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dd55dfa6fd9%3A0xd0f71b196c136d72!2sTechHive!5e0!3m2!1sen!2sin!4v1721305048433!5m2!1sen!2sin" width="100%" height="500"></iframe> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.0498061808084!2d-73.9198146730502!3d40.81352988713837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5c481958515%3A0x836ddb8f95e0bd5d!2sLa%20Morada!5e0!3m2!1sen!2sin!4v1723570635217!5m2!1sen!2sin" width="600" height="450" ></iframe>
                            </div>

                            <Button variant='gray' className='btn-icon-start'> <i className='th-close'></i> Clear Search</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Location)