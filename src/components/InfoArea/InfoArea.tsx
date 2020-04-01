/**
 * Material.App - InfoArea component.
 *
 * @ 06.02.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./InfoArea.style";
import {InfoAreaDefaultProps, InfoAreaPropTypes} from "./InfoArea.props";
// @ts-ignore
const useStyles = makeStyles(styles);

function InfoArea(props) {
    document.handler.log("InfoArea.render()");
    const classes = useStyles();
    const { title, description, iconColor, vertical } = props;
    const iconWrapper = classNames({
        [classes.iconWrapper]: true,
        [classes[iconColor]]: true,
        [classes.iconWrapperVertical]: vertical
    });
    const iconClasses = classNames({
        [classes.icon]: true,
        [classes.iconVertical]: vertical
    });
    return (
        <div className={classes.infoArea}>
            <div className={iconWrapper}>
                <props.icon className={iconClasses} />
            </div>
            <div className={classes.descriptionWrapper}>
                <h4 className={classes.title}>{title}</h4>
                <p className={classes.description}>{description}</p>
            </div>
        </div>
    );
}

InfoArea.defaultProps = InfoAreaDefaultProps;
InfoArea.propTypes = InfoAreaPropTypes;

export default InfoArea;
