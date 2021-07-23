import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import axios from 'axios'

import Routes from './routes'

import { store } from './redux/store'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'

axios.defaults.baseURL = 'http://localhost:3000/api'
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorker.register()
