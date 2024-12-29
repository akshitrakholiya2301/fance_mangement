import React from 'react'
import { connect } from 'react-redux'
import thankyou from '../../../assets/images/thank-you.svg'
import { Button } from 'react-bootstrap'

const ThankYou = (props) => {
    return (
        <>
            <div className="thankyou">
                <div className="thankyou-image">
                    <img src={thankyou} alt="thankyou" />
                </div>
                <div className="thankyou-content">
                    <h3>Congratulations! All Done</h3>
                    <p>Thank you for choosing EstimatorBob!</p>

                    <Button variant='primary' >Go to Dashboard</Button>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ThankYou)