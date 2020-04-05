/**
 * Material.App - RightModal container.
 *
 * @ 06.02.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import {withRouter} from "react-router";
import {connect} from "react-redux";
import RightModalComponent from "./RightModal";
import * as actions from "../../actions";
import showSuccess from "../../functions/showSuccess";
//----------------------------------------------------------------------------------------------------------------------
const mapStateToProps = (state) => {
    return {
        content: state.tasks.showRightModal
    }
}
//----------------------------------------------------------------------------------------------------------------------
const mapDispatchToProps = (dispatch) => {
    return {
        hideRightModal: () => {
            dispatch(
                actions.hideRightModal()
            )
            document.body.style.overflow = "auto";
        }
    }
}
//----------------------------------------------------------------------------------------------------------------------
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RightModalComponent));
