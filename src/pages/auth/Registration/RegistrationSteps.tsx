import React, { useState } from 'react'
import { RootState } from '../../../redux/store';
import { connect } from 'react-redux';
import { loading } from '../../../redux/Loader/loader.action';
import logo from '../../../assets/images/logo.svg';
import gift from '../../../assets/images/gift.svg';
import logoText from '../../../assets/images/logo-text.png';
import google from '../../../assets/images/google.svg';
import apple from '../../../assets/images/apple.svg';
import facebook from '../../../assets/images/facebook.svg';
import { Button, Col, Form, Row, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CompanyDeatils from './CompanyDeatils';
import SelectPlan from './SelectPlan';
import ThankYou from './ThankYou';

export const RegistrationSteps = (props) => {
    const [eyeToggle, setEyeToggle] = useState<boolean>(false);

    return (
        <>
            <div className="auth-wrapper auth-steps">
                <div className="auth-inner-wrapper">
                    <div className="auth-row">
                        <div className="auth-left auth-col">
                            <div className="auth-left-wrapper">
                                <div className="auth-content">
                                    <img src={gift} alt="gift" />

                                    <div className="auth-content-text">
                                        <h1>Free for <span>14 days</span></h1>
                                        <p>Experience our service with no cost for 14 days, risk-free!</p>
                                    </div>
                                </div>

                                <div className="auth-left-footer">
                                    <div className="footer-logo mb-0">
                                        <img src={logoText} alt="logoText" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="auth-right auth-col">
                            <div className="auth-right-wrapper">
                                <div className="auth-form-title">
                                    <div className="auth-icon">
                                        <i className='th th-outline-user'></i>
                                    </div>
                                    <h2>Create your free account</h2>
                                </div>
                                <div className="auth-form-stepper">
                                    <ul>
                                        <li className='completed'>
                                            <div className="number"><span>1</span> <i className='th-bold-tick-circle'></i></div>
                                            <p>Company Details</p>
                                        </li>
                                        <li className='active'>
                                            <div className="number"><span>2</span> <i className='th-bold-tick-circle'></i></div>
                                            <p>Select Plan</p>
                                        </li>
                                        <li>
                                            <div className="number"><span>3</span> <i className='th-bold-tick-circle'></i></div>
                                            <p>Confirm</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="step-data">
                                    <CompanyDeatils />
                                    {/* <SelectPlan />
                                    <ThankYou /> */}
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationSteps)