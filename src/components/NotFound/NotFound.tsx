import React from 'react'
import { Button } from 'react-bootstrap'
import notFound from '../../assets/images/not-found.svg'
/**
 * NotFound component
 */
const NotFound = () => {
  return (
    <>
      <div className="page-content">
        <div className="page-content-wrapper">
          <div className="not-found-page">
            <div className="not-found-page-image">
              <img src={notFound} alt="notFound" />
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

export default NotFound