/**
 * Material.App - Button component.
 *
 * @ 06.02.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import React from "react";
import classNames from "classnames";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import buttonStyle from "./Button.style";
import { InferProps } from "prop-types";
import { ButtonPropTypes } from "./Button.props";
// @ts-ignore
const makeComponentStyles = makeStyles(() => ({...buttonStyle}));

const RegularButton = React.forwardRef((props:InferProps<typeof ButtonPropTypes>, ref) => {
    document.handler.log("Button.render()");
    const {
        color,
        round,
        children,
        fullWidth,
        disabled,
        simple,
        size,
        block,
        link,
        justIcon,
        className,
        ...rest
    } = props;
    const classes = makeComponentStyles();
    const btnClasses = classNames({
        [classes.button]: true,
        [classes[size]]: size,
        [classes[color]]: color,
        [classes.round]: round,
        [classes.fullWidth]: fullWidth,
        [classes.disabled]: disabled,
        [classes.simple]: simple,
        [classes.block]: block,
        [classes.link]: link,
        [classes.justIcon]: justIcon,
        [className]: className
    });
    // @ts-ignore
    return <Button {...rest} ref={ref} className={btnClasses}>{ children }</Button>
});

export default RegularButton;
