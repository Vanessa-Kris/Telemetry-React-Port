import React from 'react'
//import {Outlet, Link } from "react-router-dom";
// import 'boxicons';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <SideNav
        onSelect={(selected) => {
            // Add your code here
        }}
    >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Dashboard
                </NavText>
            </NavItem>
            <NavItem eventKey="charts">
                <NavIcon>
                    <i className="fa fa-fw fa-question" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Help
                </NavText>
                
            </NavItem>

            <NavItem eventKey="support">
                <NavIcon>
                    <i className="fa fa-fw fa-headset" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Support
                </NavText> 
                
        </NavItem>
        </SideNav.Nav>
    </SideNav>

    )
}

export default Navbar;