import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockOutlined from "@material-ui/icons/LockOutlined";
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
import image from "../../assets/img/bg7.jpg";

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
                  <h1 className={classes.loginCaption}>Login</h1>
                  <CustomInput
                      labelText="Email"
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
                              <LockOutlined className={classes.inputIconsColor} />
                            </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                  />
                    <div style={{paddingTop: "20px", textAlign: "center"}}>
                        <Button variant="contained" color="primary" size="large" style={{margin: "0px auto"}}>
                            Get started!
                        </Button>
                        <br/>
                        <div style={{paddingTop:'40px',paddingBottom:'10px', color:"#666", textAlign: "center"}}>
                            Problems with sign in? &nbsp;
                            <NavLink to="/register">Restore an access &crarr;</NavLink>
                        </div>
                    </div>
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
