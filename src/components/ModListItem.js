import React, { Component , PropTypes } from 'react';


class ModListItemDumb  extends Component {

    static propTypes = {
        backdata: PropTypes.array,
    }

    constructor () {
        super()
        this.state = { 
            data:[]
        }
    }

    componentWillMount () {
        this._loadData();
    }

    componentDidMount () {
        console.log(this.state.data);
    }

    _loadData () {
        const data = this.props.backdata;
        this.setState({ 
            data : data || {}
        })

    }
    render() {
        return (
            <ul className="list_container">
                <li className="js_play_radio">
                    <span className="list_main">
                        <div className="list_media">
                            <img className="list_pic" src="https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg" alt="" />
                            <span className="icon icon_play"></span>
                        </div>
                        <div className="list_info">
                            <h3 className="list_tit tit_two_row">热歌2</h3>
                        </div>
                    </span>
                </li>
                
            </ul>
        );
    }
}

export default ModListItemDumb ;