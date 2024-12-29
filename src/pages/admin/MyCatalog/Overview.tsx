import React, { useState } from 'react'
import { Accordion, Button, Card, Col, Form, Modal, OverlayTrigger, Row, Table, Tooltip } from 'react-bootstrap'
import { connect } from 'react-redux'
import defaultAvatar from '../../../assets/images/avatar-default.svg';
import avatar1 from '../../../assets/images/avatar-default.svg'
import avatar2 from '../../../assets/images/avatar-2.jpg'
import avatar3 from '../../../assets/images/avatar-3.jpg'

const Overview = (props) => {
    let dummyItems = ['', '', ''];


    return (
        <>
            <Accordion defaultActiveKey="0" className='accordion-group'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <div className='accordion-header-left'>
                            <div className="tbl-profile-container">
                                <div className="tbl-profile-image">
                                    <img src={avatar1} alt="avatar1" />
                                </div>
                                <div className="tbl-profile-content">
                                    <h6>Aluminum</h6>
                                    <p>3 Items</p>
                                </div>
                            </div>
                        </div>
                        <div className='accordion-header-right'>
                            <Button variant='icon2' className='btn-xs text-default' ><i className='th-outline-edit'></i></Button>
                            <Button variant='icon2' className='btn-xs text-danger'><i className='th-outline-trash'></i></Button>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Card className='card-tables mb-0'>
                            <Card.Body className='p-0'>
                                <Table responsive bordered hover className='table-theme table-center'>
                                    <thead>
                                        <tr>
                                            <th className='text-start' >Style</th>
                                            <th className='text-start' >Color</th>
                                            <th className='text-start' >Height</th>
                                            <th className='text-start' >$/Unit</th>
                                            <th className='text-start' >Length/Unit</th>
                                            <th className='text-start' >$/Gate</th>
                                            <th className='text-center' >Hide Price</th>
                                            <th className='text-right' >Action</th>

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
                                                    <td>
                                                        <div className="form-group form-group-tbl-dropdown">
                                                            <Form.Select className='form-select' aria-label="Default select example">
                                                                <option>Tan</option>
                                                                <option value="1">Tan One</option>
                                                                <option value="2">Tan Two</option>
                                                                <option value="3">Tan Three</option>
                                                            </Form.Select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group form-group-tbl-dropdown">
                                                            <Form.Select className='form-select' aria-label="Default select example">
                                                                <option>4ft</option>
                                                                <option value="1">5ft</option>
                                                                <option value="2">6ft</option>
                                                                <option value="3">7ft</option>
                                                            </Form.Select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        80
                                                    </td>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td>
                                                        400
                                                    </td>
                                                    <td className='tbl-checkbox'>
                                                        <div className="checkbox checkbox-primary checkbox-small">
                                                            <input type="checkbox" id={`memberchk-${index}`} className="material-inputs filled-in" />
                                                            <label htmlFor={`memberchk-${index}`}></label>
                                                        </div>
                                                    </td>
                                                    <td className=''>
                                                        <button type="button" className="btn-xs text-primary btn btn-icon2 btn-icon-start"><i className="th th-outline-trash"></i> Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                        <tr>
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
                                            <td>
                                                <div className="form-group form-group-tbl-dropdown">
                                                    <Form.Select className='form-select' aria-label="Default select example">
                                                        <option>Choose Color</option>
                                                        <option value="1">Tan One</option>
                                                        <option value="2">Tan Two</option>
                                                        <option value="3">Tan Three</option>
                                                    </Form.Select>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-group form-group-tbl-dropdown">
                                                    <Form.Select className='form-select' aria-label="Default select example">
                                                        <option>Add Height</option>
                                                        <option value="1">5ft</option>
                                                        <option value="2">6ft</option>
                                                        <option value="3">7ft</option>
                                                    </Form.Select>
                                                </div>
                                            </td>
                                            <td>
                                                <Form.Group className="form-group form-group-sm" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type='text' className='form-control' />
                                                </Form.Group>
                                            </td>
                                            <td>
                                                <Form.Group className="form-group form-group-sm" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type='text' className='form-control' />
                                                </Form.Group>
                                            </td>
                                            <td>
                                                <Form.Group className="form-group form-group-sm" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type='text' className='form-control' />
                                                </Form.Group>
                                            </td>
                                            <td className='tbl-checkbox'>
                                                <div className="checkbox checkbox-primary checkbox-small">
                                                    <input type="checkbox" id="memberchk-1" className="material-inputs filled-in" />
                                                    <label htmlFor="memberchk-1"></label>
                                                </div>
                                            </td>
                                            <td className='tbl-action'>
                                                <div className="tbl-action-group">
                                                    <button type="button" className="btn-xs text-secondary btn btn-icon2 btn-icon-start"><i className="th-outline-tick-circle"></i> Save</button>
                                                    <button type="button" className="btn-xs text-danger btn btn-icon2 btn-icon-start"><i className="th-outline-close-circle"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* <tr>
                                            <td colSpan={20}>
                                                <div className='tbl-no-records'>
                                                    <p>{NO_RECORD_FOUND_MSG}</p>
                                                </div>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <div className='accordion-header-left'>
                            <div className="tbl-profile-container">
                                <div className="tbl-profile-image">
                                    <img src={avatar1} alt="avatar1" />
                                </div>
                                <div className="tbl-profile-content">
                                    <h6>Chain Link</h6>
                                    <p>2 Items</p>
                                </div>
                            </div>
                        </div>
                        <div className='accordion-header-right'>
                            <Button variant='icon2' className='btn-xs text-default'><i className='th-outline-edit'></i></Button>
                            <Button variant='icon2' className='btn-xs text-danger'><i className='th-outline-trash'></i></Button>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Card className='card-tables mb-0'>
                            <Card.Body className='p-0'>
                                <Table responsive bordered hover className='table-theme table-center'>
                                    <thead>
                                        <tr>
                                            <th className='text-start' >Style</th>
                                            <th className='text-start' >Color</th>
                                            <th className='text-start' >Height</th>
                                            <th className='text-start' >$/Unit</th>
                                            <th className='text-start' >Length/Unit</th>
                                            <th className='text-start' >$/Gate</th>
                                            <th className='text-center' >Hide Price</th>
                                            <th className='text-right' >Action</th>

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
                                                    <td>
                                                        <div className="form-group form-group-tbl-dropdown">
                                                            <Form.Select className='form-select' aria-label="Default select example">
                                                                <option>Tan</option>
                                                                <option value="1">Tan One</option>
                                                                <option value="2">Tan Two</option>
                                                                <option value="3">Tan Three</option>
                                                            </Form.Select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group form-group-tbl-dropdown">
                                                            <Form.Select className='form-select' aria-label="Default select example">
                                                                <option>4ft</option>
                                                                <option value="1">5ft</option>
                                                                <option value="2">6ft</option>
                                                                <option value="3">7ft</option>
                                                            </Form.Select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        80
                                                    </td>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td>
                                                        400
                                                    </td>
                                                    <td className='tbl-checkbox'>
                                                        <div className="checkbox checkbox-primary checkbox-small">
                                                            <input type="checkbox" id={`memberchk-${index}`} className="material-inputs filled-in" />
                                                            <label htmlFor={`memberchk-${index}`}></label>
                                                        </div>
                                                    </td>
                                                    <td className=''>
                                                        <button type="button" className="btn-xs text-primary btn btn-icon2 btn-icon-start"><i className="th th-outline-trash"></i> Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                        {/* <tr>
                                            <td colSpan={20}>
                                                <div className='tbl-no-records'>
                                                    <p>{NO_RECORD_FOUND_MSG}</p>
                                                </div>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <div className='accordion-header-left'>
                            <div className="tbl-profile-container">
                                <div className="tbl-profile-image">
                                    <img src={avatar1} alt="avatar1" />
                                </div>
                                <div className="tbl-profile-content">
                                    <h6>Iron</h6>
                                    <p>3 Items</p>
                                </div>
                            </div>
                        </div>
                        <div className='accordion-header-right'>
                            <Button variant='icon2' className='btn-xs text-default'><i className='th-outline-edit'></i></Button>
                            <Button variant='icon2' className='btn-xs text-danger'><i className='th-outline-trash'></i></Button>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Card className='card-tables mb-0'>
                            <Card.Body className='p-0'>
                                <Table responsive bordered hover className='table-theme table-center'>
                                    <thead>
                                        <tr>
                                            <th className='text-start' >Style</th>
                                            <th className='text-start' >Color</th>
                                            <th className='text-start' >Height</th>
                                            <th className='text-start' >$/Unit</th>
                                            <th className='text-start' >Length/Unit</th>
                                            <th className='text-start' >$/Gate</th>
                                            <th className='text-center' >Hide Price</th>
                                            <th className='text-right' >Action</th>

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
                                                    <td>
                                                        <div className="form-group form-group-tbl-dropdown">
                                                            <Form.Select className='form-select' aria-label="Default select example">
                                                                <option>Tan</option>
                                                                <option value="1">Tan One</option>
                                                                <option value="2">Tan Two</option>
                                                                <option value="3">Tan Three</option>
                                                            </Form.Select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group form-group-tbl-dropdown">
                                                            <Form.Select className='form-select' aria-label="Default select example">
                                                                <option>4ft</option>
                                                                <option value="1">5ft</option>
                                                                <option value="2">6ft</option>
                                                                <option value="3">7ft</option>
                                                            </Form.Select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        80
                                                    </td>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td>
                                                        400
                                                    </td>
                                                    <td className='tbl-checkbox'>
                                                        <div className="checkbox checkbox-primary checkbox-small">
                                                            <input type="checkbox" id={`memberchk-${index}`} className="material-inputs filled-in" />
                                                            <label htmlFor={`memberchk-${index}`}></label>
                                                        </div>
                                                    </td>
                                                    <td className=''>
                                                        <button type="button" className="btn-xs text-primary btn btn-icon2 btn-icon-start"><i className="th th-outline-trash"></i> Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                        {/* <tr>
                                            <td colSpan={20}>
                                                <div className='tbl-no-records'>
                                                    <p>{NO_RECORD_FOUND_MSG}</p>
                                                </div>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <div className='accordion-header-left'>
                            <div className="tbl-profile-container">
                                <div className="tbl-profile-image">
                                    <img src={avatar1} alt="avatar1" />
                                </div>
                                <div className="tbl-profile-content">
                                    <h6>Vinyl</h6>
                                    <p>6 Items</p>
                                </div>
                            </div>
                        </div>
                        <div className='accordion-header-right'>
                            <Button variant='icon2' className='btn-xs text-default'><i className='th-outline-edit'></i></Button>
                            <Button variant='icon2' className='btn-xs text-danger'><i className='th-outline-trash'></i></Button>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Card className='card-tables mb-0'>
                            <Card.Body className='p-0'>
                                <Table responsive bordered hover className='table-theme table-center'>
                                    <thead>
                                        <tr>
                                            <th className='text-start' >Style</th>
                                            <th className='text-start' >Color</th>
                                            <th className='text-start' >Height</th>
                                            <th className='text-start' >$/Unit</th>
                                            <th className='text-start' >Length/Unit</th>
                                            <th className='text-start' >$/Gate</th>
                                            <th className='text-center' >Hide Price</th>
                                            <th className='text-right' >Action</th>

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
                                                    <td>
                                                        <div className="form-group form-group-tbl-dropdown">
                                                            <Form.Select className='form-select' aria-label="Default select example">
                                                                <option>Tan</option>
                                                                <option value="1">Tan One</option>
                                                                <option value="2">Tan Two</option>
                                                                <option value="3">Tan Three</option>
                                                            </Form.Select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group form-group-tbl-dropdown">
                                                            <Form.Select className='form-select' aria-label="Default select example">
                                                                <option>4ft</option>
                                                                <option value="1">5ft</option>
                                                                <option value="2">6ft</option>
                                                                <option value="3">7ft</option>
                                                            </Form.Select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        80
                                                    </td>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td>
                                                        400
                                                    </td>
                                                    <td className='tbl-checkbox'>
                                                        <div className="checkbox checkbox-primary checkbox-small">
                                                            <input type="checkbox" id={`memberchk-${index}`} className="material-inputs filled-in" />
                                                            <label htmlFor={`memberchk-${index}`}></label>
                                                        </div>
                                                    </td>
                                                    <td className=''>
                                                        <button type="button" className="btn-xs text-primary btn btn-icon2 btn-icon-start"><i className="th th-outline-trash"></i> Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                        {/* <tr>
                                            <td colSpan={20}>
                                                <div className='tbl-no-records'>
                                                    <p>{NO_RECORD_FOUND_MSG}</p>
                                                </div>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header className='add-overview-type'>
                        <div className='accordion-header-left'>
                            <div className="tbl-profile-container">
                                <div className="tbl-profile-image">
                                    <i className='th-outline-edit'></i>
                                </div>
                                <div className="tbl-profile-content">
                                    <Form.Group className="form-group form-group-sm mb-0">
                                        <Form.Control type='text' className='form-control form-control-sm' placeholder='Enter Type Name' />
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                        <div className='accordion-header-right'>
                            <Button variant="light-primary" className='btn-icon-start btn-xs'><i className='th th-outline-add-circle'></i>Add Variant</Button>
                            <button type="button" className="btn-xs text-secondary btn btn-icon2 btn-icon-start"><i className="th-outline-tick-circle"></i> Save</button>
                            <Button variant='icon2' className='btn-xs text-default'><i className='th-close'></i></Button>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Card className='card-tables mb-0'>
                            <Card.Body className='p-0'>
                                <Table responsive bordered hover className='table-theme table-center'>
                                    <thead>
                                        <tr>
                                            <th className='text-start' >Style</th>
                                            <th className='text-start' >Color</th>
                                            <th className='text-start' >Height</th>
                                            <th className='text-start' >$/Unit</th>
                                            <th className='text-start' >Length/Unit</th>
                                            <th className='text-start' >$/Gate</th>
                                            <th className='text-center' >Hide Price</th>
                                            <th className='text-right' >Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
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
                                            <td>
                                                <div className="form-group form-group-tbl-dropdown">
                                                    <Form.Select className='form-select' aria-label="Default select example">
                                                        <option>Choose Color</option>
                                                        <option value="1">Tan One</option>
                                                        <option value="2">Tan Two</option>
                                                        <option value="3">Tan Three</option>
                                                    </Form.Select>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-group form-group-tbl-dropdown">
                                                    <Form.Select className='form-select' aria-label="Default select example">
                                                        <option>Add Height</option>
                                                        <option value="1">5ft</option>
                                                        <option value="2">6ft</option>
                                                        <option value="3">7ft</option>
                                                    </Form.Select>
                                                </div>
                                            </td>
                                            <td>
                                                <Form.Group className="form-group form-group-sm" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type='text' className='form-control' />
                                                </Form.Group>
                                            </td>
                                            <td>
                                                <Form.Group className="form-group form-group-sm" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type='text' className='form-control' />
                                                </Form.Group>
                                            </td>
                                            <td>
                                                <Form.Group className="form-group form-group-sm" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type='text' className='form-control' />
                                                </Form.Group>
                                            </td>
                                            <td className='tbl-checkbox'>
                                                <div className="checkbox checkbox-primary checkbox-small">
                                                    <input type="checkbox" id="memberchk-1" className="material-inputs filled-in" />
                                                    <label htmlFor="memberchk-1"></label>
                                                </div>
                                            </td>
                                            <td className='tbl-action'>
                                                <div className="tbl-action-group">
                                                    <button type="button" className="btn-xs text-secondary btn btn-icon2 btn-icon-start"><i className="th-outline-tick-circle"></i> Save</button>
                                                    <button type="button" className="btn-xs text-danger btn btn-icon2 btn-icon-start"><i className="th-outline-close-circle"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* <tr>
                                            <td colSpan={20}>
                                                <div className='tbl-no-records'>
                                                    <p>{NO_RECORD_FOUND_MSG}</p>
                                                </div>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Overview)