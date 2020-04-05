/**
 * Material.App - GridItem component.
 *
 * @ 06.02.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import gridItemStyles from "./GridItem.style";
import {GridItemDefaultProps, GridItemPropTypes} from "./GridItem.props";
// @ts-ignore
const useStyles = makeStyles(gridItemStyles);

export default function GridItem(props) {
    document.handler.log("GridItem.render()");
    const classes = useStyles();
    const { children, className, ...rest } = props;
    return (
        <Grid item {...rest} className={classes.grid + " " + className}>
            {children}
        </Grid>
    );
}

GridItem.defaultProps = GridItemDefaultProps;
GridItem.propTypes = GridItemPropTypes;
