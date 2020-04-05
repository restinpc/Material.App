/**
 * Material.App - InfoArea Props.
 *
 * @ 31.01.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import PropTypes from "prop-types";

const InfoAreaDefaultProps = {
    iconColor: "gray"
};

const InfoAreaPropTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    iconColor: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    vertical: PropTypes.bool
};

export {InfoAreaDefaultProps, InfoAreaPropTypes}
