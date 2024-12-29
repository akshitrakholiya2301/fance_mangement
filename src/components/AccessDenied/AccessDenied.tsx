import React from 'react'
import { connect } from 'react-redux'
import accessDenied from '../../assets/images/AccessDenied.png'
import { Button } from 'react-bootstrap'
const AccessDenied = (props) => {
    return (
        <>
            <div className="page-content">
                <div className="page-content-wrapper">
                    <div className="not-found-page">
                        <div className="not-found-page-image">
                            <img src={accessDenied} alt="accessDenied" />
                        </div>
                        <div className="not-found-page-text">
                            <h2>Oops! Page Not Found</h2>
                            <p>You may have mistyped the address or page may have moved.</p>
                            <Button variant="primary">Go back to Dashboard</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AccessDenied)