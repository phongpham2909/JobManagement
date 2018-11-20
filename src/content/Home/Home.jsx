import React, { Component } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "../../components/Material-UI/Grid/GridContainer";
import GridItem from "../../components/Material-UI/Grid/GridItem";
import Button from "../../components/Material-UI/CustomButton/CustomButtons";
// @material-ui/icons
import Share from "@material-ui/icons/Share";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
//components
import SectionLatestOffers from "../EcommercePage/Sections/SectionLatestOffers";
import BlogPost from "./Sections/BlogPost";

import headersStyle from "../../assets/jss/material-ui-react/views/sections/headersStyle";

import banner1 from "../../assets/img/sunrise-phu-quoc-island-ocean.jpg";
import banner2 from "../../assets/img/image-sidebar-2.jpeg";
import banner3 from "../../assets/img/image-sidebar-3.jpeg";

class Home extends Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div>

        <Carousel {...settings}>
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${banner1}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <h1 className={classes.title}>Material Kit PRO React</h1>
                    <h4>
                      Dolce & Gabbana is a luxury Italian fashion house founded
                      in 1985 in Legnano by Italian designers Domenico Dolce and
                      Stefano Gabbana. The two met in Milan in 1980 and designed
                      for the same fashion house.
                        </h4>
                    <br />
                    <Button color="danger">
                      Read more
                        </Button>
                    <Button justIcon color="white" simple>
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon color="white" simple>
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon color="white" simple>
                      <i className="fab fa-get-pocket" />
                    </Button>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>

          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${banner2}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <h1 className={classes.title}>Material Kit PRO React</h1>
                    <h4>
                      Dolce & Gabbana is a luxury Italian fashion house founded
                      in 1985 in Legnano by Italian designers Domenico Dolce and
                      Stefano Gabbana. The two met in Milan in 1980 and designed
                      for the same fashion house.
                        </h4>
                    <br />
                    <h6>Connect with us on:</h6>
                    <div>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-google-plus-g" />
                      </Button>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-instagram" />
                      </Button>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>

          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${banner3}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={7}
                    md={7}
                    className={classNames(classes.mlAuto, classes.textRight)}
                  >
                    <h1 className={classes.title}>New Collection 50% Off</h1>
                    <h4>
                      There's no doubt that Tesla is delighted with the
                      interest, but the data also raises a few questions. How
                      long will it take for Tesla to fulfill all those extra
                      orders?
                        </h4>
                    <br />
                    <div>
                      <Button color="white" simple>
                        <Share /> Share Offer
                          </Button>
                      <Button color="danger">
                        <ShoppingCart /> Shop now
                          </Button>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </Carousel>
        <SectionLatestOffers />
        <BlogPost />
      </div>
    );
  }
}

export default withStyles(headersStyle)(Home);