/**
 * Material.App - Modal Props.
 *
 * @ 06.02.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {ModalTypes} from "../../variables/Types";

interface IModalProps {
    hideModal: () => void;
    header: string;
    type: typeof ModalTypes;
    data: any;
}

interface IModalState{ }

export {IModalProps, IModalState}


