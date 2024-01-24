import 'bootstrap/dist/css/bootstrap.min.css'
// App.js
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './home'
import Tienda from './Tienda'
import AboutUs from './AboutUs'
import Servicios from './Servicios'
import Blog from './Blog'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tienda" component={Tienda} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/servicios" component={Servicios} />
                <Route path="/blog" component={Blog} />
            </Switch>
        </Router>
    )
}

export default App
