import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../../../components/Material-UI/Grid/GridContainer";
import GridItem from "../../../components/Material-UI/Grid/GridItem";
import Card from "../../../components/Material-UI/Card/Card";
import CardHeader from "../../../components/Material-UI/Card/CardHeader";
import CardBody from "../../../components/Material-UI/Card/CardBody";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';

import dg6 from "../../../assets/img/product/dg6.jpg";
import dg10 from "../../../assets/img/product/dg10.jpg";
import dg9 from "../../../assets/img/product/dg9.jpg";

import styles from "../../../assets/jss/material-ui-react/views/ecommerceSections/blogStyle";

const SectionBlog = props => {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
      <Typography variant="h2" className={classes.sectionTitle}>Latest Articles</Typography>
        <GridContainer>
          <GridItem md={4} sm={4}>
            <Card blog>
              <CardHeader image>
                <a href="#pablo">
                  <img src={dg6} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${dg6})`, opacity: 1 }}
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h6"
                  className={classNames(classes.cardCategory, classes.textRose)}
                >
                  Trends
                </Typography>
                <Typography variant="h4" className={classes.cardTitle}>
                  <a href="#pablo">
                    Learn how to wear your scarf with a floral print shirt
                  </a>
                </Typography>
                <p className={classes.cardDescription}>
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card blog>
              <CardHeader image>
                <a href="#pablo">
                  <img src={dg10} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${dg10})`, opacity: 1 }}
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h6"
                  className={classNames(classes.cardCategory, classes.textRose)}
                >
                  Fashion Week
                </Typography>
                <Typography variant="h4" className={classes.cardTitle}>
                  <a href="#pablo">
                    Katy Perry was wearing a Dolce & Gabanna arc dress
                  </a>
                </Typography>
                <p className={classes.cardDescription}>
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card blog>
              <CardHeader image>
                <a href="#pablo">
                  <img src={dg9} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${dg9})`, opacity: 1 }}
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h6"
                  className={classNames(classes.cardCategory, classes.textRose)}
                >
                  Fashion Week
                </Typography>
                <Typography variant="h4" className={classes.cardTitle}>
                  <a href="#pablo">
                    Check the latest fashion events and which are the trends
                  </a>
                </Typography>
                <p className={classes.cardDescription}>
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default withStyles(styles)(SectionBlog);
