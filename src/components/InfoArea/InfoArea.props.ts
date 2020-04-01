/**
 * Material.App - InfoArea Props.
 *
 * @ 31.01.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
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
