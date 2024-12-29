import React, { useEffect, useState } from 'react'
import logo from "../../assets/images/dummy-logo.svg";
import defaultAvatar from "../../assets/images/avatar-default.svg";
import { Button, Form } from 'react-bootstrap';
import { RootState } from '../../redux/store';
import { loading } from '../../redux/Loader/loader.action';
import { connect } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { ENUMFORROUTES } from '../../interfaces/interface';
/**
 * Navbar component
 */
const Navbar = (props) => {



  const [SidebarSize, setSidebarSize] = useState('lg');
  const windowSize = document.documentElement.clientWidth;

  const toogleMenu = () => {
    if (windowSize > 1024) {
      setSidebarSize(SidebarSize === 'sm' ? 'lg' : 'sm');
      document.documentElement.setAttribute('data-sidebar-size', SidebarSize === 'lg' ? 'sm' : 'lg');
    }
  };
  return (

    <header id="page-topbar">
      <div className="layout-width">
        <div className="navbar-header">
          <div className="navbar-header-left ">
            {/* <!-- LOGO --> */}
            <div className="navbar-brand-box horizontal-logo">


              <a href="index.html" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logo} alt="logoSm" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logo} alt="logoLight" height="17" />
                </span>
              </a>
            </div>

            {/* <button type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" */}
            <Button className=" vertical-menu-btn topnav-hamburger " id="topnav-hamburger-icon" onClick={toogleMenu}>
              <i className='th-outline-arrow-right-1'></i>
              {/* <span className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </span> */}
            </Button>

            {/* <!-- App Search--> */}
            <form className="app-search d-none d-md-block">
              <div className="position-relative">

                {/* <Form.Group className="form-group mb-0">
                  <div className="form-control-icon icon-start">
                    <i className='th-outline-search-normal-1'></i>
                    <Form.Control
                      type="search"
                      placeholder="Search anything ..."
                      className=" mr-sm-2"
                    />
                  </div>
                </Form.Group> */}

              </div>

            </form>
          </div>

          <div className="navbar-header-right d-flex align-items-center">
            {/* 
            <div className="header-item navbar-add-btn">
              <Button variant='grad-secondary' className='btn-icon-start' > <i className='th-outline-add-circle'></i> Create Charity</Button>
            </div> */}

            <div className="navbar-header-action">
              {/* <div className="dropdown topbar-head-dropdown  header-item" id="notificationDropdown">
                <button type="button" className="btn-icon btn-white btn-sm"
                >
                  <i className="th-outline-messages"></i>
                
                </button>
              </div>
              <div className="dropdown topbar-head-dropdown  header-item" id="notificationDropdown">
                <button type="button" className="btn-icon btn-white btn-sm"
                >
                  <i className="th-outline-notification"></i>
                  
                </button>
              </div> */}
            </div>


            <div className="dropdown header-item topbar-user">
              <button type="button" className="topbar-user-btn" id="page-header-user-dropdown" data-bs-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <span className="d-flex align-items-center">

                  <img className="rounded-circle header-profile-user"
                    src={defaultAvatar} alt="Header Avatar" />

                  <span className="text-start">
                    <span className="d-none d-xl-inline-block  user-name-text">John</span>
                    <span className="d-none d-xl-block  user-name-sub-text">Founder</span>
                  </span>
                </span>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <h6 className="dropdown-header">Welcome John!</h6>
                <NavLink to={ENUMFORROUTES.My_PROFILE} className="dropdown-item"><i
                  className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span
                    className="align-middle" >Profile</span></NavLink>
                <a className="dropdown-item" onClick={() => {
                  localStorage.removeItem("token");
                  props.loading(true);
                  setTimeout(() => {
                    props.loading(false);
                  }, 2000);
                }}><i
                  className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span
                    className="align-middle" data-key="t-logout">Logout</span></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = (state: RootState) => {
  //   return { appReducer: state.loaderReducer };
};

const mapDispatchToProps = {
  loading

};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);