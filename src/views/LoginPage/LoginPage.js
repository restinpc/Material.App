import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/HeaderLinks/HeaderLinks";
import Footer from "../../components/Footer/Footer";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/GridItem/GridItem";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import CustomInput from "../../components/CustomInput/CustomInput";
import styles from "../../assets/jss/material-kit-react/views/loginPage.js";
import image from "../../assets/img/bg7.webp";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Material.App"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]} content={
                <form className={classes.form}>
                  <h1>Login</h1>
                  <CustomInput
                      labelText="First Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor}/>
                            </InputAdornment>
                        )
                      }}
                  />
                  <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor}/>
                            </InputAdornment>
                        )
                      }}
                  />
                  <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                  />
                  <Button simple color="primary" size="lg">
                    Get started
                  </Button>
                </form>
              }
              />
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
