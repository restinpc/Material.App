/**
 * Material.App - CustomButton component.
 *
 * @ 21.01.2019 # Aleksandr <developing@nodes-tech.ru>
 */

import * as React from "react";
import { Button } from "react-bootstrap";
import cx from "classnames";
import {ICustomButtonProps} from "./CustomButton.props";

const CustomButton: React.FunctionComponent<ICustomButtonProps> = (props) => {
    document.handler.log("CustomButton.render()");
    const { fill, simple, pullRight, round, block, ...rest } = props;
    const btnClasses = cx({
        "btn-fill": fill,
        "btn-simple": simple,
        "pull-right": pullRight,
        "btn-block": block,
        "btn-round": round
    });
    return <Button className={btnClasses} {...rest} />;
}

export { CustomButton };
