/**
 * Material.App - Modal window component.
 *
 * @ 06.02.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";
import "./Modal.css";
import {IModalProps, IModalState} from "./Modal.props";

class ModalComponent extends React.PureComponent<IModalProps, IModalState>{
    renderId: number;
    //------------------------------------------------------------------------------------------------------------------
    constructor(props){
        super(props);
        document.handler.log("ModalComponent.constructor()");
        this.renderId = 0;
    }
    //------------------------------------------------------------------------------------------------------------------
    componentDidMount(){
        document.handler.log("ModalComponent.componentDidMount()");
    }
    //------------------------------------------------------------------------------------------------------------------
    componentWillUnmount() {
        document.handler.log("ModalComponent.componentWillUnmount()");
    }
    //------------------------------------------------------------------------------------------------------------------
    render(){
        document.handler.log("ModalComponent.render() №"+(++this.renderId));
        return (
            <div className="Modal">
                <div className="modal-wrapper">
                    <div className="modal-container">
                        <div className="modal-data">
                            <i className="pe-7s-close icon"
                               onClick={() => {
                                   document.handler.info("ModalComponent.icon(Close window).click()")
                                   if(window.confirm("Вы уверены? Все несохраненные изменения будут утеряны")) {
                                       this.props.hideModal();
                                   }
                               }}
                               title="Close window"
                            />
                            <h1>{this.props.header}</h1>
                            <div>
                                {
                                    //TODO - Заменить компонентом отображения модальных данных
                                    JSON.stringify(this.props.data)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalComponent;
