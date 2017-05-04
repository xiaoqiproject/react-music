import React, { Component , PropTypes } from 'react';
import ModlistItemDumb from './ModListItem';

class ModlistDumb  extends Component {

    static propTypes = {
        data: PropTypes.array,
        title: PropTypes.string
    }

    constructor () {
        super()
        this.state = { 
            data:[],
            title:null
        }
    }

    componentWillMount () {
        this._loadData();
    }

    _loadData () {
        const data = this.props.backdata;
        const title = this.props.title;
        this.setState({ 
            data : data,
            title: title
        })

    }
    
    render() {
        return (
            <div className="mod_twocol_list">
                <h2 className="list_title">{this.state.title}</h2>
                <ModlistItemDumb backdata={this.state.ddata} />
            </div>
        );
    }
}

export default ModlistDumb ;