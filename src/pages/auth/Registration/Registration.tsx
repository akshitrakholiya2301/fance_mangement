import React, { useState } from 'react'
import { RootState } from '../../../redux/store';
import { connect } from 'react-redux';
import { loading } from '../../../redux/Loader/loader.action';
import logo from '../../../assets/images/logo.svg';
import logoText from '../../../assets/images/logo-text.png';
import google from '../../../assets/images/google.svg';
import apple from '../../../assets/images/apple.svg';
import facebook from '../../../assets/images/facebook.svg';
import { Button, Col, Form, Row, } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { ENUMFORROUTES } from '../../../interfaces/interface';


export const Registration = (props) => {
    const navigate = useNavigate();
    const [eyeToggle, setEyeToggle] = useState<boolean>(false);
    return (
        <>
            <div className="auth-wrapper">
                <div className="auth-inner-wrapper">
                    <div className="auth-row">
                        <div className="auth-left auth-col">
                            <div className="auth-left-wrapper">
                                <div className="auth-get-started">
                                    <div className="get-started-title">
                                        <h2>Get Started With Us</h2>
                                    </div>
                                    <div className="get-started-text">
                                        <div className="get-started-item">
                                            <h6> <i className='th-bold-tick-circle'></i> 14-Day Free Trial</h6>
                                            <p>Provide options for different types of fences (e.g., wood, vinyl, chain-link) with visual examples.</p>
                                        </div>
                                        <div className="get-started-item">
                                            <h6> <i className='th-bold-tick-circle'></i> Measurement Input</h6>
                                            <p>Allow users to input measurements of their property either manually or through integration with mapping tools like Google Maps.</p>
                                        </div>
                                        <div className="get-started-item">
                                            <h6> <i className='th-bold-tick-circle'></i> Material Selection</h6>
                                            <p>Offer a range of materials with associated costs per unit (e.g., cost per linear foot/meter).</p>
                                        </div>
                                    </div>
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
                                        <i className='th th-outline-user'></i>
                                    </div>
                                    <h2>Create your free account</h2>
                                </div>
                                {/* <div className="auth-login-with">
                                    <Button variant='gray' size='sm' className='btn-icon-start'> <img src={google} alt="google" /> Google</Button>
                                    <Button variant='gray' size='sm' className='btn-icon-start'> <img src={facebook} alt="facebook" /> Facebook</Button>
                                    <Button variant='gray' size='sm' className='btn-icon-start'> <img src={apple} alt="apple" /> Apple</Button>
                                </div>
                                <div className="or-divider">
                                    <p>Or</p>
                                </div> */}

                                <Row>
                                    <Col md={6} >
                                        <Form.Group className="form-group">
                                            <Form.Label>First Name</Form.Label>
                                            <div className="form-control-icon icon-start">
                                                <i className='th-outline-user'></i>
                                                <Form.Control type="text" placeholder="Enter first name" />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} >
                                        <Form.Group className="form-group">
                                            <Form.Label>Last Name</Form.Label>
                                            <div className="form-control-icon icon-start">
                                                <i className='th-outline-user'></i>
                                                <Form.Control type="text" placeholder="Enter last name" />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="form-group">
                                    <Form.Label>Email</Form.Label>
                                    <div className="form-control-icon icon-start">
                                        <i className='th-outline-user'></i>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </div>
                                </Form.Group>

                                <Form.Group className="form-group">
                                    <Form.Label>Password</Form.Label>
                                    <div className="form-control-icon  form-control-password icon-start">
                                        <i className='th-outline-lock'></i>
                                        <Form.Control type={eyeToggle ? "text" : "password"} placeholder="••••••••" />
                                        {eyeToggle ? (
                                            <button
                                                type='button'
                                                className=" btn-password"
                                                onClick={() => { setEyeToggle(!eyeToggle) }}
                                            >
                                                <i className="th-outline-eye"></i>
                                            </button>
                                        ) : (
                                            <button
                                                type='button'
                                                className=" btn-password"
                                                onClick={() => { setEyeToggle(!eyeToggle) }}
                                            >
                                                <i className="th-outline-eye-slash"></i>
                                            </button>
                                        )}
                                    </div>

                                </Form.Group>

                                {/* <div className="auth-link-text forgot-password">
                                    <NavLink to={ENUMFORROUTES.FORGET_PASSWORD} >Forgot Password?</NavLink>
                                </div> */}
                                <Button variant='primary' className='w-100' onClick={() => navigate(ENUMFORROUTES.VERIFY_EMAIL)}>Sign Up</Button>
                                <div className="auth-link-text auth-link">
                                    Already have an account?
                                    <NavLink to={ENUMFORROUTES.LOGIN} >Log In</NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(Registration)