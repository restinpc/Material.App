/**
 * Material.App - WideModal container.
 *
 * @ 06.02.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import {withRouter} from "react-router";
import {connect} from "react-redux";
import WideModalComponent from "./WideModal.component";
import * as actions from "../../actions";
//----------------------------------------------------------------------------------------------------------------------
const mapStateToProps = (state) => {
    return {
        data: state.main.wideModalData
    }
}
//----------------------------------------------------------------------------------------------------------------------
const mapDispatchToProps = (dispatch) => {
    return {
        hideWideModal: () => {
            dispatch(
                actions.hideWideModal()
            );
            document.body.style.overflow = "auto";
        }
    }
}
//----------------------------------------------------------------------------------------------------------------------
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WideModalComponent));
