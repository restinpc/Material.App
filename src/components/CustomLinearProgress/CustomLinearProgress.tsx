/**
 * Material.App - Linear progress bar component.
 *
 * @ 06.02.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import styles from "./CustomLinearProgress.style";
import {
    ICustomLinearProgressProps,
    CustomLinearProgressDefaultProps,
    CustomLinearProgressPropTypes
} from "./CustomLinearProgress.props";
import {InferProps} from "prop-types";

const useStyles = makeStyles(styles);

const CustomLinearProgress: React.FunctionComponent<ICustomLinearProgressProps> =
    (props:InferProps<typeof CustomLinearProgressPropTypes>) => {
    document.handler.log("CustomLinearProgress.render()");
    const classes = useStyles();
    const { color, ...rest } = props;
    return (
        <LinearProgress
            {...rest}
            classes={{
                root: classes.root + " " + classes[color + "Background"],
                bar: classes.bar + " " + classes[color]
            }}
        />
    );
};

CustomLinearProgress.defaultProps = CustomLinearProgressDefaultProps;
CustomLinearProgress.propTypes = CustomLinearProgressPropTypes;

export default CustomLinearProgress;
