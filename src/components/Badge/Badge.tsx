/**
 * Material.App - Badge Component.
 *
 * @ 06.02.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import React from "react"
import { InferProps } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Badge.style";
import { BadgeDefaultProps, BadgePropTypes } from "./Badge.props";
// @ts-ignore
const useStyles = makeStyles(styles);

const Badge: React.FunctionComponent = (props:InferProps<typeof BadgePropTypes>) => {
    document.handler.log("Badge.render()");
    const classes = useStyles();
    const { color, children } = props;
    return (
        <span className={classes.badge + " " + classes[color]}>{children}</span>
    );
};

Badge.defaultProps = BadgeDefaultProps;
Badge.propTypes = BadgePropTypes;

export default Badge;
