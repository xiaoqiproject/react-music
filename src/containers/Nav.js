import React, { Component } from 'react';

import NavDumb from '../components/Nav';

const navData = [{
        'path':'/',
        'name':'推荐'
    },{
        'path':'/tacos',
        'name':'排行榜'
    },{
        'path':'/',
        'name':'搜索'
    }]

class NavSmart  extends Component {

    constructor () {
        super()
        this.state = { 
            nav: navData 
        }
    }

    render() {
        return (
            <NavDumb linknav={this.state.nav} />
        );
    }
}

export default NavSmart ;