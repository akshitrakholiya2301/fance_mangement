import React, { useState } from 'react'
import { RootState } from '../../../redux/store';
import { connect } from 'react-redux';
import { loading } from '../../../redux/Loader/loader.action';
import logo from '../../../assets/images/logo.svg';
import google from '../../../assets/images/google.svg';
import apple from '../../../assets/images/apple.svg';
import facebook from '../../../assets/images/facebook.svg';
import { Button, Form, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ENUMFORROUTES } from '../../../interfaces/interface';
/**
 * Login Component
 * @param {object} props - Props passed to the component
 * @returns {JSX.Element} JSX element representing the Login component
 */
const Login = (props) => {

    const [eyeToggle, setEyeToggle] = useState<boolean>(false);
    return (
        <>
            <div className="auth-wrapper">
                <div className="auth-inner-wrapper">
                    <div className="auth-row">
                        <div className="auth-left auth-col">
                            <div className="auth-left-wrapper">
                                <div className="auth-content">
                                    <img src={logo} alt="logo" />
                                </div>
                                {/* <div className="auth-left-footer"></div> */}
                            </div>
                        </div>
                        <div className="auth-right auth-col">
                            <div className="auth-right-wrapper">
                                <div className="auth-form-title">
                                    <div className="auth-icon">
                                        <i className='th th-outline-user'></i>
                                    </div>
                                    <h2>Log in to EstimatorBob</h2>
                                </div>
                                {/* <div className="auth-login-with">
                                    <Button variant='gray' size='sm' className='btn-icon-start'> <img src={google} alt="google" /> Google</Button>
                                    <Button variant='gray' size='sm' className='btn-icon-start'> <img src={facebook} alt="facebook" /> Facebook</Button>
                                    <Button variant='gray' size='sm' className='btn-icon-start'> <img src={apple} alt="apple" /> Apple</Button>
                                </div> */}
                                {/* <div className="or-divider">
                                    <p>Or</p>
                                </div> */}

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

                                <div className="auth-link-text forgot-password">
                                    <NavLink to={ENUMFORROUTES.FORGET_PASSWORD} >Forgot Password?</NavLink>
                                </div>
                                <Button variant='primary' className='w-100' onClick={() => {
                                    localStorage.setItem("token", "hii");
                                    props.loading(true);
                                    setTimeout(() => {
                                        props.loading(false);
                                    }, 2000);
                                }}>Log In</Button>
                                <div className="auth-link-text auth-link">
                                    Don’t have an account?
                                    <NavLink to={ENUMFORROUTES.REGISTRATION} >Register</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state: RootState) => {
    //   return { appReducer: state.loaderReducer };
};

const mapDispatchToProps = {
    loading

};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login