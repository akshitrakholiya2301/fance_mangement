import React from 'react'
import { connect } from 'react-redux'
import { Button, Col, Form, Row, } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ENUMFORROUTES } from '../../../interfaces/interface';
import { RootState } from '../../../redux/store';
import { loading } from '../../../redux/Loader/loader.action';


export const CompanyDeatils = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <Row>
                <Col md={6} >
                    <Form.Group className="form-group">
                        <Form.Label>Company Name *</Form.Label>

                        <Form.Control type="text" placeholder="Enter company name" />
                    </Form.Group>
                </Col>
                <Col md={6} >
                    <Form.Group className="form-group">
                        <Form.Label>Company Phone *</Form.Label>
                        <Form.Control type="text" placeholder="Enter contact no" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="form-group">
                <Form.Label>Company Website *</Form.Label>
                <Form.Control type="text" placeholder="Enter company website" />
            </Form.Group>
            <Form.Group className="form-group">
                <Form.Label>Company Street Address *</Form.Label>
                <Form.Control type="text" placeholder="Enter company street address" />
            </Form.Group>

            <Row>
                <Col md={4}>
                    <Form.Group className="form-group">
                        <Form.Label>Company City *</Form.Label>
                        <Form.Control type="text" placeholder="Enter city" />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="form-group">
                        <Form.Label>Select State/Province *</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select State</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="form-group">
                        <Form.Label>Company Postal Code *</Form.Label>
                        <Form.Control type="text" placeholder="Enter postal code" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="form-group">
                <Form.Label>How did you hear about us?</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Google, facebook etc...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>

            <Button variant='primary' className='w-100 mt-3' onClick={() => {
                localStorage.setItem("token", "hii");
                props.loading(true);
                setTimeout(() => {
                    props.loading(false);
                }, 2000);
            }}>Continue</Button>
        </>
    )
}


const mapStateToProps = (state: RootState) => {
    //   return { appReducer: state.loaderReducer };
};

const mapDispatchToProps = {
    loading
};
export default connect(mapStateToProps, mapDispatchToProps)(CompanyDeatils);