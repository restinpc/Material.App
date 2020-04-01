/**
 * Material.App - HeaderLinks component.
 *
 * @ 06.02.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { Apps, AccountCircle } from "@material-ui/icons";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import adminRoutes from "../../adminRoutes";
import styles from "./HeaderLinks.style";
// @ts-ignore
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    document.handler.log("HeaderLinks.render()");
    const classes = useStyles();
    const routes = adminRoutes.map(item => {
        return !item.error && (
            <NavLink to={item.layout+item.path} className={classes.dropdownLink}>
                {item.name}
            </NavLink>
        );
    });
  return (
    <List className={classes.list}>
        <ListItem className={classes.listItem}>
            <NavLink
                to="/login-page"
                className={classes.navLink}
                color="transparent"
            >
                <AccountCircle className={classes.icons} />
                Login
            </NavLink>
        </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Admin"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={routes}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <a
            href="#"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </a>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <a
            color="transparent"
            href="#"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </a>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <a
            color="transparent"
            href="#"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </a>
        </Tooltip>
      </ListItem>
    </List>
  );
}
