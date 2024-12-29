import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import avatar1 from '../../../assets/images/avatar-1.jpg'
import Select from "react-select";



const ProfileInfo = (props) => {
    return (
        <>

            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <div className="admin-user-profile">

                                <div className="admin-user-profile-image">
                                    <img src={avatar1} alt="avatar1" />
                                </div>
                                <div className="admin-user-profile-details">
                                    <div className="admin-user-profile-name">
                                        <h4>Wong Hashitoma</h4>
                                    </div>

                                    <div className="admin-user-profile-action">

                                        <Button variant="light-primary" size='sm' className='btn-icon-start btn-input'>
                                            <i className='th-outline-export'></i>
                                            <input type='file' accept="image/png, image/jpeg,image/jpg" /> Change Profile</Button>

                                    </div>
                                </div>
                            </div>



                            <Row>
                                <Col md={6}>
                                    <Form.Group className="form-group">
                                        <Form.Label>First Name*</Form.Label>
                                        <Form.Control type="text" placeholder="Clair"

                                        />

                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="form-group">
                                        <Form.Label>Last Name*</Form.Label>
                                        <Form.Control type="text" placeholder="Wilson"
                                        />

                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group className="form-group phone-number-group" >
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="number" placeholder="Enter phone no" />
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group className="form-group">
                                        <Form.Label className='mb-0'>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group className="form-group">
                                        <Form.Label>Address line</Form.Label>
                                        <Form.Control type="text" placeholder="Address line"
                                        />
                                    </Form.Group>
                                </Col>

                                <Col md={4}>
                                    <Form.Group className="form-group">
                                        <Form.Label>State</Form.Label>
                                        <Select

                                            placeholder={<div>Select state </div>}
                                            isClearable={true}

                                            className="react-select-container"
                                        />

                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="form-group">
                                        <Form.Label>City</Form.Label>
                                        <Select
                                            placeholder={<div>Select city </div>}
                                            className="react-select-container"
                                        />

                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="form-group">
                                        <Form.Label>Zipcode</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>

                                </Col>
                            </Row>

                            <div className="button-group mt-3">
                                <Button variant='primary' className='btn-icon-start'> <i className='th-outline-tick-circle'></i> Save Changes </Button>
                                <Button variant='white' >  Cancel </Button>
                            </div>


                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)