/**
 * Material.App - Typography Info component.
 *
 * @ 06.02.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Typography.style";
// @ts-ignore
const useStyles = makeStyles(styles);

export default function Info(props) {
    document.handler.log("Info.render()");
    const classes = useStyles();
    const { children } = props;
    return (
        <div className={classes.defaultFontStyle + " " + classes.infoText}>
            {children}
        </div>
    );
}
