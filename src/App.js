import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'

// CSS
import './App.css'
import 'bulma/css/bulma.css'

// Routes
import { Home } from './pages/Home'
import {Detail} from "./pages/Detail";
import {NotFound} from "./pages/NotFound";

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/detail/:id' component={Detail} />
                <Route component={NotFound} />
            </Switch>
            </div>
        )
    }

}

export default App;
