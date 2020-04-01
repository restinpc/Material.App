/**
 * Material.App - RightModal Props.
 *
 * @ 06.02.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

interface IRightModalProps{
    content: any,
    saveTaskDetails: (action:string, obj:any) => void,
    hideRightModal: () => void,
    categories: any[];
    action: string;
}

interface IRightModalState{
    selected: string;
}

export {IRightModalProps, IRightModalState}
