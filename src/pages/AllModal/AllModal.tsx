import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux'
import warning from '../../assets/images/warning.svg'
import success from '../../assets/images/success.svg'
import Modaldelete from '../../assets/images/delete.svg'
import ModalAlert from '../../assets/images/alert.svg'


export const AllModal = (props) => {
    const [showModalSuccess, setModalSuccessShow] = useState(false);
    const handleModalSuccessClose = () => setModalSuccessShow(false);
    const handleModalSuccessShow = () => setModalSuccessShow(true);

    const [showModalWarning, setModalWarningShow] = useState(false);
    const handleModalWarningClose = () => setModalWarningShow(false);
    const handleModalWarningShow = () => setModalWarningShow(true);


    const [showModalDelete, setModalDeleteShow] = useState(false);
    const handleModalDeleteClose = () => setModalDeleteShow(false);
    const handleModalDeleteShow = () => setModalDeleteShow(true);

    const [showModalAlert, setModalAlertShow] = useState(false);
    const handleModalAlertClose = () => setModalAlertShow(false);
    const handleModalAlertShow = () => setModalAlertShow(true);
    return (
        <>
            <div className="page-content">
                <div className="page-content-wrapper">

                    <div className="p-3">
                        <h3>All Action Modal</h3>
                        <div className="d-flex gap-2 mt-2">
                            <Button variant='warning' onClick={handleModalWarningShow}>Warning</Button>
                            <Button variant='success' onClick={handleModalSuccessShow}>Success</Button>
                            <Button variant='danger' onClick={handleModalDeleteShow}>Delete</Button>
                            <Button variant='danger' onClick={handleModalAlertShow}>Alert</Button>
                        </div>
                    </div>
                </div>
            </div>



            <Modal show={showModalWarning} className='modal-theme modal-conformation' size="sm" centered scrollable onHide={handleModalWarningClose}>
                <Modal.Body>
                    <Button variant="close" onClick={handleModalWarningClose}><i className='th th-close'></i></Button>

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
                        <Button variant="white" onClick={handleModalWarningClose}>
                            Close
                        </Button>
                        <Button variant="primary" className='btn-icon-start' onClick={handleModalWarningClose}>
                            <i className='th-outline-tick-circle'></i>
                            Yes Update
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal >

            <Modal show={showModalSuccess} className='modal-theme modal-conformation' size="sm" centered scrollable onHide={handleModalSuccessClose}>
                <Modal.Body>
                    <Button variant="close" onClick={handleModalSuccessClose}><i className='th th-close'></i></Button>

                    <div className="modal-conformation-wrapper">
                        <div className="modal-conformation-icon">
                            <img src={success} alt="Success" />
                        </div>
                        <div className="modal-conformation-content">
                            <h6>Are You Sure?</h6>
                            <p>Detail description of the
                                success modal</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                    <div className="button-group">
                        <Button variant="white" onClick={handleModalSuccessClose}>
                            Close
                        </Button>
                        <Button variant="primary" className='btn-icon-start' onClick={handleModalSuccessClose}>
                            <i className='th-outline-tick-circle'></i>
                            Action
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal >
            <Modal show={showModalDelete} className='modal-theme modal-conformation' size="sm" centered scrollable onHide={handleModalDeleteClose}>
                <Modal.Body>
                    <Button variant="close" onClick={handleModalDeleteClose}><i className='th th-close'></i></Button>

                    <div className="modal-conformation-wrapper">
                        <div className="modal-conformation-icon">
                            <img src={Modaldelete} alt="Delete" />
                        </div>
                        <div className="modal-conformation-content">
                            <h6>Are You Sure?</h6>
                            <p>Detail description of the
                                Delete modal</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                    <div className="button-group">
                        <Button variant="white" onClick={handleModalDeleteClose}>
                            Close
                        </Button>
                        <Button variant="primary" className='btn-icon-start' onClick={handleModalDeleteClose}>
                            <i className='th-outline-tick-circle'></i>
                            Action
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal >
            <Modal show={showModalAlert} className='modal-theme modal-conformation' size="sm" centered scrollable onHide={handleModalAlertClose}>
                <Modal.Body>
                    <Button variant="close" onClick={handleModalAlertClose}><i className='th th-close'></i></Button>

                    <div className="modal-conformation-wrapper">
                        <div className="modal-conformation-icon">
                            <img src={ModalAlert} alt="Alert" />
                        </div>
                        <div className="modal-conformation-content">
                            <h6>Are You Sure?</h6>
                            <p>Detail description of the
                                Alert modal</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                    <div className="button-group">
                        <Button variant="white" onClick={handleModalAlertClose}>
                            Close
                        </Button>
                        <Button variant="primary" className='btn-icon-start' onClick={handleModalAlertClose}>
                            <i className='th-outline-tick-circle'></i>
                            Action
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal >
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AllModal)