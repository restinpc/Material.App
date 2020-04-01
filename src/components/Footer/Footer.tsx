/**
 * Material.App - CustomTabs component.
 *
 * @ 06.02.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Footer.style";
// @ts-ignore
const useStyles = makeStyles(styles);

export default function Footer(props) {
    document.handler.log("Footer.render()");
    const classes = useStyles();
    const { whiteFont } = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <NavLink
                                to="/landing-page"
                                className={classes.block}
                                color="transparent"
                            >
                                Landing Page
                            </NavLink>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <NavLink
                                to="/profile-page"
                                className={classes.block}
                                color="transparent"
                            >
                                Profile Page
                            </NavLink>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="https://stash.delta.sbrf.ru/users/out-vorkunov-av/repos/material.app/browse"
                                className={classes.block}
                                target="_blank"
                            >
                                BitBucket
                            </a>
                        </ListItem>
                    </List>
                </div>
                <div className={classes.right}>
                    Material.App
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    whiteFont: PropTypes.bool
};
