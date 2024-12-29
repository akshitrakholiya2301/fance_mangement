import React, { useEffect, useState } from 'react'
import { Button, } from 'react-bootstrap';
import logo from "../../assets/images/dummy-logo.svg";
import sidebarLogoLg from "../../assets/images/logo-text.png";
import sidebarLogosm from "../../assets/images/logo.svg";
import { NavLink, useNavigate } from 'react-router-dom';
import { loading } from '../../redux/Loader/loader.action';
import { connect } from 'react-redux';
import { RootState } from '../../redux/store';
import SimpleBar from 'simplebar-react';
import { ENUMFORROUTES } from '../../interfaces/interface';
/**
 * Sidebar component
 */
const Sidebar = (props) => {

  const navigate = useNavigate();

  const [SidebarSize, setSidebarSize] = useState('lg');
  const windowSize = document.documentElement.clientWidth;

  const toogleMenu = () => {
    if (windowSize > 1024) {
      setSidebarSize(SidebarSize === 'sm' ? 'lg' : 'sm');
      document.documentElement.setAttribute('data-sidebar-size', SidebarSize === 'lg' ? 'sm' : 'lg');
    }
  };

  return (
    // {/* <!-- ========== App Menu ========== --> */ }
    < div className="app-menu navbar-menu" >
      {/* <!-- LOGO --> */}
      < div className="navbar-brand-box" >
        <a href="index.html" className="logo logo-dark">
          <span className="logo-sm">
            <img src={sidebarLogosm} alt="logoSm" height="48" />
          </span>
          <span className="logo-lg">
            <img src={sidebarLogoLg} alt="sidebarLogoLg" height="48" />
          </span>
        </a>
        <Button className=" vertical-menu-btn topnav-hamburger " id="topnav-hamburger-icon" onClick={toogleMenu}>
          <i className='th-outline-arrow-left'></i>
        </Button>
      </div >

      <div id="scrollbar">
        <div className="container-fluid">

          <div id="two-column-menu">
          </div>
          <SimpleBar id='scrollbar' className='scrollbar'>
            <div className="navbar-sidemenu">
              <ul className="navbar-nav" id="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link menu-link " to={ENUMFORROUTES.DASHBOARD}>
                    <i className="th-outline-grid-3"></i> <span data-key="t-widgets">Dashboard</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link menu-link " to={ENUMFORROUTES.GENERAL}>
                    <i className="th-outline-buildings"></i> <span data-key="t-widgets">General</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link menu-link " to={ENUMFORROUTES.MY_CATALOG}>
                    <i className="th-outline-clipboard-text"></i> <span data-key="t-widgets">Catalog</span>
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link menu-link " to={ENUMFORROUTES.MY_REPORTS}>
                    <i className="th-outline-chart"></i> <span data-key="t-widgets">Reports</span>
                  </NavLink>
                </li> */}

              </ul>
            </div>
          </SimpleBar>

          <div className="navbar-bottom navbar-sidemenu">
            <ul className="navbar-nav" id="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link menu-link" to="/settings">
                  <i className="th-outline-setting-2"></i> <span data-key="t-widgets">Settings</span>
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link menu-link" to="">
                  <i className="th-outline-info-circle"></i> <span data-key="t-widgets">Help & Support</span>
                </NavLink>
              </li> */}
            </ul>
            <div className="sidebar-footer">
              <p>© 2024 EstimatorBob</p>
            </div>
          </div>
        </div>
        {/* <!-- Sidebar --> */}
      </div>

      <div className="sidebar-background"></div>
    </div >
    // {/* <!-- Left Sidebar End --> */ }
  )
}

export default Sidebar