/**
 * Material.App - CustomLinearProgress Props.
 *
 * @ 31.01.2020 # Aleksandr <developing@nodes-tech.ru>
 */

import PropTypes from "prop-types";

interface ICustomLinearProgressProps {
    color: string;
}

const CustomLinearProgressDefaultProps = {
    color: "gray"
};

const CustomLinearProgressPropTypes = {
    color: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ])
};

export { ICustomLinearProgressProps, CustomLinearProgressPropTypes, CustomLinearProgressDefaultProps };
