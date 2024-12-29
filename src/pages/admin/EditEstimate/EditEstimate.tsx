import React, { useState } from 'react'
import { connect } from 'react-redux'
import estimateLogo from '../../../assets/images/estimate-logo.svg'
import mapLogo from '../../../assets/images/logo.svg'
import styleImage from '../../../assets/images/style.png'
import colorImage from '../../../assets/images/color.png'
import heightImage from '../../../assets/images/height.png'
import defaultImage from '../../../assets/images/avatar-default.svg'
import fence1 from '../../../assets/images/fence1.svg'
import fence2 from '../../../assets/images/fence2.svg'
import fence3 from '../../../assets/images/fence3.svg'
import fence4 from '../../../assets/images/fence4.svg'
import warning from '../../../assets/images/warning.svg'
import success from '../../../assets/images/success.svg'
import avatar1 from '../../../assets/images/avatar-1.jpg'
import { Button, Col, Collapse, Form, Modal, Offcanvas, Row, Table } from 'react-bootstrap'
import SimpleBar from 'simplebar-react'
import { NavLink } from 'react-router-dom'
import Slider from "react-slick";

const EditEstimate = (props) => {
    let dummyItems = ['', '', ''];

    const [open, setOpen] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [showUpdate, setUpdateShow] = useState(false);
    const handleUpdateClose = () => setUpdateShow(false);
    const handleUpdateShow = () => setUpdateShow(true);

    const [showEstimateUpdate, setEstimateUpdateShow] = useState(false);
    const handleEstimateUpdateClose = () => setEstimateUpdateShow(false);
    const handleEstimateUpdateShow = () => setEstimateUpdateShow(true);

    const [showCustomerDetails, setCustomerDetailsShow] = useState(false);
    const handleCustomerDetailsClose = () => setCustomerDetailsShow(false);
    const handleCustomerDetailsShow = () => setCustomerDetailsShow(true);

    const canvasToggle = () => {
        const CourseMenuToggleMobile = document.querySelector('.edit-style-canavs');
        if (CourseMenuToggleMobile) {
            CourseMenuToggleMobile.classList.toggle('canvas-expand');
        };

    };

    var styleListSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    };
    return (
        <>
            <div className="main-wrapper">
                <div className="estimate-header">
                    <div className="estimate-header-wrapper">
                        <div className="estimate-header-left">
                            <div className="estimate-header-logo">
                                <a href="#">
                                    <img src={estimateLogo} alt="estimateLogo" />
                                </a>
                            </div>
                        </div>
                        <div className="estimate-header-right">
                            <div className="estimate-contact estimate-item">
                                <a href="tel:2552545452"> <i className='th-outline-call-calling'></i> (255) 254 5452</a>
                                <a href="mailto:aspenfencing@help.com"> <i className='th-outline-sms'></i> aspenfencing@help.com</a>
                            </div>
                            <div className="estimate-item">
                                <button className='btn-icon btn-white'> <i className='th-close'></i> </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="estimate-main-content">
                    <div className="estimate-sidebar">

                        <SimpleBar id='scrollbar' className='scrollbar'>
                            <div className="estimate-sidebar-item estimate-add-item">
                                <div className="sidebar-title">
                                    <h6>Add Item</h6>
                                </div>
                                <div className="estimate-add-item-wrapper">
                                    <div className="estimate-add-item-col">
                                        <div className="estimate-add-item-card">
                                            <img src={fence1} alt="fence1" />
                                            <p>Add & Build a <br />Fence</p>
                                        </div>
                                    </div>
                                    <div className="estimate-add-item-col">

                                        <div className="estimate-add-item-card">
                                            <img src={fence2} alt="fence2" />
                                            <p>Add Fence <br />Removal</p>
                                        </div>
                                    </div>
                                    <div className="estimate-add-item-col">

                                        <div className="estimate-add-item-card">
                                            <img src={fence3} alt="fence3" />
                                            <p>Add Single
                                                <br />Gate</p>
                                        </div>
                                    </div>
                                    <div className="estimate-add-item-col">

                                        <div className="estimate-add-item-card">
                                            <img src={fence4} alt="fence4" />
                                            <p>Add Double
                                                <br />Gate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="estimate-sidebar-item grid-overview">
                                <div className="grid-overview-card">
                                    <p>Grid Overview</p>
                                    <div className="switch-box">
                                        <label className="switch" htmlFor="status">
                                            <input type="checkbox" id="status" />
                                            <div className="slider round"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div className="estimate-sidebar-item your-estimate">
                                <div className="sidebar-title">
                                    <h6>Your Estimate</h6>
                                </div>

                                <div className="your-estimate-wrapper">
                                    <div className="your-estimate-card">
                                        <div className="your-estimate-card-wrapper">
                                            <div className="your-estimate-left">
                                                <div className="your-estimate-user">
                                                    <img src={fence1} alt="fence1" />
                                                    <div className="your-estimate-user-text">
                                                        <h6>151 ft</h6>
                                                        <p>Fence</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="your-estimate-right">
                                                <p>$6,450</p>
                                                <a href="#"> <i className='th-outline-trash'></i> </a>
                                            </div>
                                        </div>
                                        <div className="your-estimate-button">
                                            <Button variant='white' className='btn-icon-start btn-xs'> <i className='th-outline-pen-tool-2 text-primary'></i> Edit Drawing</Button>
                                            <Button variant='white' className='btn-icon-start btn-xs'> <i className='th-outline-edit text-secondary'></i> Edit Style</Button>
                                        </div>
                                    </div>
                                    <div className="your-estimate-card">
                                        <div className="your-estimate-card-wrapper">
                                            <div className="your-estimate-left">
                                                <div className="your-estimate-user">
                                                    <img src={fence2} alt="fence2" />
                                                    <div className="your-estimate-user-text">
                                                        <h6>Double Gate</h6>
                                                        <p>Gate</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="your-estimate-right">
                                                <p>$4,450</p>
                                                <a href="#"> <i className='th-outline-trash'></i> </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </SimpleBar>
                        <div className="estimate-sidebar-bottom">
                            <Button variant="primary" onClick={handleEstimateUpdateShow}>
                                Launch
                            </Button>
                            <div className="estimate-sidebar-address">
                                <div className="estimate-sidebar-address-left">
                                    <h6>Robert Downey Jr.</h6>
                                    <p>12345 Wescott Drive Midlothian VA </p>

                                    <Collapse in={open}>
                                        <div id="estimate-sidebar-address-text">
                                            <p>23112</p>
                                            <p><NavLink to="">testies@gmail.com</NavLink></p>
                                            <p><NavLink to="">(323) 423-4242</NavLink></p>
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="estimate-sidebar-address-right">

                                    <NavLink to=""><i className='th-outline-edit-2'></i></NavLink>
                                    <NavLink to="" onClick={() => setOpen(!open)}
                                        aria-controls="estimate-sidebar-address-text"
                                        aria-expanded={open}><i className='th-outline-arrow-right-3'></i></NavLink>

                                </div>
                            </div>
                            <div className="estimate-sidebar-total">
                                <p> Total Estimate: <span>$10,900</span></p>

                                <Button variant='primary' size='sm'> Finish </Button>
                            </div>
                        </div>
                    </div>
                    <div className="estimate-page-content footer-add">
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14879.645813878065!2d72.8038806!3d21.1956762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dd55dfa6fd9%3A0xd0f71b196c136d72!2sTechHive!5e0!3m2!1sen!2sin!4v1721121613427!5m2!1sen!2sin" width="100" height="100" loading="lazy" ></iframe>


                            <div className="map-logo">
                                <img src={mapLogo} alt="mapLogo" />
                            </div>
                        </div>

                        <div className="estimate-page-footer">
                            <div className="estimate-page-footer-left">
                                <Button variant='white' className='btn-icon-star'> <i className='th-outline-back-square'></i> Undo</Button>
                            </div>
                            <div className="estimate-page-footer-right">
                                <div className="button-group">
                                    <Button variant="white" onClick={handleClose} >
                                        Close
                                    </Button>
                                    <Button variant="primary" className='btn-icon-start' >
                                        <i className='th-outline-tick-circle'></i>
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Offcanvas show={show} placement='end' onHide={handleClose} backdrop={false} className='edit-style-canavs'>
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <div className="edit-style-title-left">
                            <div className="color"></div>
                            <h2>158 Ft</h2>
                        </div>
                        <div className="edit-style-title-right">
                            <Button variant='white' className='btn-xs btn-icon' onClick={canvasToggle}> <i className='th-outline-maximize-3'></i> </Button>
                            <Button variant='white' className='btn-xs btn-icon' onClick={handleClose}> <i className='th-close'></i> </Button>
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="edit-style-canavs-content">
                        <div className="stylel-list">
                            <div className="style-list-title">
                                <div className="style-list-title-left">
                                    <h6>Select Type</h6>

                                </div>
                                <div className="style-list-title-right">
                                    <NavLink to="" >View All</NavLink>
                                </div>
                            </div>
                            <div className="style-list-wrapper">
                                <Slider {...styleListSlider}>
                                    <div className="style-list-card active">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={defaultImage} alt="defaultImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Aluminum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={defaultImage} alt="defaultImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Aluminum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={defaultImage} alt="defaultImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Aluminum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={defaultImage} alt="defaultImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Aluminum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={defaultImage} alt="defaultImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Aluminum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={defaultImage} alt="defaultImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Aluminum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={defaultImage} alt="defaultImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Aluminum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={defaultImage} alt="defaultImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Aluminum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={defaultImage} alt="defaultImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Aluminum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={defaultImage} alt="defaultImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Aluminum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={defaultImage} alt="defaultImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Aluminum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={defaultImage} alt="defaultImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Aluminum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={styleImage} alt="defaultImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>last</p>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>
                            </div>
                        </div>
                        <div className="stylel-list">
                            <div className="style-list-title">
                                <div className="style-list-title-left">
                                    <h6>Select Style</h6>

                                </div>
                                <div className="style-list-title-right">
                                    <NavLink to="" >View All</NavLink>
                                </div>
                            </div>
                            <div className="style-list-wrapper">
                                <Slider {...styleListSlider}>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={styleImage} alt="styleImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Aluminum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={styleImage} alt="styleImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Aluminum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={styleImage} alt="styleImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Aluminum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={styleImage} alt="styleImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Aluminum</p>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>
                            </div>
                        </div>

                        <div className="stylel-list">
                            <div className="style-list-title">
                                <div className="style-list-title-left">
                                    <h6>Select Color</h6>

                                </div>
                                <div className="style-list-title-right">
                                    <NavLink to="" >View All</NavLink>
                                </div>
                            </div>
                            <div className="style-list-wrapper">
                                <Slider {...styleListSlider}>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={colorImage} alt="colorImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Black</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={colorImage} alt="colorImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Black</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={colorImage} alt="colorImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Black</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={colorImage} alt="colorImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>Black</p>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>
                            </div>
                        </div>
                        <div className="stylel-list">
                            <div className="style-list-title">
                                <div className="style-list-title-left">
                                    <h6>Select Update</h6>

                                </div>
                                <div className="style-list-title-right">
                                    <NavLink to="" >View All</NavLink>
                                </div>
                            </div>
                            <div className="style-list-wrapper">
                                <Slider {...styleListSlider}>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={heightImage} alt="heightImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>2 Rail
                                                    Ornamental
                                                    Aluminum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={heightImage} alt="heightImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>2 Rail
                                                    Ornamental
                                                    Aluminum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={heightImage} alt="heightImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>2 Rail
                                                    Ornamental
                                                    Aluminum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="style-list-card">
                                        <div className="style-list-card-wrapper">
                                            <div className="style-list-image">
                                                <img src={heightImage} alt="heightImage" />
                                            </div>
                                            <div className="style-list-card-text">
                                                <p>2 Rail
                                                    Ornamental
                                                    Aluminum</p>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
                <div className="edit-style-canavs-footer justify-content-end">
                    <div className="button-group">
                        <Button variant="white" onClick={handleClose} >
                            Close
                        </Button>
                        <Button variant="primary" className='btn-icon-start' >
                            <i className='th-outline-tick-circle'></i>
                            Save
                        </Button>
                    </div>
                </div>
            </Offcanvas>


            <Modal show={showUpdate} className='modal-theme modal-conformation' size="sm" centered scrollable onHide={handleUpdateClose}>
                <Modal.Body>
                    <Button variant="close" onClick={handleUpdateClose}><i className='th th-close'></i></Button>

                    <div className="modal-conformation-wrapper">
                        <div className="modal-conformation-icon">
                            <img src={warning} alt="warning" />
                        </div>
                        <div className="modal-conformation-content">
                            <h6>Are You Sure?</h6>
                            <p>You want ro update Estimate for
                                “Robert Downey Jr.”</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                    <div className="button-group">
                        <Button variant="white" onClick={handleUpdateClose}>
                            Close
                        </Button>
                        <Button variant="primary" className='btn-icon-start' onClick={handleUpdateClose}>
                            <i className='th-outline-tick-circle'></i>
                            Yes Update
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal >

            <Modal show={showEstimateUpdate} className='modal-theme modal-estimate-update' size="lg" centered scrollable onHide={handleEstimateUpdateClose}>
                <Modal.Body>
                    <Button variant="close" onClick={handleEstimateUpdateClose}><i className='th th-close'></i></Button>

                    <div className="modal-estimate-update-content">
                        <div className="estimate-update-success">
                            <div className="estimate-update-success-icon">
                                <img src={success} alt="success" />
                            </div>
                            <div className="estimate-update-success-text">
                                <h6>Estimate Update Successfully!</h6>
                                <p>Estimate update For “Robert Downey Jr.”</p>
                            </div>
                        </div>

                        <div className="estimate-update-info-row">
                            <div className="estimate-update-info-col">
                                <div className="estimate-update-info-title">
                                    <h6>Customer Information</h6>
                                </div>
                                <div className="estimate-update-info-card">
                                    <div className="estimate-update-info-icon">
                                        <img src={avatar1} alt="avatar1" />
                                    </div>
                                    <div className="estimate-update-info-text">
                                        <h6>Robert Downey Jr.</h6>
                                        <NavLink to="">david291@gmail.com</NavLink>
                                        <NavLink to="">(917) 339-6416</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="estimate-update-info-col">
                                <div className="estimate-update-info-title">
                                    <h6>Property Information</h6>
                                </div>
                                <div className="estimate-update-info-card">
                                    <div className="estimate-update-info-icon btn-light-secondary">
                                        <i className='th-bold-location'></i>
                                    </div>
                                    <div className="estimate-update-info-text">
                                        <h6>12345 Wescott Drive Midlothian VA 23112</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="estimate-update-info-summary">
                            <div className="estimate-update-info-title">
                                <h6>Customer Information</h6>
                            </div>

                            <Table responsive hover className='table-theme table-center outer-border'>
                                <thead>
                                    <tr>
                                        <th className='text-start' >Item</th>
                                        <th className='text-start' >Units</th>
                                        <th className='text-start' >Price</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {dummyItems.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <div className="tbl-profile-container">
                                                        <div className="tbl-profile-image">
                                                            <img src={avatar1} alt="avatar1" />
                                                        </div>
                                                        <div className="tbl-profile-content">
                                                            <h6>2 Rail Ornamental </h6>
                                                            <p>Aluminum</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='text-start'>
                                                    151 FT
                                                </td>
                                                <td className='text-start text-secondary'>
                                                    $6,040
                                                </td>

                                            </tr>
                                        )
                                    })}
                                    {/* <tr>
                                        <td>
                                            <div className="tbl-profile-container">
                                                <div className="tbl-profile-image">
                                                    <img src={avatar1} alt="avatar1" />
                                                </div>
                                                <div className="tbl-profile-content">
                                                    <h6>2 Rail Ornamental </h6>
                                                    <p>Aluminum</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-group form-group-tbl-dropdown">
                                                <Form.Select className='form-select' aria-label="Default select example">
                                                    <option>Choose Color</option>
                                                    <option value="1">Tan One</option>
                                                    <option value="2">Tan Two</option>
                                                    <option value="3">Tan Three</option>
                                                </Form.Select>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-group form-group-tbl-dropdown">
                                                <Form.Select className='form-select' aria-label="Default select example">
                                                    <option>Add Height</option>
                                                    <option value="1">5ft</option>
                                                    <option value="2">6ft</option>
                                                    <option value="3">7ft</option>
                                                </Form.Select>
                                            </div>
                                        </td>
                                        <td>
                                            <Form.Group className="form-group form-group-sm" controlId="exampleForm.ControlInput1">
                                                <Form.Control type='text' className='form-control' />
                                            </Form.Group>
                                        </td>
                                        <td>
                                            <Form.Group className="form-group form-group-sm" controlId="exampleForm.ControlInput1">
                                                <Form.Control type='text' className='form-control' />
                                            </Form.Group>
                                        </td>
                                        <td>
                                            <Form.Group className="form-group form-group-sm" controlId="exampleForm.ControlInput1">
                                                <Form.Control type='text' className='form-control' />
                                            </Form.Group>
                                        </td>
                                        <td className='tbl-checkbox'>
                                            <div className="checkbox checkbox-primary checkbox-small">
                                                <input type="checkbox" id="memberchk-1" className="material-inputs filled-in" />
                                                <label htmlFor="memberchk-1"></label>
                                            </div>
                                        </td>
                                        <td className='tbl-action'>
                                            <div className="tbl-action-group">
                                                <button type="button" className="btn-xs text-secondary btn btn-icon2 btn-icon-start"><i className="th-outline-tick-circle"></i> Save</button>
                                                <button type="button" className="btn-xs text-danger btn btn-icon2 btn-icon-start"><i className="th-outline-close-circle"></i></button>
                                            </div>
                                        </td>
                                    </tr> */}

                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>
                                            Total
                                        </td>
                                        <td>
                                            -
                                        </td>
                                        <td className='text-secondary'>
                                            $15,900
                                        </td>

                                    </tr>
                                </tfoot>
                            </Table>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>

                    <Button variant="primary" onClick={handleEstimateUpdateClose}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal >

            <Modal show={showCustomerDetails} size='lg' className='modal-theme' centered scrollable onHide={handleCustomerDetailsClose}>
                <Modal.Header >
                    <Modal.Title>Customer Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="">
                        <Form.Group className="form-group" >
                            <Form.Label>Street Address *</Form.Label>
                            <Form.Control type="text" className='form-control' placeholder="4130 Butternut Lane" />
                        </Form.Group>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group" >
                                    <Form.Label>City *</Form.Label>
                                    <Form.Control type="text" className='form-control' placeholder="Alton" />
                                </Form.Group>

                            </Col>
                            <Col md={6}>
                                <Form.Group className="form-group" >
                                    <Form.Label>State *</Form.Label>
                                    <Form.Control type="text" className='form-control' placeholder="Los Angeles" />
                                </Form.Group>

                            </Col>
                            <Col md={6}>
                                <Form.Group className="form-group" >
                                    <Form.Label>ZIP Code *</Form.Label>
                                    <Form.Control type="text" className='form-control' placeholder="62002" />
                                </Form.Group>

                            </Col>
                        </Row>

                        <Form.Group className="form-group" >
                            <Form.Label>Address 1</Form.Label>
                            <Form.Control type="text" className='form-control' placeholder="8980 Westminster Blvd #210" />
                        </Form.Group>

                        <div className="modal-inner-title">
                            <h3>Customer Details</h3>
                        </div>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group" >
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" className='form-control' placeholder="Westminster" />
                                </Form.Group>

                            </Col>
                            <Col md={6}>
                                <Form.Group className="form-group" >
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" className='form-control' placeholder="CO" />
                                </Form.Group>

                            </Col>

                            <Col md={6}>
                                <Form.Group className="form-group" >
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" className='form-control' placeholder="(970) 235-0413" />
                                </Form.Group>

                            </Col>
                            <Col md={6}>
                                <Form.Group className="form-group" >
                                    <Form.Label>Sales E-mail Address</Form.Label>
                                    <Form.Control type="text" className='form-control' placeholder="clay@trustedvine.com" />
                                </Form.Group>

                            </Col>
                        </Row>



                        <Form.Group className="form-group" >
                            <Form.Label>How did you hear about us? *</Form.Label>
                            <Form.Select className='form-control' aria-label="Default select example">
                                <option>Instagram</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>


                    </div>
                </Modal.Body>
                <Modal.Footer className='justify-content-end'>

                    <div className="button-group">
                        <Button variant="white" onClick={handleCustomerDetailsClose}>
                            Close
                        </Button>
                        <Button variant="primary" className='btn-icon-start' onClick={handleCustomerDetailsClose}>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditEstimate)