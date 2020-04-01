/**
 * Material.App - CustomDropdown Props.
 *
 * @ 21.01.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import PropTypes from "prop-types";
import {ReactNode} from "react";

interface ICustomDropdownProps {
    hoverColor?: string;
    buttonText: ReactNode;
    buttonIcon?: any;
    dropdownList: any[];
    buttonProps?: any,
    dropup?: boolean;
    dropdownHeader?: ReactNode;
    rtlActive?: boolean;
    caret?: boolean;
    left?: boolean;
    noLiPadding?: boolean;
    onClick?: (event:any) => void;
}

const CustomDropdownDefaultProps = {
    caret: true,
    hoverColor: "primary"
};

const CustomDropdownPropTypes = {
    hoverColor: PropTypes.oneOf([
        "black",
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose"
    ]),
    buttonText: PropTypes.node,
    buttonIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    dropdownList: PropTypes.array,
    buttonProps: PropTypes.object,
    dropup: PropTypes.bool,
    dropdownHeader: PropTypes.node,
    rtlActive: PropTypes.bool,
    caret: PropTypes.bool,
    left: PropTypes.bool,
    noLiPadding: PropTypes.bool,
    onClick: PropTypes.func
};

export { ICustomDropdownProps, CustomDropdownDefaultProps, CustomDropdownPropTypes };
