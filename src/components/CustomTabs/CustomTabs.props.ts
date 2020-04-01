/**
 * Material.App - CustomTabs Props.
 *
 * @ 21.01.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {ReactNode} from "react";
import PropTypes from "prop-types";

interface ITab {
    tabName: string,
    tabIcon?: any,
    tabContent: ReactNode,
}

interface ICustomTabsProps {
    title?: string,
    tabs: ITab[],
    rtlActive?: boolean,
    plainTabs?: boolean,
}

const CustomTabsPropTypes = {
    title: PropTypes.string,
    tabs: PropTypes.any,
    rtlActive: PropTypes.bool,
    plainTabs: PropTypes.bool
};

export {ICustomTabsProps, CustomTabsPropTypes, ITab};
