import React, { useState } from 'react'
import { RootState } from '../../../redux/store';
import { connect } from 'react-redux';
import logo from '../../../assets/images/logo.svg';
import lock from '../../../assets/images/lock.svg';
import verifyEmail from '../../../assets/images/verify-email.svg';
import { Button, Form, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ENUMFORROUTES } from '../../../interfaces/interface';

export const ForgetPassword = (props) => {
    return (
        <>
            <div className="auth-wrapper">
                <div className="auth-inner-wrapper">
                    {/* Forgot Password start */}
                    <div className="auth-row">
                        <div className="auth-left auth-col">
                            <div className="auth-left-wrapper">
                                <div className="auth-left-header">
                                    <div className="auth-header-logo">
                                        <img src={logo} alt="logo" />
                                    </div>
                                </div>
                                <div className="auth-content">
                                    <img src={lock} alt="lock" />
                                </div>
                                {/* <div className="auth-left-footer"></div> */}
                            </div>
                        </div>
                        <div className="auth-right auth-col">
                            <div className="auth-right-wrapper">
                                <div className="auth-form-title">
                                    <div className="auth-icon">
                                        <i className='th th-outline-lock-1'></i>
                                    </div>
                                    <h2>Forgot Password</h2>
                                </div>


                                <Form.Group className="form-group">
                                    <Form.Label>Email</Form.Label>
                                    <div className="form-control-icon icon-start">
                                        <i className='th-outline-user'></i>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </div>
                                </Form.Group>

                                <Button variant='primary' className='w-100'>Continue</Button>
                                <div className="auth-link-text auth-link">
                                    Go back to
                                    <NavLink to={ENUMFORROUTES.LOGIN} >Log In</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Check your Email! start */}
                    <div className="auth-row">
                        <div className="auth-left auth-col">
                            <div className="auth-left-wrapper">
                                <div className="auth-left-header">
                                    <div className="auth-header-logo">
                                        <img src={logo} alt="logo" />
                                    </div>
                                </div>
                                <div className="auth-content">
                                    <img src={verifyEmail} alt="verifyEmail" />
                                </div>
                                {/* <div className="auth-left-footer"></div> */}
                            </div>
                        </div>
                        <div className="auth-right auth-col">
                            <div className="auth-right-wrapper">
                                <div className="auth-form-title">
                                    <div className="auth-icon">
                                        <i className='th-outline-sms-notification'></i>
                                    </div>
                                    <h2>Check your Email!</h2>
                                </div>

                                <div className="verify-email-text">
                                    <p>Link has been send on your email! <br /> <span>robertdowney@gmail.com</span></p>

                                </div>


                                <div className="auth-link-text verify-link">
                                    Did not receive it?
                                    <NavLink to="" >Resend Link</NavLink>
                                </div>
                                <Button variant='primary' className='w-100'>Open Mail Box</Button>
                                <div className="auth-link-text auth-link">
                                    Don’t have an email address
                                    <NavLink to="" >Use Another Email</NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword)