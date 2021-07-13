import { Route, Switch } from 'react-router-dom'

import Arcticles from '../pages/Arcticles/Articles'
import Sandbox from '../pages/Sandbox/Sandbox'

import Menu from '../components/complex/Menu'

const GeneralRouterComponent = () => (
    <>
        <Menu />
        <Switch>
            <Route path="/articles" component={Arcticles} />
            <Route path="/sandbox" component={Sandbox} />
        </Switch>
    </>
)

export default GeneralRouterComponent
