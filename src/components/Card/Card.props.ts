/**
 * Material.App - Card Props.
 *
 * @ 21.01.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {ReactElement, ReactNode} from "react";
import PropTypes from "prop-types";

interface ICardProps {
    id?: string,
    plain?: boolean,
    hCenter?: boolean,
    title?: string,
    category?: ReactElement|string,
    ctAllIcons?: boolean,
    ctTableFullWidth?: boolean,
    ctTableResponsive?: boolean,
    ctTableUpgrade?: boolean,
    content: ReactNode,
    legend?: ReactElement,
    stats?: ReactElement|string,
    statsIcon?: string,
    style?: React.CSSProperties,
    className?: string
}

const CardPropsTypes = {
    className: PropTypes.string,
    plain: PropTypes.bool,
    content: PropTypes.node
};

export {ICardProps, CardPropsTypes}
