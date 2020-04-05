/**
 * Material.App - Pagination component.
 *
 * @ 06.02.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import React from "react";
import classNames from "classnames";
import { InferProps } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { PaginationDefaultProps, PaginationPropTypes } from "./Pagination.props";
import styles from "./Pagination.style";
// @ts-ignore
const useStyles = makeStyles(styles);

export default function Pagination(props:InferProps<typeof PaginationPropTypes>) {
    document.handler.log("Pagination.render()");
    const classes = useStyles();
    const { pages, color } = props;
    return (
        <ul className={classes.pagination}>
            {pages.map((prop, key) => {
                const paginationLink = classNames({
                    [classes.paginationLink]: true,
                    [classes[color]]: prop.active,
                    [classes.disabled]: prop.disabled
                });
                return (
                    <li className={classes.paginationItem} key={key}>
                        {prop.onClick !== undefined ? (
                            <Button onClick={prop.onClick} className={paginationLink}>
                                {prop.text}
                            </Button>
                        ) : (
                            <Button
                                onClick={() => alert("you've clicked " + prop.text)}
                                className={paginationLink}
                            >
                                {prop.text}
                            </Button>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}

Pagination.defaultProps = PaginationDefaultProps;
Pagination.propTypes = PaginationPropTypes;
