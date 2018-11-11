import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../../../components/Material-UI/Grid/GridContainer";
import GridItem from "../../../components/Material-UI/Grid/GridItem";
import Card from "../../../components/Material-UI/Card/Card";
import CardHeader from "../../../components/Material-UI/Card/CardHeader";
import CardBody from "../../../components/Material-UI/Card/CardBody";
import CardFooter from "../../../components/Material-UI/Card/CardFooter";
import Button from "../../../components/Material-UI/CustomButton/CustomButtons";
// @material-ui/core components
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Tooltip from "@material-ui/core/Tooltip";
import Typography from '@material-ui/core/Typography';
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "../../../assets/jss/material-ui-react/views/ecommerceSections/latestOffersStyle";

import gucci from "../../../assets/img/product/gucci.jpg";
import tomFord from "../../../assets/img/product/tom-ford.jpg";
import dolce from "../../../assets/img/product/dolce.jpg";

const theme = createMuiTheme({ typography: { useNextVariants: true } });

class SectionLatestOffers extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
      <div className={classes.section}>
        <div className={classes.container}>
        <Typography variant="h3">Latest Offers</Typography>
          <GridContainer>
            <GridItem md={4} sm={4}>
              <Card product plain>
                <CardHeader image plain>
                  <a href="#pablo">
                    <img src={gucci} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${gucci})`, opacity: 1 }}
                  />
                </CardHeader>
                <CardBody className={classes.textCenter} plain>
                  <h4 className={classes.cardTitle}>Gucci</h4>
                  <p className={classes.cardDescription}>
                    The structured shoulders and sleek detailing ensure a sharp
                    silhouette. Team it with a silk pocket square and leather
                    loafers.
                </p>
                </CardBody>
                <CardFooter plain>
                  <div className={classes.priceContainer}>
                    <span className={classNames(classes.price, classes.priceOld)}>
                      {" "}
                      €1,430
                  </span>
                    <span className={classNames(classes.price, classes.priceNew)}>
                      {" "}
                      €743
                  </span>
                  </div>
                  <div className={classNames(classes.stats, classes.mlAuto)}>
                    <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button justIcon simple color="rose">
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem md={4} sm={4}>
              <Card product plain>
                <CardHeader image plain>
                  <a href="#pablo">
                    <img src={dolce} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${dolce})`, opacity: 1 }}
                  />
                </CardHeader>
                <CardBody className={classes.textCenter} plain>
                  <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                  <p className={classes.cardDescription}>
                    The structured shoulders and sleek detailing ensure a sharp
                    silhouette. Team it with a silk pocket square and leather
                    loafers.
                </p>
                </CardBody>
                <CardFooter plain>
                  <div className={classes.priceContainer}>
                    <span className={classNames(classes.price, classes.priceOld)}>
                      {" "}
                      €1,430
                  </span>
                    <span className={classNames(classes.price, classes.priceNew)}>
                      {" "}
                      €743
                  </span>
                  </div>
                  <div className={classNames(classes.stats, classes.mlAuto)}>
                    <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button justIcon simple color="rose">
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem md={4} sm={4}>
              <Card product plain>
                <CardHeader image plain>
                  <a href="#pablo">
                    <img src={tomFord} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${tomFord})`, opacity: 1 }}
                  />
                </CardHeader>
                <CardBody className={classes.textCenter} plain>
                  <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                  <p className={classes.cardDescription}>
                    The structured shoulders and sleek detailing ensure a sharp
                    silhouette. Team it with a silk pocket square and leather
                    loafers.
                </p>
                </CardBody>
                <CardFooter plain>
                  <div className={classes.priceContainer}>
                    <span className={classNames(classes.price, classes.priceOld)}>
                      {" "}
                      €1,430
                  </span>
                    <span className={classNames(classes.price, classes.priceNew)}>
                      {" "}
                      €743
                  </span>
                  </div>
                  <div className={classNames(classes.stats, classes.mlAuto)}>
                    <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button justIcon simple color="rose">
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(SectionLatestOffers);
