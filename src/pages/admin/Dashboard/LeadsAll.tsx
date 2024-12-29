import React, { useState } from 'react'
import { Button, Card, Col, Form, Modal, Row, Table } from 'react-bootstrap';
import { connect } from 'react-redux'
import mapThumb from '../../../assets/images/map-thumb.png';
import { NavLink } from 'react-router-dom';
import avatar1 from '../../../assets/images/avatar-1.jpg'




const LeadsAll = (props) => {
    let dummyItems = ['', '', ''];



    const [showAddActivity, setShow] = useState(false);
    const handleAddActivityClose = () => setShow(false);
    const handleAddActivityShow = () => setShow(true);


    const [showLeadsDetails, setLeadsDetailsShow] = useState(false);
    const handleLeadsDetailsClose = () => setLeadsDetailsShow(false);
    const handleLeadsDetailsShow = () => setLeadsDetailsShow(true);
    return (
        <>
            <Table responsive hover className='table-theme table-theme-borderless'>
                <thead>
                    <tr>
                        <th className='text-start' >Customer Information</th>
                        <th className='text-start' >Date & Time</th>
                        <th className='text-start' >Status</th>
                        <th className='text-start' >Last Note</th>
                        <th className='text-right' >Action</th>

                    </tr>
                </thead>
                <tbody>
                    {dummyItems.map((item, index) => {
                        return (
                            <tr key={index} onClick={handleLeadsDetailsShow}>
                                <td>
                                    <div className="tbl-customer-container">
                                        <div className="tbl-customer-image">
                                            <img src={mapThumb} alt="mapThumb" />
                                        </div>
                                        <div className="tbl-customer-content">
                                            <h6>Robert Downey Jr. </h6>
                                            <NavLink to="">(323) 423-4242 </NavLink>
                                            <p>$6,450</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    28/06/2024 <br />
                                    1:56 PM
                                </td>
                                <td>
                                    <div className='badge badge-style2 badge-info'>Sold</div>
                                    {/* <div className='badge badge-style2 badge-warning'>Contacted</div>
                                    <div className='badge badge-style2 badge-secondary'>Not Contacted</div>
                                    <div className='badge badge-style2 badge-success'>Scheduled</div>
                                    <div className='badge badge-style2 badge-danger'>Dead</div> */}
                                </td>
                                <td>sdfsdf sdfsdf sdfs</td>
                                <td className=''>
                                    <button type="button" className=" text-primary btn btn-icon2 btn-icon-start"><i className="th th-outline-map"></i></button>
                                    <button type="button" className=" text-secondary btn btn-icon2 btn-icon-start"><i className="th th-outline-map-1"></i></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>



            <Modal show={showLeadsDetails} size='xl' className='modal-theme leads-details' centered scrollable onHide={handleLeadsDetailsClose}>
                <Modal.Header >
                    <Modal.Title>Estimate ID: 1585452545</Modal.Title>
                    <Button variant="close" onClick={handleLeadsDetailsClose}><i className='th th-close'></i></Button>
                </Modal.Header>
                <Modal.Body>
                    <div className="">
                        <div className="leads-details-card">
                            <div className="leads-details-image">
                                <img src={mapThumb} alt="" />
                            </div>
                            <div className="leads-details-content">
                                <div className="leads-details-content-left">
                                    <h4>Robert Downey Jr.</h4>
                                    <NavLink to=""> <i className='th-outline-call-calling'></i> (323) 423-4242</NavLink>
                                    <NavLink to=""> <i className='th-outline-sms'></i> testies58554528@gmail.com</NavLink>
                                    <NavLink to=""> <i className='th-outline-location'></i> 12345 Wescott Drive Midlothian VA 23112</NavLink>

                                    <div className="button-group">
                                        <Button variant='primary' className='btn-icon-start'> <i className='th-outline-map-1'></i> Get Direction</Button>
                                        <Button variant='secondary' className='btn-icon-start'> <i className='th-outline-gps'></i> Aerial View</Button>
                                        <Button variant='warning' className='btn-icon-start'> <i className='th-outline-map'></i> Street View</Button>
                                    </div>
                                </div>
                                <div className="leads-details-content-right">
                                    <div className="leads-details-action">
                                        <div className="button-group mt-0">
                                            <Button variant='primary' className='btn-xs  btn-icon-start'> <i className='th-outline-edit'></i> Edit</Button>
                                            <Button variant='white' className='btn-xs  btn-icon'> <i className='th-outline-printer text-secondary'></i></Button>
                                            <Button variant='white' className='btn-xs  btn-icon'> <i className='th-outline-trash text-danger'></i></Button>
                                        </div>
                                    </div>

                                    <Form.Group className="form-group  mt-3" controlId="formBasicEmail">
                                        <Form.Select className='form-control ' aria-label="Default select example">
                                            <option>Status</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>

                        <Row>
                            <Col md={8}>
                                <Card className='mb-3'>
                                    <div className="card-title border-0">
                                        <div className="card-title-left">
                                            <h4>Estimate</h4>
                                        </div>
                                        <div className="card-title-left">
                                            <Button variant='gray' className='btn-xs btn-icon-start' > <i className='bi bi-download'></i> Export Excel</Button>
                                        </div>

                                    </div>
                                    <Card.Body className='pt-0'>

                                        <Table responsive hover className='table-theme table-center outer-border'>
                                            <thead>
                                                <tr>
                                                    <th className='text-start' >Item</th>
                                                    <th className='text-start' >Units</th>
                                                    <th className='text-start' >Price</th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dummyItems.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                <div className="tbl-profile-container">
                                                                    <div className="tbl-profile-image">
                                                                        <img src={avatar1} alt="avatar1" />
                                                                    </div>
                                                                    <div className="tbl-profile-content">
                                                                        <h6>2 Rail Ornamental </h6>
                                                                        <p>Aluminum</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className='text-start'>
                                                                151 FT
                                                            </td>
                                                            <td className='text-start text-secondary'>
                                                                $6,040
                                                            </td>

                                                        </tr>
                                                    )
                                                })}

                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td>
                                                        Total
                                                    </td>
                                                    <td>
                                                        -
                                                    </td>
                                                    <td className='text-secondary'>
                                                        $15,900
                                                    </td>

                                                </tr>
                                            </tfoot>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className='mb-3'>
                                    <div className="card-title border-0">
                                        <div className="card-title-left">
                                            <h4>Activity</h4>
                                        </div>
                                        <div className="card-title-left">
                                            <Button variant='gray' className='btn-xs btn-icon-start' onClick={handleAddActivityShow}> <i className='th-outline-add-circle'></i> Add New</Button>
                                        </div>

                                    </div>
                                    <Card.Body className='pt-0'>
                                        <div className="activity-wrapper">
                                            <div className="activity">
                                                <div className="activity-icon btn-icon btn-sm btn-light-secondary">
                                                    <i className='th-outline-flag'></i>
                                                </div>
                                                <div className="activity-content">
                                                    <div className="activity-card">
                                                        <NavLink to="" onClick={handleAddActivityShow}> <i className='th-outline-edit'></i> </NavLink>
                                                        <h6>Waiting for clients estimate</h6>
                                                        <div className="activity-user">
                                                            <img src={avatar1} alt="avatar1" />
                                                            Robert Downey Jr.
                                                        </div>
                                                    </div>
                                                    <p>01/06/2024 9:30 am</p>
                                                </div>
                                            </div>
                                            <div className="activity">
                                                <div className="activity-icon btn-icon btn-sm btn-light-secondary">
                                                    <i className='th-outline-flag'></i>
                                                </div>
                                                <div className="activity-content">
                                                    <div className="activity-card">
                                                        <NavLink to="" onClick={handleAddActivityShow}> <i className='th-outline-edit'></i> </NavLink>
                                                        <h6>Waiting for clients estimate</h6>
                                                        <div className="activity-user">
                                                            <img src={avatar1} alt="avatar1" />
                                                            Robert Downey Jr.
                                                        </div>
                                                    </div>
                                                    <p>01/06/2024 9:30 am</p>
                                                </div>
                                            </div>
                                            <div className="activity">
                                                <div className="activity-icon btn-icon btn-sm btn-light-secondary">
                                                    <i className='th-outline-flag'></i>
                                                </div>
                                                <div className="activity-content">
                                                    <div className="activity-card">
                                                        <NavLink to="" onClick={handleAddActivityShow}> <i className='th-outline-edit'></i> </NavLink>
                                                        <h6>Waiting for clients estimate</h6>
                                                        <div className="activity-user">
                                                            <img src={avatar1} alt="avatar1" />
                                                            Robert Downey Jr.
                                                        </div>
                                                    </div>
                                                    <p>01/06/2024 9:30 am</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
            </Modal>



            <Modal show={showAddActivity} className='modal-theme' centered scrollable onHide={handleAddActivityClose}>
                <Modal.Header >
                    <Modal.Title>Add Activity</Modal.Title>
                    <Button variant="close" onClick={handleLeadsDetailsClose}><i className='th th-close'></i></Button>
                </Modal.Header>
                <Modal.Body>
                    <div className="">
                        <Form.Group className="form-group" >
                            <Form.Label>Select Date</Form.Label>
                            <div className="form-control-icon icon-end">
                                <i className='th-outline-calendar-1'></i>
                                <Form.Control type="text" className='form-control' placeholder="Enter DD/MM/YYYY" />
                            </div>
                        </Form.Group>
                        <Form.Group className="form-group" >
                            <Form.Label>Note</Form.Label>
                            <Form.Control className='form-control' as="textarea" placeholder="Add your note here" rows={3} />
                        </Form.Group>


                    </div>
                </Modal.Body>
                <Modal.Footer className='justify-content-end'>
                    <div className="button-group">
                        <Button variant="white" onClick={handleAddActivityClose}>
                            Close
                        </Button>
                        <Button variant="primary" className='btn-icon-start' onClick={handleAddActivityClose}>
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

export default connect(mapStateToProps, mapDispatchToProps)(LeadsAll)