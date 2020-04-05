/**
 * Material.App - Custom Checkbox component.
 *
 * @ 21.01.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import * as React from "react";
import {ICustomCheckboxProps} from "./CustomCheckbox.props";

const CustomCheckbox: React.FunctionComponent<ICustomCheckboxProps> = (props) => {
    document.handler.log("CustomCheckbox.render()");
    const { isChecked, number, label, inline, className, ...rest } = props;
    const classes = inline !== undefined ? "checkbox checkbox-inline "+className : "checkbox "+className;
    return (
        <div className={classes}>
            <input
                id={number}
                type="checkbox"
                checked={props.isChecked}
                readOnly={true}
                {...rest}
            />
            <label htmlFor={number}>{label}</label>
        </div>
    );
};

export { CustomCheckbox };
