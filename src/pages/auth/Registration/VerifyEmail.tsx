import React, { useState } from 'react'
import { RootState } from '../../../redux/store';
import { connect } from 'react-redux';
import { loading } from '../../../redux/Loader/loader.action';
import verifyEmail from '../../../assets/images/verify-email.svg';
import logoText from '../../../assets/images/logo-text.png';


import facebook from '../../../assets/images/facebook.svg';
import { Button, Form, } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { ENUMFORROUTES } from '../../../interfaces/interface';

const VerifyEmail = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="auth-wrapper">
                <div className="auth-inner-wrapper">
                    <div className="auth-row">
                        <div className="auth-left auth-col">
                            <div className="auth-left-wrapper">
                                <div className="auth-content">
                                    <img src={verifyEmail} alt="verifyEmail" />
                                </div>
                                <div className="auth-left-footer">
                                    <div className="footer-logo">
                                        <img src={logoText} alt="logoText" />
                                    </div>
                                    <div className="footer-text">
                                        <p>By creating an account, you agree to our <NavLink to="">Terms and Conditions</NavLink> and <NavLink to="">Services Agreement</NavLink>.</p>
                                    </div>
                                </div>
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
                                <Button variant='primary' className='w-100' onClick={() => navigate(ENUMFORROUTES.REGISTRATION_STEPS)}>Open Mail Box</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail)