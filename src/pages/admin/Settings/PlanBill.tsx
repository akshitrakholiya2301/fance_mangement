import React, { useState } from 'react'
import { Button, Form, Modal, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import settingPlaceholder from '../../../assets/images/settings-palceholder.svg';
import upgradePlan from '../../../assets/images/upgrade-plan.png';
import notEnough from '../../../assets/images/not-enough.svg';

const PlanBill = (props) => {
    let dummyItems = ['', '', ''];
    const [showCancelPlan, setCancelPlanShow] = useState(false);
    const handleCancelPlanClose = () => setCancelPlanShow(false);
    const handleCancelPlanShow = () => setCancelPlanShow(true);


    const [showUpgradePlan, setUpgradePlanShow] = useState(false);
    const handleUpgradePlanClose = () => setUpgradePlanShow(false);
    const handleUpgradePlanShow = () => setUpgradePlanShow(true);
    return (
        <>
            <div className="my-plan">
                <h3>My Plan</h3>

                <div className="my-plan-card">
                    <div className="my-plan-item">
                        <p>Plan</p>
                        <h2>Growth Plan (Monthly)</h2>
                    </div>
                    <div className="my-plan-item">
                        <p>Payment / type</p>
                        <h2>$120 / month</h2>
                    </div>
                    <div className="my-plan-item">
                        <p>Next invoice issue date</p>
                        <h2>Jul 4, 2024</h2>
                    </div>
                    <div className="my-plan-item">
                        <p>Total Billing</p>
                        <h2>$120</h2>
                    </div>
                    <div className="my-plan-item">

                        <Button variant='link' className='text-danger btn-icon-start w-100' onClick={handleCancelPlanShow}> <i className='th-outline-close-circle'></i> Cancel Plan</Button>
                    </div>
                </div>

                <h3>Billings</h3>

                <Table responsive hover className='table-theme border'>
                    <thead>
                        <tr>
                            <th className='text-start' >Plan Description</th>
                            <th className='text-start' >Month</th>
                            <th className='text-start' >Payment Date</th>
                            <th className='text-start' >Payment Method</th>
                            <th className='text-right' >Status</th>
                            <th className='text-right' >Est Law/High</th>
                            <th className='text-right' >Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {dummyItems.map((item, index) => {
                            return (
                                <tr key={index} >
                                    <td className='text-black'> <strong>Growth Plan (Monthly)</strong> </td>
                                    <td>
                                        <strong>Jun 2024</strong>
                                    </td>
                                    <td>
                                        06/27/2024
                                    </td>
                                    <td>Credit Card</td>
                                    <td>Paid</td>
                                    <td className='text-secondary'>$ 120.00</td>
                                    <td className=''>
                                        <button type="button" className=" btn-xs text-primary btn btn-icon2 btn-icon-start"><i className="th th-outline-eye"></i> View Invoice</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>


                <div className="thankyou-choosing">
                    <div className="thankyou-choosing-image">
                        <img src={settingPlaceholder} alt="settingPlaceholder" />
                    </div>
                    <div className="thankyou-choosing-text">
                        <h3>Thank you for choosing EstimatorBob!</h3>
                        <p>After the trial, your plan will be activated.</p>
                    </div>
                    <div className="my-plan-card">
                        <div className="my-plan-item">
                            <p>Plan</p>
                            <h2>Growth Plan (Monthly)</h2>
                        </div>
                        <div className="my-plan-item">
                            <p>Trial End on</p>
                            <h2>Aug 4, 2024</h2>
                        </div>
                        <div className="my-plan-item">
                            <p>Left days on your free trial.</p>
                            <h2>6 Days</h2>
                        </div>

                    </div>
                    <Button onClick={handleUpgradePlanShow}>gerghertr</Button>
                </div>
            </div>

            <Modal show={showCancelPlan} className='modal-theme' centered scrollable onHide={handleCancelPlanClose}>
                <Modal.Header >
                    <h6>Cancel Plan</h6>
                    <Modal.Title>Sorry to see you go :(</Modal.Title>
                    <Button variant="close" onClick={handleCancelPlanClose}><i className='th th-close'></i></Button>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group className="form-group" >
                        <Form.Label>What is your reason for cancelling EstimatorBob?</Form.Label>
                        <Form.Select className='form-select' aria-label="Default select example">
                            <option>Select a Reason</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="form-group" >
                        <Form.Label>Share your feedback</Form.Label>
                        <Form.Control className='form-control' as="textarea" rows={3} placeholder='Enter feedback here' />
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer className='justify-content-end'>

                    <div className="button-group">
                        <Button variant="white" onClick={handleCancelPlanClose}>
                            Stay Subscribed
                        </Button>
                        <Button variant="primary" className='btn-icon-end' onClick={handleCancelPlanClose}>
                            Yes, cancel it
                            <i className='th-outline-arrow-right-1'></i>
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>


            <Modal show={showUpgradePlan} size='lg' className='modal-theme upgrade-plan' centered scrollable onHide={handleUpgradePlanClose}>

                <Modal.Body>
                    <Button variant="close" onClick={handleUpgradePlanClose}><i className='th th-close'></i></Button>

                    <div className="upgrade-plan-body">
                        <div className="upgrade-plan-icon">
                            <img src={upgradePlan} alt="upgradePlan" />
                        </div>
                        <div className="upgrade-plan-text">
                            <h2>Your trial has ended in 6 Days</h2>
                            <p>If you want to cancel your plan, please go to settings and proceed with cancelling the plan.</p>
                        </div>

                        <div className="upgrade-plan-card">
                            <div className="upgrade-plan-left">
                                <h6>Not enough time? Extend your trial</h6>
                                <p>Get in touch with us if you need more time, have questions, or just want to learn more about EstimatorBob.</p>
                                <Button variant='primary' size='sm'>Get In Touch</Button>
                            </div>
                            <div className="upgrade-plan-right">
                                <img src={notEnough} alt="notEnough" />
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PlanBill)