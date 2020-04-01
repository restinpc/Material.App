/**
 * Material.App - Parallax component.
 *
 * @ 06.02.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import {ParallaxPropTypes} from "./Parallax.props";
import styles from "./Parallax.style";
// @ts-ignore
const useStyles = makeStyles(styles);

export default function Parallax(props) {
    document.handler.log("Parallax.render()");
    let windowScrollTop;
    if (window.innerWidth >= 768) {
        windowScrollTop = window.pageYOffset / 3;
    } else {
        windowScrollTop = 0;
    }
    const [transform, setTransform] = React.useState(
        "translate3d(0," + windowScrollTop + "px,0)"
    );
    React.useEffect(() => {
        if (window.innerWidth >= 768) {
            window.addEventListener("scroll", resetTransform);
        }
        return function cleanup() {
            if (window.innerWidth >= 768) {
                window.removeEventListener("scroll", resetTransform);
            }
        };
    });
    const { filter, className, children, style, image, small } = props;
    const classes = useStyles();
    const parallaxClasses = classNames({
        [classes.parallax]: true,
        [classes.filter]: filter,
        [classes.small]: small,
        [className]: className !== undefined
    });
    const resetTransform = () => {
        document.handler.log("Parallax.resetTransform()");
        var windowScrollTop = window.pageYOffset / 3;
        setTransform("translate3d(0," + windowScrollTop + "px,0)");
    };

    return (
        <div
            className={parallaxClasses}
            style={{
                ...style,
                backgroundImage: "url(" + image + ")",
                transform: transform
            }}
        >
            {children}
        </div>
    );
}

Parallax.propTypes = ParallaxPropTypes;
