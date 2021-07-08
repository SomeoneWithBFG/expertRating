import { createBrowserHistory } from 'history'
import { Route } from 'react-router-dom'

const buildHistoryOptions = {
  basename: process.env.BASE_NAME,
}

class HistoryService {
  history = createBrowserHistory(buildHistoryOptions)

  getHistory() {
    console.log(this.history)
    return this.history
  }

  push(route: Route) {
    console.log(this.history)
    this.history.push(route)
    console.log(this.history)
  }

  back() {
    this.history.goBack()
    console.log(this.history)
  }
}

export default new HistoryService()
