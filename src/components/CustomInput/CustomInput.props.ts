/**
 * Material.App - CustomInput Props.
 *
 * @ 21.01.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import {ReactNode} from "react";
import PropTypes from "prop-types";

interface ICustomInputProps{
    labelText: ReactNode,
    labelProps: object,
    id: string,
    inputProps: object,
    formControlProps: {
        className: string,
    },
    inputRootCustomClasses: string,
    error: boolean,
    success: boolean,
    white: boolean,
}

const CustomInputPropTypes = {
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    formControlProps: PropTypes.any,
    inputRootCustomClasses: PropTypes.string,
    error: PropTypes.bool,
    success: PropTypes.bool,
    white: PropTypes.bool
};

export { ICustomInputProps, CustomInputPropTypes};
