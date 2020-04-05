/**
 * Material.App - AdminNavbar component.
 *
 * @ 06.02.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import * as React from "react";
import { Navbar } from "react-bootstrap";
import AdminNavbarLinks from "./AdminNavbarLinks";
import {IAdminNavbarProps, IAdminNavbarState} from "./AdminNavbar.props";
import "./AdminNavbar.css";

class AdminNavbar extends React.Component<IAdminNavbarProps, IAdminNavbarState> {
    //------------------------------------------------------------------------------------------------------------------
    constructor(props) {
        document.handler.log("AdminNavbar.constructor()");
        super(props);
        this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
        this.state = {
            sidebarExists: false
        };
    }
    //------------------------------------------------------------------------------------------------------------------
    mobileSidebarToggle(e) {
        document.handler.log("AdminNavbar.mobileSidebarToggle()");
        try {
            if (this.state.sidebarExists === false) {
                this.setState({
                    sidebarExists: true
                });
            }
            e.preventDefault();
            document.documentElement.classList.toggle("nav-open");
            var node = document.createElement("div");
            node.id = "bodyClick";
            node.onclick = function () {
                document.handler.info("AdminNavbar.div(bodyClick).click()");
                // @ts-ignore
                this.parentElement.removeChild(this);
                document.documentElement.classList.toggle("nav-open");
            };
            document.body.appendChild(node);
        }catch(e){ }
    }
    //------------------------------------------------------------------------------------------------------------------
    render() {
        document.handler.log("AdminNavbar.render()");
        return (
            <Navbar className="AdminNavbar" fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        {this.props.brandText}
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={(e)=>{
                        document.handler.info("AdminNavbar.Navbar(Toggle).click()");
                        this.mobileSidebarToggle(e);
                    }} />
                </Navbar.Header>
                <Navbar.Collapse>
                    <AdminNavbarLinks />
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export {AdminNavbar as default, IAdminNavbarProps, IAdminNavbarState};
