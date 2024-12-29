import React, { useState } from 'react'
import { RootState } from '../../../redux/store';
import { loading } from '../../../redux/Loader/loader.action';
import dashChart1 from '../../../assets/images/dash-chart1.svg';
import dashChart2 from '../../../assets/images/dash-chart2.svg';
import dashChart3 from '../../../assets/images/dash-chart3.svg';
import { connect } from 'react-redux';
import { Button, Form, Modal } from 'react-bootstrap';
import LeadsAll from './LeadsAll';
import LeadsNotContacted from './LeadsNotContacted';
import LeadsContacted from './LeadsContacted';
import LeadsScheduled from './LeadsScheduled';

/**
 * Dashboard Component
 * @returns {JSX.Element} JSX element representing the Dashboard component
 */

const Dashboard = (props) => {
  const [showCreateNewEstimate, setCreateNewEstimateShow] = useState(false);
  const handleCreateNewEstimateClose = () => setCreateNewEstimateShow(false);
  const handleCreateNewEstimateShow = () => setCreateNewEstimateShow(true);

  return (
    <>


      <div className="page-content">
        <div className="page-content-wrapper">
          <div className="dashboard-wrapper contetnt-h80">
            <div className="dashboard-left">
              <div className="dashboard-header">
                <div className="dashboard-header-left">
                  <h6>Welcome</h6>
                  <h1>Wong H.</h1>
                  <Form.Group className="form-group form-group-link form-secondary-link">
                    <div className="form-control-icon icon-end">
                      <i className='th-outline-copy text-secondary'></i>
                      <Form.Control className='form-control' type="text" defaultValue="5451dfgdfg542dfg5" />
                    </div>
                  </Form.Group>
                </div>
                <div className="dashboard-header-right">
                  <div className="quick-link">
                    <div className="quick-link-title">
                      <h6>Quick Links</h6>
                    </div>
                    <div className="quick-link-wrapper">
                      <div className="quick-link-col">
                        <div className="quick-link-card">
                          <div className="quick-link-icon">
                            <i className='th-outline-note'></i>
                          </div>
                          <div className="quick-link-text">
                            <p>Edit Your <br /> Catalog</p>
                          </div>
                        </div>
                      </div>
                      <div className="quick-link-col">
                        <div className="quick-link-card" onClick={handleCreateNewEstimateShow}>
                          <div className="quick-link-icon">
                            <i className='th-outline-dollar-circle'></i>
                          </div>
                          <div className="quick-link-text">
                            <p>Create New<br /> Estimate</p>
                          </div>
                        </div>
                      </div>
                      <div className="quick-link-col">
                        <div className="quick-link-card">
                          <div className="quick-link-icon">
                            <i className='th-outline-buildings'></i>
                          </div>
                          <div className="quick-link-text">
                            <p>Edit Business<br /> Details</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recent-leads">
                <div className="recent-leads-card">
                  <div className="recent-leads-title">
                    <div className="recent-leads-title-left">
                      <h6>Recent Leads</h6>
                    </div>
                    <div className="recent-leads-title-right">
                      <div className='nav-tabs-outer nav-tabs-style3'>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all-tab-pane" type="button" role="tab" aria-controls="all-tab-pane" aria-selected="true">
                              <i className='th--outline-grid-2'></i> All
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="not-contacted-tab" data-bs-toggle="tab" data-bs-target="#not-contacted-tab-pane" type="button" role="tab" aria-controls="not-contacted-tab-pane" aria-selected="false">
                              <i className='th-outline-timer-1'></i>Not Contacted
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contacted-tab" data-bs-toggle="tab" data-bs-target="#contacted-tab-pane" type="button" role="tab" aria-controls="contacted-tab-pane" aria-selected="false">
                              <i className='th-outline-tick-circle'></i>Contacted
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="scheduled-tab" data-bs-toggle="tab" data-bs-target="#scheduled-tab-pane" type="button" role="tab" aria-controls="scheduled-tab-pane" aria-selected="false">
                              <i className='th-outline-calendar-1'></i>Scheduled
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>


                  <div className='nav-tabs-outer nav-tabs-style3'>
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade  px-0 pb-0 show active" id="all-tab-pane" role="tabpanel" aria-labelledby="all-tab">
                        <LeadsAll />
                      </div>
                      <div className="tab-pane fade px-0 pb-0" id="not-contacted-tab-pane" role="tabpanel" aria-labelledby="not-contacted-tab">
                        <LeadsNotContacted />
                      </div>
                      <div className="tab-pane fade px-0 pb-0 " id="contacted-tab-pane" role="tabpanel" aria-labelledby="contacted-tab">
                        <LeadsContacted />
                      </div>
                      <div className="tab-pane fade px-0 pb-0" id="scheduled-tab-pane" role="tabpanel" aria-labelledby="scheduled-tab">
                        <LeadsScheduled />
                      </div>
                    </div>
                  </div>

                </div>
              </div>















            </div>
            <div className="dashboard-right">
              <div className="dashboard-chart-wrapper">
                <div className="chart-card">
                  <div className="chart-card-title">
                    <div className="chart-card-left">
                      <h6><span>Leads</span> 3,220</h6>
                      <div className='badge'>18% <i className='th-outline-arrow-right-1'></i></div>
                    </div>
                    <div className="chart-card-right">

                      <Form.Group className="form-group form-group-sm mb-0" controlId="formBasicEmail">
                        <Form.Select className='form-control form-select-sm' aria-label="Default select example">
                          <option>Month</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="chart-card-content">
                    <div className="chart">
                      <img src={dashChart1} alt="dashChart1" />
                    </div>
                  </div>

                </div>
                <div className="chart-card">
                  <div className="chart-card-title">
                    <div className="chart-card-left">
                      <h6><span>Leads Map</span> 12,350</h6>
                      <div className='badge'>14% <i className='th-outline-arrow-right-1'></i></div>
                    </div>
                    <div className="chart-card-right">

                      <Form.Group className="form-group form-group-sm mb-0" controlId="formBasicEmail">
                        <Form.Select className='form-control form-select-sm' aria-label="Default select example">
                          <option>Year</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="chart-card-content">
                    <div className="chart">
                      <img src={dashChart2} alt="dashChart2" />
                    </div>
                  </div>

                </div>
                <div className="chart-card">
                  <div className="chart-card-title">
                    <div className="chart-card-left">
                      <h6><span>Leads by Channel</span> 3,220</h6>
                      <div className='badge'>18% <i className='th-outline-arrow-right-1'></i></div>
                    </div>
                    <div className="chart-card-right">

                      <Form.Group className="form-group form-group-sm mb-0" controlId="formBasicEmail">
                        <Form.Select className='form-control form-select-sm' aria-label="Default select example">
                          <option>Month</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="chart-card-content">
                    <div className="chart">
                      <img src={dashChart3} alt="dashChart3" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Modal show={showCreateNewEstimate} className='modal-theme' centered scrollable onHide={handleCreateNewEstimateClose}>
        <Modal.Header >
          <Modal.Title>Create New Estimate</Modal.Title>
          <Button variant="close" onClick={handleCreateNewEstimateClose}><i className='th th-close'></i></Button>
        </Modal.Header>
        <Modal.Body>
          <div className="">

            <Form.Group className="form-group  " controlId="formBasicEmail">
              <Form.Label>Select Customer</Form.Label>
              <Form.Select className='form-control ' aria-label="Default select example">
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="form-group" >
              <Form.Label>Enter Location</Form.Label>
              <div className="form-control-icon icon-end">
                <i className='th-outline-gps'></i>
                <Form.Control type="text" className='form-control' placeholder="Enter Location" />
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
            <Button variant="white" onClick={handleCreateNewEstimateClose}>
              Close
            </Button>
            <Button variant="primary" className='btn-icon-start' onClick={handleCreateNewEstimateClose}>
              <i className='th-outline-tick-circle'></i>
              Continue
            </Button>
          </div>
        </Modal.Footer>
      </Modal>







      {/* <div>Dashboard</div>
      <button onClick={() => {
        localStorage.removeItem("token");
        props.loading(true);
        setTimeout(() => {
          props.loading(false);
        }, 2000);
      }}>Logout</button> */}


    </>
  )
}

const mapStateToProps = (state: RootState) => {
  //   return { appReducer: state.loaderReducer };
};

const mapDispatchToProps = {
  loading

};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
