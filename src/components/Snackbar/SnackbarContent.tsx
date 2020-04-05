/**
 * Material.App - Snackbar component.
 *
 * @ 06.02.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Snack from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Close from "@material-ui/icons/Close";
import styles from "./Snackbar.style";
import SnackbarContentProps from "./Snackbar.props";
// @ts-ignore
const useStyles = makeStyles(styles);

export default function SnackbarContent(props) {
    document.handler.log("SnackbarContent.render()");
    const { message, color, close, icon } = props;
    const classes = useStyles();
    var action = [];
    const closeAlert = () => {
        document.handler.log("SnackbarContent.closeAlert()");
        setAlert(null);
    };
    if (close !== undefined) {
        action = [
            <IconButton
                className={classes.iconButton}
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={closeAlert}
            >
                <Close className={classes.close} />
            </IconButton>
        ];
    }
    let snackIcon = null;
    switch (typeof icon) {
        case "object":
            snackIcon = <props.icon className={classes.icon} />;
            break;
        case "string":
            snackIcon = <Icon className={classes.icon}>{props.icon}</Icon>;
            break;
        default:
            snackIcon = null;
            break;
    }
    const [alert, setAlert] = React.useState(
        <Snack
            message={
                <div>
                    {snackIcon}
                    {message}
                    {close !== undefined ? action : null}
                </div>
            }
            classes={{
                root: classes.root + " " + classes[color],
                message: classes.message + " " + classes.container
            }}
        />
    );
    return alert;
}

SnackbarContent.propTypes = SnackbarContentProps;
