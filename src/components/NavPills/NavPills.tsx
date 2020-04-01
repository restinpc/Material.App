/**
 * Material.App - NavPills component.
 *
 * @ 06.02.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import React from "react";
import classNames from "classnames";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/GridItem/GridItem";
import { NavPillsDefaultProps, NavPillsPropTypes } from "./NavPills.props";
import styles from "./NavPills.style";
// @ts-ignore
const useStyles = makeStyles(styles);

function NavPills(props) {
    document.handler.log("NavPills.render()");
    const [active, setActive] = React.useState(props.active);
    const handleChange = (event, active) => {
        document.handler.log("NavPills.handleChange()");
        setActive(active);
    };
    const handleChangeIndex = index => {
        document.handler.log("NavPills.handleChangeIndex("+index+")");
        setActive(index);
    };
    const classes = useStyles();
    const { tabs, direction, color, horizontal, alignCenter } = props;
    const flexContainerClasses = classNames({
        [classes.flexContainer]: true,
        [classes.horizontalDisplay]: horizontal !== undefined
    });
    const tabButtons = (
        <Tabs
          classes={{
            root: classes.root,
            fixed: classes.fixed,
            flexContainer: flexContainerClasses,
            indicator: classes.displayNone
          }}
          value={active}
          onChange={handleChange}
          centered={alignCenter}
        >
          {tabs.map((prop, key) => {
            var icon = {};
            if (prop.tabIcon !== undefined) {
              icon["icon"] = <prop.tabIcon className={classes.tabIcon} />;
            }
            const pillsClasses = classNames({
              [classes.pills]: true,
              [classes.horizontalPills]: horizontal !== undefined,
              [classes.pillsWithIcons]: prop.tabIcon !== undefined
            });
            return (
              <Tab
                label={prop.tabButton}
                key={key}
                {...icon}
                classes={{
                  root: pillsClasses,
                  selected: classes[color],
                  wrapper: classes.tabWrapper
                }}
              />
            );
          })}
        </Tabs>
    );
    const tabContent = (
        <div className={classes.contentWrapper}>
            <SwipeableViews
                axis={direction === "rtl" ? "x-reverse" : "x"}
                index={active}
                onChangeIndex={handleChangeIndex}
            >
            {tabs.map((prop, key) => {
                return (
                    <div className={classes.tabContent} key={key}>
                        {prop.tabContent}
                    </div>
                );
            })}
            </SwipeableViews>
        </div>
    );
    return horizontal !== undefined ? (
        <GridContainer>
            <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
            <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
        </GridContainer>
    ) : (
        <div>
            {tabButtons}
            {tabContent}
        </div>
    );
}

NavPills.defaultProps = NavPillsDefaultProps;
NavPills.propTypes = NavPillsPropTypes;

export default NavPills;
