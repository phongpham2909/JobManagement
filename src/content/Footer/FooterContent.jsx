import React, { Component } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

//components
import GridContainer from "../../components/Material-UI/Grid/GridContainer";
import GridItem from "../../components/Material-UI/Grid/GridItem";
import Footer from "../../components/Material-UI/Footer/Footer";

//styles css
import styles from "../../assets/jss/material-ui-react/views/ecommerceStyle";

//images
import face1 from "../../assets/img/avatar-1.jpg";
import face2 from "../../assets/img/avatar-1.jpg";
import face3 from "../../assets/img/avatar-1.jpg";
import face4 from "../../assets/img/avatar-1.jpg";
import face5 from "../../assets/img/avatar-1.jpg";
import face6 from "../../assets/img/avatar-1.jpg";
import face7 from "../../assets/img/avatar-1.jpg";
import face8 from "../../assets/img/avatar-1.jpg";

class FooterContent extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Footer
                theme="dark"
                content={
                    <div>
                        <div className={classes.left}>
                            <List className={classes.list}>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="http://blog.creative-tim.com/"
                                        className={classes.block}
                                    >
                                        Blog
                                    </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="https://www.creative-tim.com/presentation"
                                        className={classes.block}
                                    >
                                        Presentation
                                    </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="#pablito"
                                        onClick={e => e.preventDefault()}
                                        className={classes.block}
                                    >
                                        Discover
                                    </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="#pablito"
                                        onClick={e => e.preventDefault()}
                                        className={classes.block}
                                    >
                                        Payment
                                    </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="https://www.creative-tim.com/contact-us"
                                        className={classes.block}
                                    >
                                        Contact us
                                    </a>
                                </ListItem>
                            </List>
                        </div>
                        <div className={classes.right}>
                            Copyright &copy; {1900 + new Date().getYear()}{" "}
                            <a
                                href="https://www.creative-tim.com"
                                className={classes.aClasses}
                            >
                                Creative Tim
                            </a>{" "}
                            All Rights Reserved.
                </div>
                    </div>
                }
            >
                <GridContainer>
                    <GridItem xs={12} sm={4} md={4}>
                        <h5>About Us</h5>
                        <p>
                            Creative Tim is a startup that creates design tools that make
                  the web development process faster and easier.{" "}
                        </p>
                        <p>
                            We love the web and care deeply for how users interact with a
                            digital product. We power businesses and individuals to create
                  better looking web projects around the world.{" "}
                        </p>
                    </GridItem>
                    <GridItem xs={12} sm={4} md={4}>
                        <h5>Social Feed</h5>
                        <div className={classes.socialFeed}>
                            <div>
                                <i className="fab fa-twitter" />
                                <p>How to handle ethical disagreements with your clients.</p>
                            </div>
                            <div>
                                <i className="fab fa-twitter" />
                                <p>The tangible benefits of designing at 1x pixel density.</p>
                            </div>
                            <div>
                                <i className="fab fa-facebook-square" />
                                <p>
                                    A collection of 25 stunning sites that you can use for
                                    inspiration.
                                </p>
                            </div>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={4} md={4}>
                        <h5>Instagram Feed</h5>
                        <div className={classes.galleryFeed}>
                            <img
                                src={face1}
                                className={classNames(
                                    classes.img,
                                    classes.imgRaised,
                                    classes.imgRounded
                                )}
                                alt="..."
                            />
                            <img
                                src={face2}
                                className={classNames(
                                    classes.img,
                                    classes.imgRaised,
                                    classes.imgRounded
                                )}
                                alt="..."
                            />
                            <img
                                src={face3}
                                className={classNames(
                                    classes.img,
                                    classes.imgRaised,
                                    classes.imgRounded
                                )}
                                alt="..."
                            />
                            <img
                                src={face4}
                                className={classNames(
                                    classes.img,
                                    classes.imgRaised,
                                    classes.imgRounded
                                )}
                                alt="..."
                            />
                            <img
                                src={face5}
                                className={classNames(
                                    classes.img,
                                    classes.imgRaised,
                                    classes.imgRounded
                                )}
                                alt="..."
                            />
                            <img
                                src={face6}
                                className={classNames(
                                    classes.img,
                                    classes.imgRaised,
                                    classes.imgRounded
                                )}
                                alt="..."
                            />
                            <img
                                src={face7}
                                className={classNames(
                                    classes.img,
                                    classes.imgRaised,
                                    classes.imgRounded
                                )}
                                alt="..."
                            />
                            <img
                                src={face8}
                                className={classNames(
                                    classes.img,
                                    classes.imgRaised,
                                    classes.imgRounded
                                )}
                                alt="..."
                            />
                        </div>
                    </GridItem>
                </GridContainer>
            </Footer>
        );
    }
}

export default withStyles(styles)(FooterContent);