/**
 * Material.App - Typography Success component.
 *
 * @ 06.02.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Typography.style";
// @ts-ignore
const useStyles = makeStyles(styles);

export default function Success(props) {
    document.handler.log("Success.render()");
    const classes = useStyles();
    const { children } = props;
    return (
        <div className={classes.defaultFontStyle + " " + classes.successText}>
            {children}
        </div>
    );
}
