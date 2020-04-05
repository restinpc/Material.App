/**
 * Material.App - Admin container.
 *
 * @ 19.12.2019 # Aleksandr <developing@nodes-tech.ru>
 */

import {withRouter} from "react-router";
import {connect} from "react-redux";
import Admin from "./Admin.component";
import * as actions from "../../actions";
import {INotification} from "./Admin.interface";
//----------------------------------------------------------------------------------------------------------------------
const mapStateToProps = (state) => {
    return {
        displayModal: state.main.display,
        displayWideModal: state.main.displayWideModal,
        wideModalData: state.main.wideModalData
    }
}
//----------------------------------------------------------------------------------------------------------------------
const mapDispatchToProps = (dispatch) => {
    return {
        initNotificationSystem: (addNotification:INotification) => {
            dispatch(
                actions.addNotificationSystem(addNotification)
            )
        },
        scroll: (scroll:number): void => {
            dispatch(
                actions.scrollWindow(scroll)
            )
        },
        hideModals: (): void =>{
            dispatch(
                actions.hideModal()
            );
            dispatch(
                actions.hideWideModal()
            );
            document.body.style.overflow = "auto";
        }
    }
}
//----------------------------------------------------------------------------------------------------------------------
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));
