import React, { useState } from 'react'
import { Button, Form, } from 'react-bootstrap'
import { connect } from 'react-redux'
import DatePicker from "react-datepicker";
import Contact from './Contact';
import Project from './Project';

const CompletedReports = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <>
            <div className='page-filter'>
                <div className='page-filter-left'>
                    <div className='nav-tabs-outer nav-tabs-style1'>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="true">
                                    <i className='th-outline-personalcard'></i> Contact
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="project-tab" data-bs-toggle="tab" data-bs-target="#project-tab-pane" type="button" role="tab" aria-controls="project-tab-pane" aria-selected="false">
                                    <i className='th-outline-box'></i>Project
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="page-filter-form-group">
                        <Form.Group className="form-group form-group-sm mb-0" >
                            <div className="form-control-icon icon-end">
                                <DatePicker
                                    className="form-control form-control-sm"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                />
                                <i className='th-outline-calendar-1'></i>
                            </div>
                        </Form.Group>
                        -
                        <Form.Group className="form-group form-group-sm mb-0" >
                            <div className="form-control-icon icon-end">
                                <DatePicker
                                    className="form-control form-control-sm"
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                />
                                <i className='th-outline-calendar-1'></i>
                            </div>
                        </Form.Group>
                    </div>
                    <Form.Group className="form-group form-group-sm mb-0" >
                        <Form.Select className='form-control form-select-sm' >
                            <option>Source</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="form-group form-group-sm mb-0" >
                        <Form.Control type="text" className='form-control form-control-sm' placeholder="Location" />
                    </Form.Group>
                    <Form.Group className="form-group form-group-sm mb-0" >
                        <Form.Control type="text" className='form-control form-control-sm' placeholder="Zip code" />
                    </Form.Group>
                    <Form.Group className="form-group form-group-sm mb-0" >
                        <Form.Select className='form-control form-select-sm' >
                            <option>Status</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="form-group form-group-sm mb-0" >
                        <Form.Select className='form-control form-select-sm' >
                            <option>Progress</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>

                    <Button variant='light-danger' className='btn-icon btn-sm'> <i className='th-bold-filter'></i> </Button>
                    <Button variant='gray' className='btn-icon btn-sm'> <i className='th-outline-refresh-circle'></i> </Button>

                </div>
                <div className='page-filter-right'>
                    <div className='button-dropdown-group'>
                        <Button variant='white' size='sm' className='btn-left btn-icon-start'><i className='th-outline-refresh-2'></i> Auto</Button>
                        <div className="dropdown">
                            <button className="btn btn-white btn-icon btn-sm btn-right" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className='th th-outline-arrow-down-1'></i></button>
                            <ul className="dropdown-menu">
                                {/* <li><a className="dropdown-item"><i className='th th-outline-folder-minus'></i>New Goal</a></li>
                                        <li><button type='button' className="dropdown-item"><i className='th th-outline-folder-minus'></i>New Theme Group</button></li> */}
                            </ul>
                        </div>
                    </div>

                    <div className='nav-tabs-outer nav-tabs-style3'>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <button className="nav-link active" id="contact-tab" type="button" >
                                    <i className='th-outline-grid-2'></i> Grid
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" type="button" >
                                    <i className='th-outline-map'></i>Map
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='nav-tabs-outer nav-tabs-style1'>


                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade  px-0 pb-0 show active" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab">

                        <Contact />

                    </div>
                    <div className="tab-pane fade px-0 pb-0" id="project-tab-pane" role="tabpanel" aria-labelledby="project-tab">
                        <Project />
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CompletedReports)