import { Route, Switch } from 'react-router-dom'

import Calculations from '../pages/Calculations'
import Sandbox from '../pages/Sandbox/Sandbox'
import Login from '../pages/Login/Login'
import CalcHistory from '../pages/CalcHistory'

// import Menu from '../components/complex/Menu'

const GeneralRouterComponent = () => (
    <>
        {/* <Menu /> */}
        <Switch>
            <Route path="/" exact component={Calculations} />
            <Route path="/calc-history" component={CalcHistory} />
            <Route path="/sandbox" exact component={Sandbox} />
            <Route path="/login" component={Login} />
        </Switch>
    </>
)

export default GeneralRouterComponent
