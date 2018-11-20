import React from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "../../../components/Material-UI/Grid/GridContainer";
import GridItem from "../../../components/Material-UI/Grid/GridItem";
import Card from "../../../components/Material-UI/Card/Card";
import CardHeader from "../../../components/Material-UI/Card/CardHeader";
import CardBody from "../../../components/Material-UI/Card/CardBody";
import Info from "../../../components/Material-UI/Typography/Info";
import Danger from "../../../components/Material-UI/Typography/Danger";
import Success from "../../../components/Material-UI/Typography/Success";

import blogsStyle from "../../../assets/jss/material-ui-react/views/blogPostSections/sectionSimilarStoriesStyle";

import cardBlog1 from "../../../assets/img/full-screen-image-2.jpg";
import cardBlog2 from "../../../assets/img/sunrise-phu-quoc-island-ocean.jpg";
import cardBlog3 from "../../../assets/img/image-sidebar-2.jpeg";

function BlogPost({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
    <div className={classes.container}>
      <GridContainer>
        <GridItem md={12}>
          <h2 className={classes.title + " " + classes.textCenter}>
            Similar Stories
          </h2>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card blog>
                <CardHeader image>
                  <a href="#pablo">
                    <img src={cardBlog1} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: "url(" + cardBlog1 + ")",
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Info>
                    <h6>ENTERPRISE</h6>
                  </Info>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo">
                      Autodesk looks to future of 3D printing with Project
                      Escher
                    </a>
                  </h4>
                  <p className={classes.description}>
                    Like so many organizations these days, Autodesk is a
                    company in transition. It was until recently a traditional
                    boxed software company selling licenses.
                    <a href="#pablo"> Read More </a>
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card blog>
                <CardHeader image>
                  <a href="#pablo">
                    <img src={cardBlog2} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: "url(" + cardBlog2 + ")",
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Success>
                    <h6>STARTUPS</h6>
                  </Success>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo">
                      Lyft launching cross-platform service this week
                    </a>
                  </h4>
                  <p className={classes.description}>
                    Like so many organizations these days, Autodesk is a
                    company in transition. It was until recently a traditional
                    boxed software company selling licenses.
                    <a href="#pablo"> Read More </a>
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card blog>
                <CardHeader image>
                  <a href="#pablo">
                    <img src={cardBlog3} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: "url(" + cardBlog3 + ")",
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Danger>
                    <h6>
                      <TrendingUp /> ENTERPRISE
                    </h6>
                  </Danger>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo">
                      6 insights into the French Fashion landscape
                    </a>
                  </h4>
                  <p className={classes.description}>
                    Like so many organizations these days, Autodesk is a
                    company in transition. It was until recently a traditional
                    boxed software company selling licenses.
                    <a href="#pablo"> Read More </a>
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  </div>
  );
}

export default withStyles(blogsStyle)(BlogPost);
