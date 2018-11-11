import React, { Component } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { FormControl, Select, MenuItem, Tooltip } from "@material-ui/core";
// @material-ui/icons
import { ShoppingCart, LocalShipping, VerifiedUser, Favorite } from "@material-ui/icons";
// core components
import Parallax from "../../components/Material-UI/Parallax/Parallax";
import Row from "../../components/Material-UI/Grid/GridContainer";
import Col from "../../components/Material-UI/Grid/GridItem";
import Button from "../../components/Material-UI/CustomButton/CustomButtons";
import Accordion from "../../components/Material-UI/Accordion/Accordion";
import InfoArea from "../../components/Material-UI/InfoArea/InfoArea";
import Card from "../../components/Material-UI/Card/Card";
import CardBody from "../../components/Material-UI/Card/CardBody";
import CardHeader from "../../components/Material-UI/Card/CardHeader";
import CardFooter from "../../components/Material-UI/Card/CardFooter";

import productStyle from "../../assets/jss/material-ui-react/views/productPageStyle";

// images
import cardProduct1 from "../../assets/img/product/card-product-1.jpeg";
import cardProduct3 from "../../assets/img/product/card-product-3.jpeg";
import cardProduct4 from "../../assets/img/product/card-product-4.jpeg";
import cardProduct2 from "../../assets/img/product/card-product-2.jpeg";
import product1 from "../../assets/img/product/product1.jpg";
import product2 from "../../assets/img/product/product2.jpg";
import product3 from "../../assets/img/product/product3.jpg";
import product4 from "../../assets/img/product/product4.jpg";

const theme = createMuiTheme({ typography: { useNextVariants: true } });

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorSelect: "0",
            sizeSelect: "0"
        };
    }
    handleSelect = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    componentDidMount() {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    }
    render() {
        const { classes } = this.props;
        const images = [
            {
                original: product3,
                thumbnail: product3
            },
            {
                original: product4,
                thumbnail: product4
            },
            {
                original: product1,
                thumbnail: product1
            },
            {
                original: product2,
                thumbnail: product2
            }
        ];
        return (
            <MuiThemeProvider theme={theme}>
            <div className={classes.productPage}>
                <Parallax
                    image={require("../../assets/img/full-screen-image-4.jpg")}
                    filter="rose"
                    className={classes.pageHeader}
                >
                    <div className={classes.container}>
                        <Row className={classes.titleRow}>
                            <Col md={4} className={classes.mlAuto}>
                                <Button color="white" className={classes.floatRight}>
                                    <ShoppingCart /> 0 items
                                 </Button>
                            </Col>
                        </Row>
                    </div>
                </Parallax>
                <div className={classNames(classes.section, classes.sectionGray)}>
                    <div className={classes.container}>
                        <div className={classNames(classes.main, classes.mainRaised)}>
                            <Row>
                                <Col md={6} sm={6}>
                                    <ImageGallery
                                        showFullscreenButton={false}
                                        showPlayButton={false}
                                        startIndex={3}
                                        items={images}
                                    />
                                </Col>
                                <Col md={6} sm={6}>
                                    <h2 className={classes.title}>Becky Silk Blazer</h2>
                                    <h3 className={classes.mainPrice}>$335</h3>
                                    <Accordion
                                        active={0}
                                        activeColor="rose"
                                        collapses={[
                                            {
                                                title: "Description",
                                                content: (
                                                    <p>
                                                        Eres' daring 'Grigri Fortune' swimsuit has the fit
                                                        and coverage of a bikini in a one-piece silhouette.
                                                        This fuchsia style is crafted from the label's
                                                        sculpting peau douce fabric and has flattering
                                                        cutouts through the torso and back. Wear yours with
                                                        mirrored sunglasses on vacation.
                                                    </p>
                                                )
                                            },
                                            {
                                                title: "Designer Information",
                                                content: (
                                                    <p>
                                                        An infusion of West Coast cool and New York
                                                        attitude, Rebecca Minkoff is synonymous with It girl
                                                        style. Minkoff burst on the fashion scene with her
                                                        best-selling 'Morning After Bag' and later expanded
                                                        her offering with the Rebecca Minkoff Collection - a
                                                        range of luxe city staples with a \"downtown
                                                        romantic\" theme.
                                                    </p>
                                                )
                                            },
                                            {
                                                title: "Details and Care",
                                                content: (
                                                    <ul>
                                                        <li>
                                                            Storm and midnight-blue stretch cotton-blend
                                                        </li>
                                                        <li>
                                                            Notch lapels, functioning buttoned cuffs, two
                                                            front flap pockets, single vent, internal pocket
                                                        </li>
                                                        <li>Two button fastening</li>
                                                        <li>84% cotton, 14% nylon, 2% elastane</li>
                                                        <li>Dry clean</li>
                                                    </ul>
                                                )
                                            }
                                        ]}
                                    />
                                    <Row className={classes.pickSize}>
                                        <Col md={6} sm={6}>
                                            <label>Select color</label>
                                            <FormControl
                                                fullWidth
                                                className={classes.selectFormControl}
                                            >
                                                <Select
                                                    MenuProps={{
                                                        className: classes.selectMenu
                                                    }}
                                                    classes={{
                                                        select: classes.select
                                                    }}
                                                    value={this.state.colorSelect}
                                                    onChange={this.handleSelect}
                                                    inputProps={{
                                                        name: "colorSelect",
                                                        id: "color-select"
                                                    }}
                                                >
                                                    <MenuItem
                                                        classes={{
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected
                                                        }}
                                                        value="0"
                                                    >
                                                        Rose
                                                    </MenuItem>
                                                    <MenuItem
                                                        classes={{
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected
                                                        }}
                                                        value="1"
                                                    >
                                                        Gray
                                                    </MenuItem>
                                                    <MenuItem
                                                        classes={{
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected
                                                        }}
                                                        value="2"
                                                    >
                                                        White
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Col>
                                        <Col md={6} sm={6}>
                                            <label>Select size</label>
                                            <FormControl
                                                fullWidth
                                                className={classes.selectFormControl}
                                            >
                                                <Select
                                                    MenuProps={{
                                                        className: classes.selectMenu
                                                    }}
                                                    classes={{
                                                        select: classes.select
                                                    }}
                                                    value={this.state.sizeSelect}
                                                    onChange={this.handleSelect}
                                                    inputProps={{
                                                        name: "sizeSelect",
                                                        id: "size-select"
                                                    }}
                                                >
                                                    <MenuItem
                                                        classes={{
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected
                                                        }}
                                                        value="0"
                                                    >
                                                        Small
                                                    </MenuItem>
                                                    <MenuItem
                                                        classes={{
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected
                                                        }}
                                                        value="1"
                                                    >
                                                        Medium
                                                    </MenuItem>
                                                    <MenuItem
                                                        classes={{
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected
                                                        }}
                                                        value="2"
                                                    >
                                                        Large
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Col>
                                    </Row>
                                    <Row className={classes.pullRight}>
                                        <Button round color="rose">
                                            Add to Cart &nbsp; <ShoppingCart />
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        <div className={classNames(classes.features, classes.textCenter)}>
                            <Row>
                                <Col md={4} sm={4}>
                                    <InfoArea
                                        title="2 Days Delivery"
                                        description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                        icon={LocalShipping}
                                        iconColor="info"
                                        vertical
                                    />
                                </Col>
                                <Col md={4} sm={4}>
                                    <InfoArea
                                        title="Refundable Policy"
                                        description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                        icon={VerifiedUser}
                                        iconColor="success"
                                        vertical
                                    />
                                </Col>
                                <Col md={4} sm={4}>
                                    <InfoArea
                                        title="Popular Item"
                                        description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                        icon={Favorite}
                                        iconColor="rose"
                                        vertical
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div className={classes.relatedProducts}>
                            <h3 className={classNames(classes.title, classes.textCenter)}>
                                You may also be interested in:
                            </h3>
                            <Row>
                                <Col sm={6} md={3}>
                                    <Card product>
                                        <CardHeader image>
                                            <a href="#pablo">
                                                <img src={cardProduct1} alt="cardProduct" />
                                            </a>
                                        </CardHeader>
                                        <CardBody>
                                            <h6
                                                className={classNames(
                                                    classes.cardCategory,
                                                    classes.textRose
                                                )}
                                            >
                                                Trending
                                            </h6>
                                            <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                                            <div className={classes.cardDescription}>
                                                Dolce & Gabbana's 'Greta' tote has been crafted in Italy
                                                from hard-wearing red textured-leather.
                                            </div>
                                        </CardBody>
                                        <CardFooter className={classes.justifyContentBetween}>
                                            <div className={classes.price}>
                                                <h4>$1,459</h4>
                                            </div>
                                            <div className={classes.stats}>
                                                <Tooltip
                                                    id="tooltip-top"
                                                    title="Save to Wishlist"
                                                    placement="top"
                                                    classes={{ tooltip: classes.tooltip }}
                                                >
                                                    <Button justIcon color="rose" simple>
                                                        <Favorite />
                                                    </Button>
                                                </Tooltip>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col sm={6} md={3}>
                                    <Card product>
                                        <CardHeader image>
                                            <a href="#pablo">
                                                <img src={cardProduct3} alt="cardProduct3" />
                                            </a>
                                        </CardHeader>
                                        <CardBody>
                                            <h6 className={classes.cardCategory}>Popular</h6>
                                            <h4 className={classes.cardTitle}>Balmain</h4>
                                            <div className={classes.cardDescription}>
                                                Balmain's mid-rise skinny jeans are cut with stretch to
                                                ensure they retain their second-skin fit but move
                                                comfortably.
                                            </div>
                                        </CardBody>
                                        <CardFooter className={classes.justifyContentBetween}>
                                            <div className={classes.price}>
                                                <h4>$459</h4>
                                            </div>
                                            <div className={classes.stats}>
                                                <Tooltip
                                                    id="tooltip-top"
                                                    title="Save to Wishlist"
                                                    placement="top"
                                                    classes={{ tooltip: classes.tooltip }}
                                                >
                                                    <Button justIcon link>
                                                        <Favorite />
                                                    </Button>
                                                </Tooltip>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col sm={6} md={3}>
                                    <Card product>
                                        <CardHeader image>
                                            <a href="#pablo">
                                                <img src={cardProduct4} alt="cardProduct4" />
                                            </a>
                                        </CardHeader>
                                        <CardBody>
                                            <h6 className={classes.cardCategory}>Popular</h6>
                                            <h4 className={classes.cardTitle}>Balenciaga</h4>
                                            <div className={classes.cardDescription}>
                                                Balenciaga's black textured-leather wallet is finished
                                                with the label's iconic 'Giant' studs. This is where you
                                                can...
                                            </div>
                                        </CardBody>
                                        <CardFooter className={classes.justifyContentBetween}>
                                            <div className={classes.price}>
                                                <h4>$590</h4>
                                            </div>
                                            <div className={classes.stats}>
                                                <Tooltip
                                                    id="tooltip-top"
                                                    title="Save to Wishlist"
                                                    placement="top"
                                                    classes={{ tooltip: classes.tooltip }}
                                                >
                                                    <Button justIcon color="rose" simple>
                                                        <Favorite />
                                                    </Button>
                                                </Tooltip>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col sm={6} md={3}>
                                    <Card product>
                                        <CardHeader image>
                                            <a href="#pablo">
                                                <img src={cardProduct2} alt="cardProduct2" />
                                            </a>
                                        </CardHeader>
                                        <CardBody>
                                            <h6
                                                className={classNames(
                                                    classes.cardCategory,
                                                    classes.textRose
                                                )}
                                            >
                                                Trending
                                            </h6>
                                            <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                                            <div className={classes.cardDescription}>
                                                Dolce & Gabbana's 'Greta' tote has been crafted in Italy
                                                from hard-wearing red textured-leather.
                                            </div>
                                        </CardBody>
                                        <CardFooter className={classes.justifyContentBetween}>
                                            <div className={classes.price}>
                                                <h4>$1,459</h4>
                                            </div>
                                            <div className={classes.stats}>
                                                <Tooltip
                                                    id="tooltip-top"
                                                    title="Save to Wishlist"
                                                    placement="top"
                                                    classes={{ tooltip: classes.tooltip }}
                                                >
                                                    <Button justIcon link>
                                                        <Favorite />
                                                    </Button>
                                                </Tooltip>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(productStyle)(ProductPage);
