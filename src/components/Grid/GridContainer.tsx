/**
 * Material.App - GridContainer component.
 *
 * @ 06.02.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import gridContainerStyles from "./GridContainer.style";
import {GridContainerDefaultProps, GridContainerPropTypes} from "./GridContainer.props";

const useStyles = makeStyles(gridContainerStyles);

export default function GridContainer(props) {
    document.handler.log("GridContainer.render()");
    const classes = useStyles();
    const { children, className, ...rest } = props;
    return (
        <Grid container {...rest} className={classes.grid + " " + className}>
            {children}
        </Grid>
    );
}

GridContainer.defaultProps = GridContainerDefaultProps;
GridContainer.propTypes = GridContainerPropTypes;
