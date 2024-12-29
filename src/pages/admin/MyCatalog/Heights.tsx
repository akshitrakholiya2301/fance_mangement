import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Form, Modal, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import avatar1 from '../../../assets/images/height.png'
import HeightImage from '../../../assets/images/height.png';





const Heights = (props) => {

    const [showHeight, setShow] = useState(false);
    const handleHeightClose = () => setShow(false);
    const handleHeightShow = () => setShow(true);

    const [showAddNewHeight, setAddNewHeightShow] = useState(false);
    const handleAddNewHeightClose = () => setAddNewHeightShow(false);
    const handleAddNewHeightShow = () => setAddNewHeightShow(true);
    return (
        <>
            <div className="style-data-wrapper">
                <div className='style-data-row'>
                    <div className='style-data-col style-data-left'>
                        <Card>
                            <div className="card-title">
                                <div className="card-title-left">
                                    <h4>Active Heights</h4>
                                </div>
                                <div className="card-title-right">
                                    <div className="form-group form-group-sm from-select-group mb-0">
                                        <Form.Label>Sort By:</Form.Label>
                                        <Form.Select size='sm' className="form-control" aria-label="Default select example">
                                            <option>Type</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </div>
                            <Card.Body className='style-data-body'>
                                <div className="style-data">
                                    <div className="card-title2">
                                        <h4><span>Aluminum Silver</span></h4>
                                    </div>
                                    <div className="catalog-data">

                                        <Row>
                                            <Col md={6}>
                                                <div className="catalog-normal-card">
                                                    <div className="catalog-card-image">
                                                        <img src={avatar1} alt="avatar1" />
                                                    </div>
                                                    <div className="catalog-card-details">
                                                        <div className="catalog-card-title">
                                                            <div className="catalog-card-title-left">
                                                                <h6>4 ft</h6>
                                                                <p>Last Updated: 02/07/2024</p>
                                                            </div>
                                                            <div className="catalog-card-title-right">
                                                                <Button variant='icon2' className=' text-default' onClick={handleHeightShow}><i className='th-outline-edit' onClick={handleHeightShow}></i></Button>
                                                                <Button variant='icon2' className=' text-danger'><i className='th-outline-close-circle'></i></Button>
                                                            </div>
                                                        </div>
                                                        <Button variant='light-primary' className='btn-icon-start btn-xs'> <i className='th-outline-export'></i> Change Image</Button>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="catalog-normal-card">
                                                    <div className="catalog-card-image">
                                                        <img src={avatar1} alt="avatar1" />
                                                    </div>
                                                    <div className="catalog-card-details">
                                                        <div className="catalog-card-title">
                                                            <div className="catalog-card-title-left">
                                                                <h6>5 ft</h6>
                                                                <p>Last Updated: 02/07/2024</p>
                                                            </div>
                                                            <div className="catalog-card-title-right">
                                                                <Button variant='icon2' className=' text-default' onClick={handleHeightShow}><i className='th-outline-edit'></i></Button>
                                                                <Button variant='icon2' className=' text-danger'><i className='th-outline-close-circle'></i></Button>
                                                            </div>
                                                        </div>
                                                        <Button variant='light-primary' className='btn-icon-start btn-xs'> <i className='th-outline-export'></i> Change Image</Button>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="catalog-normal-card">
                                                    <div className="catalog-card-image">
                                                        <img src={avatar1} alt="avatar1" />
                                                    </div>
                                                    <div className="catalog-card-details">
                                                        <div className="catalog-card-title">
                                                            <div className="catalog-card-title-left">
                                                                <h6>6 ft</h6>
                                                                <p>Last Updated: 02/07/2024</p>
                                                            </div>
                                                            <div className="catalog-card-title-right">
                                                                <Button variant='icon2' className=' text-default' onClick={handleHeightShow}><i className='th-outline-edit'></i></Button>
                                                                <Button variant='icon2' className=' text-danger'><i className='th-outline-close-circle'></i></Button>
                                                            </div>
                                                        </div>
                                                        <Button variant='light-primary' className='btn-icon-start btn-xs'> <i className='th-outline-export'></i> Change Image</Button>
                                                    </div>
                                                </div>
                                            </Col>

                                        </Row>
                                    </div>
                                    <div className="card-title2">
                                        <h4><span>Wood</span></h4>
                                    </div>
                                    <div className="catalog-data">

                                        <Row>
                                            <Col md={6}>
                                                <div className="catalog-normal-card">
                                                    <div className="catalog-card-image">
                                                        <img src={avatar1} alt="avatar1" />
                                                    </div>
                                                    <div className="catalog-card-details">
                                                        <div className="catalog-card-title">
                                                            <div className="catalog-card-title-left">
                                                                <h6>4 ft</h6>
                                                                <p>Last Updated: 02/07/2024</p>
                                                            </div>
                                                            <div className="catalog-card-title-right">
                                                                <Button variant='icon2' className=' text-default' onClick={handleHeightShow}><i className='th-outline-edit'></i></Button>
                                                                <Button variant='icon2' className=' text-danger'><i className='th-outline-close-circle'></i></Button>
                                                            </div>
                                                        </div>
                                                        <Button variant='light-primary' className='btn-icon-start btn-xs'> <i className='th-outline-export'></i> Change Image</Button>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="catalog-normal-card">
                                                    <div className="catalog-card-image">
                                                        <img src={avatar1} alt="avatar1" />
                                                    </div>
                                                    <div className="catalog-card-details">
                                                        <div className="catalog-card-title">
                                                            <div className="catalog-card-title-left">
                                                                <h6>5 ft</h6>
                                                                <p>Last Updated: 02/07/2024</p>
                                                            </div>
                                                            <div className="catalog-card-title-right">
                                                                <Button variant='icon2' className=' text-default' onClick={handleHeightShow}><i className='th-outline-edit'></i></Button>
                                                                <Button variant='icon2' className=' text-danger'><i className='th-outline-close-circle'></i></Button>
                                                            </div>
                                                        </div>
                                                        <Button variant='light-primary' className='btn-icon-start btn-xs'> <i className='th-outline-export'></i> Change Image</Button>
                                                    </div>
                                                </div>
                                            </Col>

                                        </Row>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='style-data-col style-data-right'>
                        <Card className='card-style2'>
                            <div className="card-title">
                                <div className="card-title-left">
                                    <h4>All Heights</h4>
                                </div>
                                <div className="card-title-right">

                                </div>
                            </div>
                            <Card.Body className='style-data-body'>
                                <div className="style-data">

                                    <Card bg='warning' className='mb-2'>
                                        <Card.Body>
                                            <div className="info-card">
                                                <i className='th-bold-note'></i>
                                                <p>Simply Drag & Drop to active types box to add saved types.</p>
                                            </div>
                                        </Card.Body>
                                    </Card>

                                    <Row>
                                        <Col md={12}>
                                            <div className="catalog-normal-card">
                                                <div className="catalog-card-image">
                                                    <img src={avatar1} alt="avatar1" />
                                                </div>
                                                <div className="catalog-card-details">
                                                    <div className="catalog-card-title">
                                                        <div className="catalog-card-title-left">
                                                            <h6>2 Rail Ornamental Aluminum</h6>
                                                            <p>Last Updated: 02/07/2024</p>
                                                        </div>
                                                        <div className="catalog-card-title-right">
                                                            <Button variant='icon2' className=' text-default' onClick={handleHeightShow}><i className='th-outline-edit'></i></Button>
                                                            <Button variant='icon2' className=' text-danger'><i className='th-outline-close-circle'></i></Button>
                                                        </div>
                                                    </div>
                                                    <Button variant='light-primary' className='btn-icon-start btn-xs'> <i className='th-outline-export'></i> Change Image</Button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <div className="catalog-normal-card">
                                                <div className="catalog-card-image">
                                                    <img src={avatar1} alt="avatar1" />
                                                </div>
                                                <div className="catalog-card-details">
                                                    <div className="catalog-card-title">
                                                        <div className="catalog-card-title-left">
                                                            <h6>2 Rail Ornamental Aluminum</h6>
                                                            <p>Last Updated: 02/07/2024</p>
                                                        </div>
                                                        <div className="catalog-card-title-right">
                                                            <Button variant='icon2' className=' text-default' onClick={handleHeightShow}><i className='th-outline-edit'></i></Button>
                                                            <Button variant='icon2' className=' text-danger'><i className='th-outline-close-circle'></i></Button>
                                                        </div>
                                                    </div>
                                                    <Button variant='light-primary' className='btn-icon-start btn-xs'> <i className='th-outline-export'></i> Change Image</Button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <div className="catalog-normal-card">
                                                <div className="catalog-card-image">
                                                    <img src={avatar1} alt="avatar1" />
                                                </div>
                                                <div className="catalog-card-details">
                                                    <div className="catalog-card-title">
                                                        <div className="catalog-card-title-left">
                                                            <h6>2 Rail Ornamental Aluminum</h6>
                                                            <p>Last Updated: 02/07/2024</p>
                                                        </div>
                                                        <div className="catalog-card-title-right">
                                                            <Button variant='icon2' className=' text-default' onClick={handleHeightShow}><i className='th-outline-edit'></i></Button>
                                                            <Button variant='icon2' className=' text-danger'><i className='th-outline-close-circle'></i></Button>
                                                        </div>
                                                    </div>
                                                    <Button variant='light-primary' className='btn-icon-start btn-xs'> <i className='th-outline-export'></i> Change Image</Button>
                                                </div>
                                            </div>
                                        </Col>


                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>



            <Modal show={showHeight} className='modal-theme' centered scrollable onHide={handleHeightClose}>
                {/* <Modal.Header >
                    <Modal.Title>Edit Height</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <div className="">
                        <Form.Group className="form-group" >
                            <Form.Label>Search Height</Form.Label>
                            <Form.Control type="text" className='form-control' placeholder="Enter Name" />
                        </Form.Group>

                        <Row className=''>
                            <Col md={6}>
                                <Form.Group className="mb-3" >
                                    <div className='card-radio catalog-radio mb-3'>
                                        <div className="card-radio-wrapper">
                                            <div className="catalog-radio-details">
                                                <div className="catalog-radio-image">
                                                    <img src={HeightImage} alt="Height" />
                                                </div>
                                                <div className="catalog-radio-text">
                                                    <p>Tan</p>
                                                </div>
                                            </div>
                                            <div className='card-radio-input'>
                                                <div className="radio radio-primary">
                                                    <input type="radio" id='Height1' name='Height' />
                                                    <label htmlFor='Height1'></label>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" >
                                    <div className='card-radio catalog-radio  mb-3'>
                                        <div className="card-radio-wrapper">
                                            <div className="catalog-radio-details">
                                                <div className="catalog-radio-image">
                                                    <img src={HeightImage} alt="Height" />
                                                </div>
                                                <div className="catalog-radio-text">
                                                    <p>Tan</p>
                                                </div>
                                            </div>
                                            <div className='card-radio-input'>
                                                <div className="radio radio-primary">
                                                    <input type="radio" id='Height2' name='Height' />
                                                    <label htmlFor='Height2'></label>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" >
                                    <div className='card-radio catalog-radio mb-3'>
                                        <div className="card-radio-wrapper">
                                            <div className="catalog-radio-details">
                                                <div className="catalog-radio-image">
                                                    <img src={HeightImage} alt="Height" />
                                                </div>
                                                <div className="catalog-radio-text">
                                                    <p>Tan</p>
                                                </div>
                                            </div>
                                            <div className='card-radio-input'>
                                                <div className="radio radio-primary">
                                                    <input type="radio" id='Height3' name='Height' />
                                                    <label htmlFor='Height3'></label>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" >
                                    <div className='card-radio catalog-radio active mb-3'>
                                        <div className="card-radio-wrapper">
                                            <div className="catalog-radio-details">
                                                <div className="catalog-radio-image">
                                                    <img src={HeightImage} alt="Height" />
                                                </div>
                                                <div className="catalog-radio-text">
                                                    <p>Tan</p>
                                                </div>
                                            </div>
                                            <div className='card-radio-input'>
                                                <div className="radio radio-primary">
                                                    <input type="radio" id='Height4' name='Height' />
                                                    <label htmlFor='Height4'></label>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light-secondary" className='btn-icon-start' onClick={handleHeightClose}>
                        <i className='th-outline-add-circle'></i>
                        Add New Height
                    </Button>
                    <div className="button-group">
                        <Button variant="white" onClick={handleHeightClose}>
                            Close
                        </Button>
                        <Button variant="primary" className='btn-icon-start' onClick={handleHeightClose}>
                            <i className='th-outline-tick-circle'></i>
                            Save
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>


            <Modal show={showAddNewHeight} className='modal-theme' centered scrollable onHide={handleAddNewHeightClose}>
                <Modal.Header >
                    <Modal.Title>Add New Height</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="">
                        <Form.Group className="form-group" >
                            <Form.Label>Enter Height</Form.Label>
                            <Form.Control type="text" className='form-control' placeholder="Enter Height" />
                        </Form.Group>
                        <Form.Group className="form-group" >
                            <Form.Label>Style Type</Form.Label>
                            <Form.Select className='form-select' aria-label="Default select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="form-group" >
                            <Form.Label>Upload Photo</Form.Label>
                            <div className='attachments-container'>
                                <div className='attachments-content'>
                                    <button className='btn btn-attachments'><i className="bi bi-upload"></i></button>
                                    <p>Drag and Drop file here or <span className='text-primary'>Choose file</span></p>
                                </div>
                                <input type="file" accept="image/x-png,image/jpeg,image/jpg" />
                            </div>

                            <div className='attachments-upload-grid-container'>
                                <div className='attachments-upload-row'>


                                    <div className='attachments-upload-col'>
                                        <div className='card-attachments-upload'>
                                            <div className='attachments-image'>
                                                <img src={HeightImage} alt="Style" />
                                            </div>
                                            <Button variant="close" ><i className='th th-close'></i></Button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group className="form-group" >
                            <Form.Label>Note</Form.Label>
                            <Form.Control className='form-control' as="textarea" rows={3} />
                        </Form.Group>

                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <div className="button-group">
                        <Button variant="white" onClick={handleAddNewHeightClose}>
                            Close
                        </Button>
                        <Button variant="primary" className='btn-icon-start' onClick={handleAddNewHeightClose}>
                            <i className='th-outline-tick-circle'></i>
                            Save
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Heights)