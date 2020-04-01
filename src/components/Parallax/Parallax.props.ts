/**
 * Material.App - Parallax Props.
 *
 * @ 31.01.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import PropTypes from "prop-types";

const ParallaxPropTypes = {
    className: PropTypes.string,
    filter: PropTypes.bool,
    children: PropTypes.node,
    style: PropTypes.string,
    image: PropTypes.string,
    small: PropTypes.bool
};

export { ParallaxPropTypes };
