/**
 * Material.App - GridContainer Props.
 *
 * @ 21.01.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import PropTypes from "prop-types";

const GridContainerDefaultProps = {
    className: ""
};

const GridContainerPropTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export { GridContainerDefaultProps, GridContainerPropTypes }
