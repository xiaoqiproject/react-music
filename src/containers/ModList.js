import React, { Component , PropTypes } from 'react';


import ModlistDumb from '../components/ModList';

import FetchJsonp from 'fetch-jsonp';

class ModlistSmart  extends Component {

    static propTypes = {
        
    }

    constructor () {
        super()
        this.state = { 
            radioList: [],
            slider:[],
            songList:[] 
        }
    }

    componentDidMount () {
        this._loadHomeData()
    }

    componentWillMount () {
       
    }

    _loadHomeData () {
        const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
        FetchJsonp(url, { jsonpCallback: 'jsonpCallback' }).then(function(response) {
            return response.json()
        }).then(function(res) {
            const data = res.data;
            console.log(data);
        }.bind(this))
    }

    render() {
        return (
            <div>
                <ModlistDumb backdata={this.state.radioList} title={'电台'}/>
            </div> 
        );
    }
}


export default ModlistSmart;

