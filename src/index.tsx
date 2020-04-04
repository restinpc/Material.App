/**
 * Material.App - Application index file.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import "core-js";
import * as React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {createBrowserHistory} from "history";
import {Provider} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import ReduxStore from "./reduxStore";
import ErrorHandler from "./errorHandler";
import AppLoader from "./appLoader";
import DataSource from "./dataSource";
import Admin from "./views/Admin/Admin";
import Components from "./views/Components/Components.js";
import LandingPage from "./views/LandingPage/LandingPage.js";
import ProfilePage from "./views/ProfilePage/ProfilePage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import "./assets/css/animate.min.css";
import "./assets/css/light-bootstrap-dashboard-react.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./assets/css/glyphicons-halflings-regular.css";
import "./assets/css/main.css";
//----------------------------------------------------------------------------------------------------------------------
/* @load */
const rootComponent = "root";
new ErrorHandler(rootComponent);
//----------------------------------------------------------------------------------------------------------------------
/* @init */
var appLoader, history;
try{
    document.reduxStore = ReduxStore();
    history = createBrowserHistory();
    appLoader = new AppLoader();
    new DataSource(
        process.env.REACT_APP_API_URL,
        document.reduxStore,
        appLoader
    );
    /* @listen */
    try {
        window.addEventListener("load", () => {
            setTimeout(() => {
                appLoader.load("window");
            }, 1000);
        });
    }catch(e){
        document.handler.error("Index.@listen -> "+e.message);
    }
    /* @react */
    try {
        document.dataSource.initData().then((success) => {
            if(success) {
                ReactDOM.render(
                    <div id="react">
                        <Provider store={document.reduxStore}>
                            <Router history={history}>
                                <Switch>
                                    <Route path="/components" component={Components} />
                                    <Route path="/landing-page" component={LandingPage} />
                                    <Route path="/profile-page" component={ProfilePage} />
                                    <Route path="/login-page" component={LoginPage} />
                                    <Route path="/admin" render={props => <Admin {...props} />} />
                                    <Redirect from="/admin" to="/admin/dashboard" />
                                    <Redirect from="/" to="/components" />
                                </Switch>
                            </Router>
                        </Provider>
                    </div>,
                    document.getElementById(rootComponent)
                );
            }else{
                document.handler.throw();
            }
        });
    }catch(e){
        document.handler.error("Index.@react -> "+e.message);
    }
}catch(e){
    document.handler.error("Index.@init -> "+e.message);
}
