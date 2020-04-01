/**
 * Material.App - CustomTabs component.
 *
 * @ 06.02.2020 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";
import Card from "../../components/Card/Card";
import styles from "./CustomTabs.style";
import { CustomTabsPropTypes, ICustomTabsProps } from "./CustomTabs.props";
// @ts-ignore
const useStyles = makeStyles(styles);

const CustomTabs: React.FunctionComponent<ICustomTabsProps> = (props) => {
    document.handler.log("CustomTabs.render()");
    const [value, setValue] = React.useState(0);
    const handleChange = (event, value) => {
        document.handler.log("CustomTabs.handleChange()");
        setValue(value);
    };
    const classes = useStyles();
    const { plainTabs, tabs, title, rtlActive } = props;
    const cardTitle = classNames({
        [classes.cardTitle]: true,
        [classes.cardTitleRTL]: rtlActive
    });
    return (
        <Card plain={plainTabs} content={
            <div>
                {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
                <Tabs
                    value={value}
                    onChange={handleChange}
                    classes={{
                        root: classes.tabsRoot,
                        indicator: classes.displayNone
                    }}
                >
                    {tabs.map((prop, key) => {
                        var icon = {};
                        if (prop.tabIcon) {
                            icon = {
                                icon:
                                    typeof prop.tabIcon === "string" ? (
                                        <Icon>{prop.tabIcon}</Icon>
                                    ) : (
                                        <prop.tabIcon />
                                    )
                            };
                        }
                        return (
                            <Tab
                                classes={{
                                    root: classes.tabRootButton,
                                    label: classes.tabLabel,
                                    selected: classes.tabSelected,
                                    wrapper: classes.tabWrapper
                                }}
                                key={key}
                                label={prop.tabName}
                                {...icon}
                            />
                        );
                    })}
                </Tabs>
                {tabs.map((prop, key) => {
                    if (key === value) {
                        return <div key={key}>{prop.tabContent}</div>;
                    }
                    return null;
                })}
            </div>
        } />
    );
};

CustomTabs.propTypes = CustomTabsPropTypes;

export {CustomTabs as default}
