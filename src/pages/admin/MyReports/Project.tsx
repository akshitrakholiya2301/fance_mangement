import React from 'react'
import { Button, Col, Form, Row, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
 const Project = (props) => {
  let dummyItems = ['', '', ''];
  return (
    <>
      <Table responsive hover className='table-theme border table-status'>
                            <thead>
                                <tr>
                                    <th className='text-start' >
                                        <div className="checkbox checkbox-primary checkbox-small">
                                            <input type="checkbox" id="memberchk-1" className="material-inputs filled-in" />
                                            <label htmlFor="memberchk-1"></label>
                                        </div>
                                    </th>
                                    <th className='text-start' >User Name</th>
                                    <th className='text-start' >Date</th>
                                    <th className='text-start' >Address</th>
                                    <th className='text-start' >City</th>
                                    <th className='text-start' >State</th>
                                    <th className='text-start' >Zip Code</th>
                                    <th className='text-start' >Email</th>
                                    <th className='text-start' >Source</th>
                                    <th className='text-start' >Estimate</th>
                                    <th className='text-center' >Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {dummyItems.map((item, index) => {
                                    return (
                                        <tr key={index} className='td-status td-status-wraning'>
                                            <td>
                                                <div className="checkbox checkbox-primary checkbox-small">
                                                    <input type="checkbox" id={`status-${index}`} className="material-inputs filled-in" />
                                                    <label htmlFor={`status-${index}`}></label>
                                                </div>
                                            </td>
                                            <td className='text-black'>
                                                <div className="tbl-profile-container">
                                                    <div className="tbl-profile-content">
                                                        <h6>2 Rail Ornamental </h6>
                                                        <p>Aluminum</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <strong>06/27/2024</strong>
                                            </td>
                                            <td>
                                                1070 Westbank Road
                                            </td>
                                            <td>Glenwood Springs</td>
                                            <td>CO</td>
                                            <td className=''>84601</td>
                                            <td className=''>lorri73@gmail.com</td>
                                            <td className=''>Friends or Family</td>
                                            <td className='text-primary'>$ 18,850</td>
                                            <td className=''>
                                                <button type="button" className=" btn-xs text-black btn btn-icon2 btn-icon-start"><i className="th th-outline-eye"></i> Estimate</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
      </Table>

      <div className="mapview">
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
              </Col>
          </Row>

          <div className="location-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.91132803712!2d72.80130567587555!3d21.195681182023346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dd55dfa6fd9%3A0xd0f71b196c136d72!2sTechHive!5e0!3m2!1sen!2sin!4v1721305048433!5m2!1sen!2sin" width="100%" height="500"></iframe>
          </div>

          <Button variant='gray' className='btn-icon-start'> <i className='th-close'></i> Clear Search</Button>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Project)