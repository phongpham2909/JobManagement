import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
//layouts content
import HeaderContent from './Header/HeaderContent';
import FooterContent from './Footer/FooterContent';

import routesContents from '../routes/routesContent';

class index extends Component {
    render() {
        return (
                <div>
                    <HeaderContent />
                    <Switch>
                        {routesContents.routesContent.map((prop, key) => {
                            return (
                                <Route
                                    key={key}
                                    path={prop.path}
                                    component={prop.component}
                                />
                            );
                        })}
                    </Switch>
                    <FooterContent />
                </div>
        );
    }
}

export default index;