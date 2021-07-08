import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import Routes from "./routes";
import HistoryService from "./useCases/services/HistoryService";

import store from "./redux/store";
import { Provider } from "react-redux";


ReactDOM.render(
    <React.StrictMode>
        <Router history={HistoryService.getHistory()}>
            <Provider store={store}>
                <Routes />
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
