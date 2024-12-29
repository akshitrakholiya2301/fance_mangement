import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import AllReports from './AllReports'
import CompletedReports from './CompletedReports'
import AbandonedReports from './AbandonedReports'

const MyReports = (props) => {
    return (
        <>
            <div className="page-content">
                <div className="page-content-wrapper">
                    <div className="page-title">
                        <div className="page-title-left">
                            <h2>My Reports</h2>
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
                                <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all-tab-pane" type="button" role="tab" aria-controls="all-tab-pane" aria-selected="true">
                                    All
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link " id="completed-tab" data-bs-toggle="tab" data-bs-target="#completed-tab-pane" type="button" role="tab" aria-controls="completed-tab-pane" aria-selected="false">
                                    Completed
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link " id="abandoned-tab" data-bs-toggle="tab" data-bs-target="#abandoned-tab-pane" type="button" role="tab" aria-controls="abandoned-tab-pane" aria-selected="false">
                                    Abandoned
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="all-tab-pane" role="tabpanel" aria-labelledby="all-tab">
                                <AllReports />
                            </div>
                            <div className="tab-pane fade " id="completed-tab-pane" role="tabpanel" aria-labelledby="completed-tab">
                                <CompletedReports />
                            </div>
                            <div className="tab-pane fade " id="abandoned-tab-pane" role="tabpanel" aria-labelledby="abandoned-tab">
                                <AbandonedReports />
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

export default connect(mapStateToProps, mapDispatchToProps)(MyReports)