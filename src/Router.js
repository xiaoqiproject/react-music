import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import HomePage from './pages/Home';


const Tacos = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li><Link to="/tacos/bus">Bus</Link></li>
      <li><Link to="/tacos/cart">Cart</Link></li>
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route}/>
    ))}
  </div>
)

const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>

////////////////////////////////////////////////////////////
// then our route config
const routes = [
    {   
        path: '/',
        component: HomePage
    },
    { path: '/tacos',
        component: Tacos,
        routes: [
            { path: '/tacos/bus',
                component: Bus
            },
            { path: '/tacos/cart',
                component: Cart
            }
        ]
    }
]

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>
    )}/>
)

const router = () => (
    <Router>
        <div className="wrap">
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
    </Router>
)

export default router