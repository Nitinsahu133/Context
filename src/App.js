import {Component} from 'react'
import ConfigurationController from './components/ConfigurationController'
import Layout from './components/Layout'

import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
        <ConfigurationController />
      </div>
    )
  }
}

export default App
