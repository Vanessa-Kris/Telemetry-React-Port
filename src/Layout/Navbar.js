import React from 'react'
//import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';


const Navbar = () => {
   return (
    <>
   
   <div className="sidebar">
   <div className='menu' >
   <h4 >open</h4>
   </div>
   
        <div className="logo-details">
            <img src="./logoicon.png" alt="" width="95px" className="ps-3"/>
            <span className="logo_name">SWOB</span>
        </div>
        <ul className="nav-links">
        <Link to="/">
            <li>
                <span>
                    <i className='bx bx-grid-alt'></i>
                    <span className="link_name">Dashboard</span>
                </span>
                <ul className="sub-menu blank">
                    <li><span className="link_name">Dashboard</span></li>
                </ul>
            </li>
            </Link>

            <Link to="/Help">
            <li>
                <span>
                    <i className='bx bx-help-circle'></i>
                    <span className="link_name">Help</span>
                </span>
                <ul className="sub-menu blank">
                    <li><span className="link_name">Help</span></li>
                </ul>
            </li>
          </Link>

            <Link to="/Support">
            <li>
                <span>
                    <i className='bx bx-support'></i>
                    <span className="link_name">Support</span>
                </span>
                <ul className="sub-menu blank">
                    <li><span className="link_name">Support</span></li>
                </ul>
            </li>
            </Link>
        </ul>
    </div>
    <Dashboard/>
</>
   )
}

export default Navbar;