import React from 'react'
import {
  Route, Switch, withRouter,
} from 'react-router-dom'

import Arcticles from "../pages/Arcticles/Articles"
import Sandbox from "../pages/Sandbox/Sandbox"

const GeneralRouterComponent = () => (
    <Switch>
        <Route
            path="/articles"
            component={Arcticles}
        />

        <Route
            path="/sandbox"
            component={Sandbox}
        />
   </Switch>
  )
  
  export default withRouter(GeneralRouterComponent)
  