import React from 'react';
import { Switch, Route} from 'react-router-dom'; 

import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Error from './Pages/Error'; 

export default function Router(){
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Carro' component={Cart} />
            <Route exact path='*' component={Error} />
        </Switch>
    );
}


