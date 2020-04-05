/**
 * Material.App - Sidebar container.
 *
 * @ 06.02.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import {withRouter} from "react-router";
import {connect} from "react-redux";
import SidebarComponent from "./Sidebar.component";
//----------------------------------------------------------------------------------------------------------------------
const mapStateToProps = (state) => {
    return {
        errors: state.errors.data
    }
}
//----------------------------------------------------------------------------------------------------------------------
const mapDispatchToProps = (dispatch) => {
    return { }
}
//----------------------------------------------------------------------------------------------------------------------
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarComponent));
