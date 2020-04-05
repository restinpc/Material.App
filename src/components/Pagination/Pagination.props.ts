/**
 * Material.App - Pagination Props.
 *
 * @ 31.01.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import PropTypes from "prop-types";

const PaginationDefaultProps = {
    color: "primary"
};

const PaginationPropTypes = {
    pages: PropTypes.arrayOf(
        PropTypes.shape({
            active: PropTypes.bool,
            disabled: PropTypes.bool,
            text: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.oneOf(["PREV", "NEXT", "..."])
            ]).isRequired,
            onClick: PropTypes.func
        })
    ).isRequired,
    color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export { PaginationDefaultProps, PaginationPropTypes };
