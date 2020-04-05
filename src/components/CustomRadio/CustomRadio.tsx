/**
 * Material.App - CustomRadio component.
 *
 * @ 06.02.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import * as React from "react";
import {ICustomRadioProps} from "./CustomRadio.props";

const CustomRadio: React.FunctionComponent<ICustomRadioProps> = (props) => {
    document.handler.log("CustomRadio.render()");
    const { number, label, option, name, ...rest } = props;
    return (
        <div className="radio">
            <input id={number} name={name} type="radio" value={option} {...rest} />
            <label htmlFor={number}>{label}</label>
        </div>
    );
}

export {CustomRadio as default};
