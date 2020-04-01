/**
 * Material.App - Badge Props.
 *
 * @ 31.01.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import PropTypes from "prop-types";

const BadgeDefaultProps = {
    color: "gray"
};

const BadgePropTypes = {
    color: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    children: PropTypes.node
};

export { BadgeDefaultProps, BadgePropTypes };
