import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

const ChangePassword = (props) => {
    const [eyeToggle, setEyeToggle] = useState<boolean>(false);
    return (
        <Row>
            <Col md={4}>
                <Card>
                    <Card.Body>

                        <Form.Group className="form-group">
                            <Form.Label>Current Password</Form.Label>
                            <div className="form-control-icon  form-control-password icon-start">
                                <i className='th-outline-lock'></i>
                                <Form.Control type={eyeToggle ? "text" : "password"} placeholder="Enter Password" />
                                {eyeToggle ? (
                                    <button
                                        type='button'
                                        className=" btn-password"
                                        onClick={() => { setEyeToggle(!eyeToggle) }}
                                    >
                                        <i className="th-outline-eye"></i>
                                    </button>
                                ) : (
                                    <button
                                        type='button'
                                        className=" btn-password"
                                        onClick={() => { setEyeToggle(!eyeToggle) }}
                                    >
                                        <i className="th-outline-eye-slash"></i>
                                    </button>
                                )}
                            </div>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>New Password</Form.Label>
                            <div className="form-control-icon  form-control-password icon-start">
                                <i className='th-outline-lock'></i>
                                <Form.Control type={eyeToggle ? "text" : "password"} placeholder="Enter Password" />
                                {eyeToggle ? (
                                    <button
                                        type='button'
                                        className=" btn-password"
                                        onClick={() => { setEyeToggle(!eyeToggle) }}
                                    >
                                        <i className="th-outline-eye"></i>
                                    </button>
                                ) : (
                                    <button
                                        type='button'
                                        className=" btn-password"
                                        onClick={() => { setEyeToggle(!eyeToggle) }}
                                    >
                                        <i className="th-outline-eye-slash"></i>
                                    </button>
                                )}
                            </div>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Confirm Password</Form.Label>
                            <div className="form-control-icon  form-control-password icon-start">
                                <i className='th-outline-lock'></i>
                                <Form.Control type={eyeToggle ? "text" : "password"} placeholder="Enter Password" />
                                {eyeToggle ? (
                                    <button
                                        type='button'
                                        className=" btn-password"
                                        onClick={() => { setEyeToggle(!eyeToggle) }}
                                    >
                                        <i className="th-outline-eye"></i>
                                    </button>
                                ) : (
                                    <button
                                        type='button'
                                        className=" btn-password"
                                        onClick={() => { setEyeToggle(!eyeToggle) }}
                                    >
                                        <i className="th-outline-eye-slash"></i>
                                    </button>
                                )}
                            </div>
                        </Form.Group>

                        <div className="button-group mt-3">
                            <Button variant='primary' className='btn-icon-start'> <i className='th-outline-tick-circle'></i> Save Changes </Button>
                            <Button variant='white' >  Cancel </Button>
                        </div>


                    </Card.Body>
                </Card>
            </Col>
        </Row >
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)