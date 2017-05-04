import React, { Component , PropTypes } from 'react';
import { Link } from 'react-router-dom'

class NavDumb  extends Component {

    static propTypes = {
        linknav: PropTypes.object
    }
    constructor () {
        super()
        this.state = {
            navlinks : []
        }
    }

    componentWillMount () {
       this._loadNavLink()
    }

    _loadNavLink () {
        const linknav = this.props.linknav;
        this.setState({ 
            navlinks : linknav
        })
    }
    
    render() {
        return (
            <nav className="mod_nav">
                {this.state.navlinks.map((nav, i) => (
                    <Link className={i === 0? 'current' : ''} key={i} to={nav.path}>{nav.name}</Link>
                ))}
            </nav>
        );
    }
}

export default NavDumb ;
