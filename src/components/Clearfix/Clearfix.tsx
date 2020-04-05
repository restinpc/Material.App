/**
 * Material.App - Clearfix separator component.
 *
 * @ 06.02.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clearfixStyles from "./Clearfix.style";

// @ts-ignore
const useStyles = makeStyles(clearfixStyles);

const Clearfix: React.FunctionComponent = () => {
    document.handler.log("Clearfix.render()");
    const classes = useStyles();
    return <div className={classes.clearfix} />;
};

export default Clearfix;
