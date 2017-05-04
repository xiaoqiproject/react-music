import React, { Component } from 'react';

import HeaderSmart from '../containers/Header';
import NavSmart from '../containers/Nav';
import SliderSmart from '../containers/Slider';
import ModListSmart from '../containers/ModList';


class HomePage extends Component {

   
    render() {
        return (
            <div className="homepage">
                <HeaderSmart />
                <NavSmart />
                <SliderSmart />
                <ModListSmart />
            </div>
        );
    }
}

export default HomePage;