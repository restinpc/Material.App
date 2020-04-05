/**
 * Material.App - Typography Quote component.
 *
 * @ 06.02.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Typography.style";
// @ts-ignore
const useStyles = makeStyles(styles);

export default function Quote(props) {
    document.handler.log("Quote.render()");
    const { text, author } = props;
    const classes = useStyles();
    return (
        <blockquote className={classes.defaultFontStyle + " " + classes.quote}>
            <p className={classes.quoteText}>{text}</p>
            <small className={classes.quoteAuthor}>{author}</small>
        </blockquote>
    );
}

Quote.propTypes = {
  text: PropTypes.node.isRequired,
  author: PropTypes.node
};
