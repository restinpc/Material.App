/**
 * Material.App - NavPills Props.
 *
 * @ 31.01.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import PropTypes from "prop-types";

const NavPillsDefaultProps = {
    active: 0,
    color: "primary"
};

const NavPillsPropTypes = {
    // index of the default active pill
    active: PropTypes.number,
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            tabButton: PropTypes.string,
            tabIcon: PropTypes.object,
            tabContent: PropTypes.node
        })
    ).isRequired,
    color: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose"
    ]),
    direction: PropTypes.string,
    horizontal: PropTypes.shape({
        tabsGrid: PropTypes.object,
        contentGrid: PropTypes.object
    }),
    alignCenter: PropTypes.bool
};

export { NavPillsDefaultProps, NavPillsPropTypes }
