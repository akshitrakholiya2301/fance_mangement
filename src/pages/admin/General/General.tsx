import React, { useState } from 'react'
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import Information from './Information'
import Location from './Location'

export const General = (props) => {


    return (
        <>
            <div className="page-content">
                <div className="page-content-wrapper">
                    <div className="page-title">
                        <div className="page-title-left">
                            <h2>My Catalog</h2>
                        </div>
                        <div className="page-title-right">
                            <div className='button-dropdown-group'>
                                <Button variant='gray' size='sm' className='btn-left btn-icon-start'><i className='th-outline-refresh-2'></i> Auto</Button>
                                <div className="dropdown">
                                    <button className="btn btn-gray btn-icon btn-sm btn-right" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className='th th-outline-arrow-down-1'></i></button>
                                    <ul className="dropdown-menu">
                                        {/* <li><a className="dropdown-item"><i className='th th-outline-folder-minus'></i>New Goal</a></li>
                                        <li><button type='button' className="dropdown-item"><i className='th th-outline-folder-minus'></i>New Theme Group</button></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='nav-tabs-outer nav-tabs-style2 '>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="information-tab" data-bs-toggle="tab" data-bs-target="#information-tab-pane" type="button" role="tab" aria-controls="information-tab-pane" aria-selected="true">
                                    Information
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link " id="locations-tab" data-bs-toggle="tab" data-bs-target="#locations-tab-pane" type="button" role="tab" aria-controls="locations-tab-pane" aria-selected="false">
                                    Locations
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content contetnt-h180" id="myTabContent">
                            <div className="tab-pane fade show active" id="information-tab-pane" role="tabpanel" aria-labelledby="information-tab">
                                <Information />
                            </div>
                            <div className="tab-pane fade " id="locations-tab-pane" role="tabpanel" aria-labelledby="locations-tab">
                                <Location />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(General)