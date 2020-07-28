import React from 'react';
import {  Route, Switch} from 'react-router-dom';
import { Home } from '../pajes/Home';
import { About } from '../pajes/About';
import {Registr} from '../components/registr';
import {Registra} from '../components/registra';


export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return(
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/registr" component={Registr} />
        <Route path="/registra" component={Registra} />
      </Switch>
    )
}

  return (

    <Switch>

      <Route path="/About" component={About} />
      <Route path="/registr" component={Registr} />
      <Route path="/registra" component={Registra} />
    </Switch>
  )

  }
