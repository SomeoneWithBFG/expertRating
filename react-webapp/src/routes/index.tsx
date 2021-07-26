import { Route, Switch } from 'react-router-dom'

import Arcticles from '../pages/Arcticles/Articles'
import Sandbox from '../pages/Sandbox/Sandbox'
import Login from '../pages/Login/Login'

import Menu from '../components/complex/Menu'

const GeneralRouterComponent = () => (
    <>
        <Menu />
        <Switch>
            <Route path="/articles" component={Arcticles} />
            <Route path="/login" component={Login} />
            <Route path="/sandbox" component={Sandbox} />
        </Switch>
    </>
)

export default GeneralRouterComponent
