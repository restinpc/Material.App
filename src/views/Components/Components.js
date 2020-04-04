import React from "react";
import classNames from "classnames";
import {Link, NavLink} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/GridItem/GridItem";
import Button from "../../components/Button/Button";
import Parallax from "../../components/Parallax/Parallax";
import HeaderLinks from "../../components/HeaderLinks/HeaderLinks";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
import styles from "../../assets/jss/material-kit-react/views/components.js";
import logo from "../../assets/img/logo.webp";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand={
            <NavLink to={process.env.REACT_APP_ROOT} >
                <img src={logo} alt="logo_image" height={40} />
            </NavLink>
        }
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
            height: 0,
            color: "white"
        }}
        {...rest}
        />
        <Parallax image={require("../../assets/img/main-banner.webp")}>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem>
                        <div className={classes.brand}>
                            <h1 className={classes.title}>Material.App</h1>
                            <h3 className={classes.subtitle}>
                                Application Frame for building Frontend.
                            </h3>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
            <SectionBasics />
            <SectionNavbars />
            <SectionPills />
            <SectionNotifications />
            <SectionTypography />
            <SectionJavascript />
            <SectionCompletedExamples />
            <SectionLogin />
            <GridItem md={12} className={classes.textCenter}>
                <Link to={"/login-page"} className={classes.link}>
                    <Button color="primary" size="lg" simple>
                        View Login Page
                    </Button>
                </Link>
            </GridItem>
            <SectionExamples />
            <SectionDownload />
        </div>
        <Footer />
    </div>
  );
}
