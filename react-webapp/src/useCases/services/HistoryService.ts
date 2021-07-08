import { createBrowserHistory } from 'history'
import { Route } from 'react-router-dom'

const buildHistoryOptions = {
  basename: process.env.BASE_NAME,
}

class HistoryService {
  history = createBrowserHistory(buildHistoryOptions)

  getHistory() {
    return this.history
  }

  push(route: Route) {
    this.history.push(route)
  }

  back() {
    this.history.goBack()
  }
}

export default new HistoryService()
