/**
 * Material.App - Admin data, props and state interface.
 *
 * @ 19.12.2019 # Aleksandr <developing@nodes-tech.ru>
 */

import {ReactElement} from "react";

interface INotification{
    title: ReactElement,
    message: ReactElement,
    level: string,
    position: string,
    autoDismiss: number
}

interface IAdminProps{
    scroll: (number) => void,
    location: Location,
    initNotificationSystem: (notification:INotification) => void,
    displayModal: boolean;
    displayWideModal: boolean;
    hideModals: () => void;
}

interface IAdminState{
    color: string,
    fixedClasses: string,
    image?: string,
    hasImage?: boolean,
}

export {IAdminProps, IAdminState, INotification}
