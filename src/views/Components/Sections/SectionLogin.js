import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/GridItem/GridItem";
import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";
import CustomInput from "../../../components/CustomInput/CustomInput";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);

export default function SectionLogin() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card content={
              <form className={classes.form}>
                <div className={classes.cardHeader}>
                  <h4 className={classes.loginCaption}>Login</h4>
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
                </div>
              </form>
            } />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
