import React from 'react'
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux'
import mapThumb from '../../../assets/images/map-thumb.png';
import { NavLink } from 'react-router-dom';

const LeadsContacted = (props) => {
    let dummyItems = ['', '', ''];
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
                            <tr key={index}>
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
                                    <div className='badge badge-style2 badge-warning'>Contacted</div>
                                    {/* 
                                    <div className='badge badge-style2 badge-secondary'>Not Contacted</div>
                                    <div className='badge badge-style2 badge-success'>Scheduled</div>
                                    <div className='badge badge-style2 badge-info'>Sold</div>
                                    <div className='badge badge-style2 badge-danger'>Dead</div> 
                                    */}
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
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(LeadsContacted)