/**
 * Material.App - Application root component.
 *
 * @ 06.02.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import * as React from "react";
import { Route, Switch } from "react-router-dom";
import AdminNavbar from "../../components/Navbars/AdminNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import routes from "../../adminRoutes";
import NotificationSystem from "react-notification-system";
import Modal from "../../components/Modal/Modal";
import {IAdminProps, IAdminState} from "./Admin.interface";
import notificationStyle from "../../variables/notificationStyle";
import WideModal from "../../components/WideModal/WideModal";
import "./Admin.css";
import isString from "../../functions/isString";
import {RefObject} from "react";

class AdminComponent extends React.Component<IAdminProps, IAdminState>{
    renderId: number;
    state: IAdminState;
    checkContentHeight: boolean;
    sidebarRef: RefObject<HTMLDivElement>;
    mainPanelRef: RefObject<HTMLDivElement>;
    //------------------------------------------------------------------------------------------------------------------
    constructor(props) {
        super(props);
        document.handler.log("AdminComponent.constructor()");
        this.renderId = 0;
        this.state = {
            color: "white",
            fixedClasses: "dropdown show-dropdown open",
        };
        window.addEventListener("keydown", (e) =>  {
            if(e.key === "Escape"){
                this.props.hideModals();
            }
        });
        this.sidebarRef = React.createRef<HTMLDivElement>();
        this.mainPanelRef = React.createRef<HTMLDivElement>();
        this.checkContentHeight = true;
    }
    //------------------------------------------------------------------------------------------------------------------
    componentDidMount(){
        document.handler.log("AdminComponent.componentDidMount()");
        // @ts-ignore
        this.props.initNotificationSystem(this.refs.notificationSystem.addNotification);
        this.forceUpdate();
        window.onresize = (e) => {this.forceUpdate();}
        //window.onscroll = (e) => { this.props.scroll(window.scrollY); }
    }
    //------------------------------------------------------------------------------------------------------------------
    componentWillUnmount() {
        document.handler.log("AdminComponent.componentWillUnmount()");
        window.onresize = null;
        //window.onscroll = null;
    }
    //------------------------------------------------------------------------------------------------------------------
    componentDidCatch(error, errorInfo){
        document.handler.error(error.toString()+' -> '+errorInfo.toString());
    }
    //------------------------------------------------------------------------------------------------------------------
    getRoutes = routes => {
        document.handler.log("AdminComponent.getRoutes()");
        let minHeight = "100%";
        if(this.sidebarRef && this.sidebarRef.current && this.sidebarRef.current.clientHeight){
            minHeight = (this.sidebarRef.current.clientHeight-83)+"px";
        }
        return routes &&
            routes.length &&
            routes.map((prop, key) => {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        render={props => (
                            <prop.component
                                minHeight={minHeight}
                                updateParent={(checkContentHeight) => {
                                    this.checkContentHeight = checkContentHeight;
                                    this.forceUpdate();
                                }}
                                {...props}
                            />
                        )}
                        key={key}
                    />
                );
            });
    };
    //------------------------------------------------------------------------------------------------------------------
    getBrandText = path => {
        document.handler.log("AdminComponent.getBrandText()");
        for (let i = 0; i < routes.length; i++) {
            if (
                this.props.location &&
                this.props.location.pathname &&
                isString(this.props.location.pathname) &&
                this.props.location.pathname.indexOf(
                    routes[i].layout + routes[i].path
                ) !== -1
            ) {
                return routes[i].name;
            }
        }
        document.handler.throw();
    };
    //------------------------------------------------------------------------------------------------------------------
    componentDidUpdate(e) {
        document.handler.log("AdminComponent.componentDidUpdate("+e.history.action+")");
        try {
            if (
                window.innerWidth < 993 &&
                e.history.location.pathname !== e.location.pathname &&
                document.documentElement &&
                document.documentElement.className &&
                isString(document.documentElement.className) &&
                document.documentElement.className.indexOf("nav-open") !== -1
            ) {
                document.documentElement.classList.toggle("nav-open");
            }
            if (e.history.action === "PUSH") {
                document.documentElement.scrollTop = 0;
                document.scrollingElement.scrollTop = 0;
                // @ts-ignore
                this.mainPanelRef.scrollTop = 0;
            }
        }catch(e){
            document.handler.log("AdminComponent.componentDidUpdate -> "+e.message);
        }
    }
    //------------------------------------------------------------------------------------------------------------------
    render() {
        document.handler.log("AdminComponent.render() №"+(++this.renderId));
        let minHeight;
        if(this.sidebarRef && this.sidebarRef.current && this.sidebarRef.current.clientHeight){
            minHeight = (this.sidebarRef.current.clientHeight);
            if(this.checkContentHeight) {
                let content = document.getElementsByClassName("content")[0];
                if (content && content.clientHeight > minHeight) {
                    minHeight = content.clientHeight + 80;
                }
            }
            minHeight += "px";
        }else{
            minHeight = "100%";
        }
        this.checkContentHeight = true;
        return (
            <div className="wrapper">
                <NotificationSystem ref="notificationSystem" style={notificationStyle} />
                <Sidebar refObject={this.sidebarRef} {...this.props} routes={routes} color={this.state.color}/>
                <div id="main-panel" className="main-panel" ref={this.mainPanelRef} style={{height:minHeight}}>
                    <AdminNavbar
                        {...this.props}
                        brandText={this.getBrandText(this.props.location.pathname)}
                    />
                    <Switch>{this.getRoutes(routes)}</Switch>
                </div>
                {
                    this.props.displayModal &&
                    <Modal />
                }
                {
                    this.props.displayWideModal &&
                    <WideModal />
                }
            </div>
        );
    }
}

export default AdminComponent;
