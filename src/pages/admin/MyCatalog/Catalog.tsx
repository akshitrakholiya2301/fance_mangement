import React from 'react'
import { connect } from 'react-redux'
import Overview from './Overview'
import Styles from './Styles'
import Colors from './Colors'
import Heights from './Heights'
import { Button } from 'react-bootstrap'

const Catalog = (props) => {
    return (
        <>

            <div className='page-content-inner-wrapper'>
                <div className='page-content-inner-left'>
                    <div className='nav-tabs-outer nav-tabs-style1'>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview-tab-pane" type="button" role="tab" aria-controls="overview-tab-pane" aria-selected="true">
                                    <i className='th-list'></i> Overview
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="styles-tab" data-bs-toggle="tab" data-bs-target="#styles-tab-pane" type="button" role="tab" aria-controls="styles-tab-pane" aria-selected="false">
                                    <i className='th-outline-slider-horizontal'></i>Styles
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="colors-tab" data-bs-toggle="tab" data-bs-target="#colors-tab-pane" type="button" role="tab" aria-controls="colors-tab-pane" aria-selected="false">
                                    <i className='th-outline-paintbucket'></i>Colors
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="heights-tab" data-bs-toggle="tab" data-bs-target="#heights-tab-pane" type="button" role="tab" aria-controls="heights-tab-pane" aria-selected="false">
                                    <i className='th-outline-maximize'></i>Heights
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='page-content-inner-right'>
                    <Button variant='primary' size='sm' className='btn-icon-start'> <i className='th-outline-add-circle'></i> New Type</Button>
                </div>
            </div>
            <div className='nav-tabs-outer nav-tabs-style1'>


                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade  px-0 pb-0 show active" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab">
                        <Overview />
                    </div>
                    <div className="tab-pane fade px-0 pb-0" id="styles-tab-pane" role="tabpanel" aria-labelledby="styles-tab">
                        <Styles />
                    </div>
                    <div className="tab-pane fade px-0 pb-0 " id="colors-tab-pane" role="tabpanel" aria-labelledby="colors-tab">
                        <Colors />
                    </div>
                    <div className="tab-pane fade px-0 pb-0" id="heights-tab-pane" role="tabpanel" aria-labelledby="heights-tab">
                        <Heights />
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)