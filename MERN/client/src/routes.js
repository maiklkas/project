import React from 'react';
import {Switch, Route} from 'react-router-dom'

export const useRoutes = isAuthenticated => {
 if (isAuthenticated) {
    return(this
        <Switch>
          <Route path = "/home" exact>
            <Homepage />
          </Route>
          <Route path = "/own" exact>
            <Ownpage />
          </Route>
          <Redirect to = '/home' />'
        </Switch>

    )

    }
    return(
      <Switch>

        <Route path = "/" exact>
          <Homepage />
        </Route>
        <Redirect to = "/" />
      </Switch>




    )


}
