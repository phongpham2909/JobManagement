import React, { Component } from 'react';
import Header from "../../components/Material-UI/Header/Header";
import HeaderLinks from "../../components/Material-UI/Header/HeaderLinks";

class HeaderContent extends Component {
    render() {
        return (
            <Header
                brand="My Project by Phong Phạm"
                links={<HeaderLinks dropdownHoverColor="info" />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 300,
                    color: "info"
                }}
            />
        );
    }
}

export default HeaderContent;