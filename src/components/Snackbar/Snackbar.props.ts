/**
 * Material.App - Snackbar Props.
 *
 * @ 06.02.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import PropTypes from "prop-types";

const SnackbarContentProps = {
    message: PropTypes.node.isRequired,
    color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),
    close: PropTypes.bool,
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default SnackbarContentProps;
