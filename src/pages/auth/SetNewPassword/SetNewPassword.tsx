import React, { useState } from 'react'
import { RootState } from '../../../redux/store';
import { connect } from 'react-redux';
import { loading } from '../../../redux/Loader/loader.action';
import logo from '../../../assets/images/logo.svg';
import newPassword from '../../../assets/images/set-new-password.svg';

import { Button, Form, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SetNewPassword = (props) => {
    const [eyeToggle, setEyeToggle] = useState<boolean>(false);
    return (
        <>
            <div className="auth-wrapper">
                <div className="auth-inner-wrapper">
                    <div className="auth-row">
                        <div className="auth-left auth-col">
                            <div className="auth-left-wrapper">
                                <div className="auth-left-header">
                                    <div className="auth-header-logo">
                                        <img src={logo} alt="logo" />
                                    </div>
                                </div>
                                <div className="auth-content">
                                    <img src={newPassword} alt="newPassword" />
                                </div>
                                {/* <div className="auth-left-footer"></div> */}
                            </div>
                        </div>
                        <div className="auth-right auth-col">
                            <div className="auth-right-wrapper">
                                <div className="auth-form-title">
                                    <div className="auth-icon">
                                        <i className='th th-outline-key'></i>
                                    </div>
                                    <h2>Set New Password</h2>
                                </div>


                                <Form.Group className="form-group">
                                    <Form.Label>Password</Form.Label>
                                    <div className="form-control-icon  form-control-password icon-start">
                                        <i className='th-outline-lock'></i>
                                        <Form.Control type={eyeToggle ? "text" : "password"} placeholder="Enter Password" />
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
                                <Form.Group className="form-group">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <div className="form-control-icon  form-control-password icon-start">
                                        <i className='th-outline-lock'></i>
                                        <Form.Control type={eyeToggle ? "text" : "password"} placeholder="Enter Password" />
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

                                <Button variant='primary' className='w-100'>Update Password</Button>
                                <div className="auth-link-text auth-link">
                                    Don’t have an account?
                                    <NavLink to="" >Register</NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(SetNewPassword)